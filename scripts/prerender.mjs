#!/usr/bin/env node
/**
 * Post-build prerender: saves fully rendered HTML (head + body) for each public route.
 * Run after `vite build`. Skip with PRERENDER_SKIP=1.
 *
 * Uses @sparticuz/chromium on Vercel/Linux (no system lib dependencies).
 * Falls back to bundled Puppeteer on Windows/macOS for local builds.
 */

import { createServer } from 'node:net'
import { spawn } from 'node:child_process'
import { copyFileSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_ONLY_ROUTES, PRERENDER_ROUTES, NOT_FOUND_PRERENDER_PATH } from './seo-routes.mjs'

// @sparticuz/chromium reads these at import time to extract al2023 libs (libnss3, etc.).
if (
  !process.env.AWS_LAMBDA_JS_RUNTIME &&
  (process.env.VERCEL || process.platform === 'linux')
) {
  const nodeMajor = Number(process.versions.node.split('.')[0])
  process.env.AWS_LAMBDA_JS_RUNTIME = nodeMajor >= 22 ? 'nodejs22.x' : 'nodejs20.x'
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const dist = join(root, 'dist')
const BASE_HOST = '127.0.0.1'

if (process.env.PRERENDER_SKIP === '1') {
  console.log('Prerender skipped (PRERENDER_SKIP=1)')
  process.exit(0)
}

if (!existsSync(join(dist, 'index.html'))) {
  console.error('Prerender failed: dist/index.html not found. Run vite build first.')
  process.exit(1)
}

function routeToOutFile(route) {
  if (route === '/') return join(dist, 'index.html')
  return join(dist, ...route.replace(/^\//, '').split('/'), 'index.html')
}

function getAvailablePort(preferred = Number(process.env.PRERENDER_PORT ?? 4173)) {
  return new Promise((resolve, reject) => {
    const server = createServer()
    server.unref()
    server.on('error', () => {
      server.close()
      resolve(getAvailablePort(preferred + 1))
    })
    server.listen(preferred, BASE_HOST, () => {
      const { port } = server.address()
      server.close((error) => {
        if (error) {
          reject(error)
          return
        }
        resolve(port)
      })
    })
  })
}

function startPreview(port) {
  return new Promise((resolve, reject) => {
    const proc = spawn(
      'npx',
      ['vite', 'preview', '--port', String(port), '--strictPort', '--host', BASE_HOST],
      {
        cwd: root,
        shell: true,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'production' },
      },
    )

    let settled = false
    let stderr = ''

    proc.stderr?.on('data', (chunk) => {
      stderr += chunk.toString()
    })

    proc.on('error', (error) => {
      if (!settled) {
        settled = true
        reject(error)
      }
    })

    proc.on('exit', (code) => {
      if (!settled && code !== 0) {
        settled = true
        reject(new Error(stderr.trim() || `Preview server exited with code ${code}`))
      }
    })

    setTimeout(() => {
      if (!settled) {
        settled = true
        resolve({ proc, port })
      }
    }, 1500)
  })
}

async function waitForPreviewServer(baseUrl) {
  let lastStatus = 'unreachable'
  const deadline = Date.now() + 60_000

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`, { redirect: 'follow' })
      lastStatus = String(response.status)
      if (response.ok) {
        return
      }
    } catch {
      lastStatus = 'unreachable'
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  throw new Error(`Preview server not reachable at ${baseUrl} (last status: ${lastStatus})`)
}

async function launchBrowser() {
  const useServerlessChromium = Boolean(
    process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME || process.platform === 'linux',
  )

  if (useServerlessChromium) {
    const chromium = (await import('@sparticuz/chromium')).default
    const puppeteer = (await import('puppeteer-core')).default
    chromium.setGraphicsMode = false

    const executablePath = await chromium.executablePath()
    const execDir = dirname(executablePath)
    const al2023Lib = join(tmpdir(), 'al2023', 'lib')
    const libraryPath = [execDir, al2023Lib, process.env.LD_LIBRARY_PATH]
      .filter(Boolean)
      .join(':')

    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: { width: 1280, height: 800 },
      executablePath,
      headless: true,
      env: {
        ...process.env,
        LD_LIBRARY_PATH: libraryPath,
      },
    })
  }

  const puppeteer = (await import('puppeteer')).default
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })
}

async function waitForHeroImage(page) {
  try {
    await page.waitForFunction(
      () => {
        const heroImg = document.querySelector('#home img')
        return heroImg instanceof HTMLImageElement && heroImg.complete && heroImg.naturalWidth > 0
      },
      { timeout: 8_000 },
    )
  } catch {
    console.warn('  ⚠ Homepage hero image did not finish loading before prerender snapshot')
  }
}

async function waitForRouteSeo(page, route) {
  try {
    await page.waitForFunction(
      () => document.querySelectorAll('link[rel="canonical"]').length === 1,
      { timeout: 5_000 },
    )
  } catch {
    console.warn(`  ⚠ SEO tags for ${route} did not settle before prerender snapshot`)
  }
}

async function prerenderRoute(page, baseUrl, route) {
  restoreSpaShell()
  const url = `${baseUrl}${route}`
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 })
  await page.waitForSelector('main', { timeout: 15_000 })
  await waitForRouteSeo(page, route)

  if (route === '/') {
    await waitForHeroImage(page)
  }

  await new Promise((resolve) => setTimeout(resolve, 300))

  const html = await page.content()
  const outFile = routeToOutFile(route)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html, 'utf8')
  console.log(`  ✓ ${route}`)
}

function restoreSpaShell() {
  const spaShell = join(dist, '.spa-shell.html')
  const indexHtml = join(dist, 'index.html')

  if (!existsSync(spaShell)) {
    throw new Error('Missing dist/.spa-shell.html — run save-spa-shell after vite build')
  }

  copyFileSync(spaShell, indexHtml)
}

function clearStalePrerenderHtml() {
  for (const route of [...PRERENDER_ROUTES, ...PRERENDER_ONLY_ROUTES]) {
    if (route === '/') {
      continue
    }

    const outFile = routeToOutFile(route)
    if (existsSync(outFile)) {
      rmSync(outFile, { force: true })
    }
  }

  const notFoundHtml = join(dist, '404.html')
  if (existsSync(notFoundHtml)) {
    rmSync(notFoundHtml, { force: true })
  }
}

async function main() {
  console.log(`Prerendering ${PRERENDER_ROUTES.length} routes…`)
  restoreSpaShell()
  clearStalePrerenderHtml()
  const port = await getAvailablePort()
  const baseUrl = `http://${BASE_HOST}:${port}`
  const { proc: preview } = await startPreview(port)

  try {
    await waitForPreviewServer(baseUrl)
    const browser = await launchBrowser()

    try {
      const routes = [
        ...PRERENDER_ROUTES.filter((route) => route !== '/'),
        ...PRERENDER_ONLY_ROUTES,
        '/',
      ]

      for (const route of routes) {
        const page = await browser.newPage()
        await page.setViewport({ width: 1280, height: 800 })
        await page.setRequestInterception(true)
        page.on('request', (request) => {
          if (request.resourceType() === 'media') {
            request.abort()
            return
          }
          request.continue()
        })
        await prerenderRoute(page, baseUrl, route)
        await page.close()
      }

      const notFoundPage = await browser.newPage()
      await notFoundPage.setViewport({ width: 1280, height: 800 })
      await notFoundPage.setRequestInterception(true)
      notFoundPage.on('request', (request) => {
        if (request.resourceType() === 'media') {
          request.abort()
          return
        }
        request.continue()
      })

      // Static 404.html for Vercel (HTTP 404 on unknown URLs)
      const notFoundUrl = `${baseUrl}${NOT_FOUND_PRERENDER_PATH}`
      await notFoundPage.goto(notFoundUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 })
      await notFoundPage.waitForSelector('main', { timeout: 15_000 })
      await new Promise((resolve) => setTimeout(resolve, 500))
      writeFileSync(join(dist, '404.html'), await notFoundPage.content(), 'utf8')
      await notFoundPage.close()
      console.log('  ✓ 404.html (custom error page)')

      console.log('Prerender complete.')
      writeFileSync(join(dist, '.prerender-complete'), new Date().toISOString(), 'utf8')
    } finally {
      await browser.close()
    }
  } finally {
    stopPreview(preview)
  }
}

function stopPreview(proc) {
  if (!proc?.pid) return
  if (process.platform === 'win32') {
    spawn('taskkill', ['/pid', String(proc.pid), '/f', '/t'], { shell: true, stdio: 'ignore' })
  } else {
    proc.kill('SIGTERM')
  }
}

main().catch((error) => {
  console.error('Prerender failed:', error.message)
  process.exit(1)
})
