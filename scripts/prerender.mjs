#!/usr/bin/env node
/**
 * Post-build prerender: saves fully rendered HTML (head + body) for each public route.
 * Run after `vite build`. Skip with PRERENDER_SKIP=1.
 *
 * Uses @sparticuz/chromium on Vercel/Linux (no system lib dependencies).
 * Falls back to bundled Puppeteer on Windows/macOS for local builds.
 */

import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_ROUTES } from './seo-routes.mjs'

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
const PORT = Number(process.env.PRERENDER_PORT ?? 4173)
const BASE = `http://127.0.0.1:${PORT}`

if (process.env.PRERENDER_SKIP === '1') {
  console.log('Prerender skipped (PRERENDER_SKIP=1)')
  process.exit(0)
}

function routeToOutFile(route) {
  if (route === '/') return join(dist, 'index.html')
  return join(dist, ...route.replace(/^\//, '').split('/'), 'index.html')
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort', '--host', '127.0.0.1'], {
      cwd: root,
      shell: true,
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, NODE_ENV: 'production' },
    })

    proc.on('error', reject)
    resolve(proc)
  })
}

async function waitForPreviewServer() {
  const deadline = Date.now() + 60_000
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${BASE}/`, { redirect: 'follow' })
      if (response.ok) return
    } catch {
      // Server still starting
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }
  throw new Error(`Preview server not reachable at ${BASE}`)
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

async function prerenderRoute(page, route) {
  const url = `${BASE}${route}`
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 })
  await page.waitForSelector('main', { timeout: 15_000 })
  await new Promise((resolve) => setTimeout(resolve, 500))

  const html = await page.content()
  const outFile = routeToOutFile(route)
  mkdirSync(dirname(outFile), { recursive: true })
  writeFileSync(outFile, html, 'utf8')
  console.log(`  ✓ ${route}`)
}

async function main() {
  console.log(`Prerendering ${PRERENDER_ROUTES.length} routes…`)
  const preview = await startPreview()
  await waitForPreviewServer()
  const browser = await launchBrowser()

  try {
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

    for (const route of PRERENDER_ROUTES) {
      await prerenderRoute(page, route)
    }

    console.log('Prerender complete.')
    writeFileSync(join(dist, '.prerender-complete'), new Date().toISOString(), 'utf8')
  } finally {
    await browser.close()
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
