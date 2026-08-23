#!/usr/bin/env node
/**
 * Validates SEO configuration across the Inferno-Roll website.
 * Run: node scripts/validate-seo.mjs
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PRERENDER_ROUTES, SITE_URL } from './seo-routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcDir = join(root, 'src')
const distDir = join(root, 'dist')

const errors = []
const warnings = []

function read(path) {
  return readFileSync(path, 'utf8')
}

function walk(dir, ext = '.tsx') {
  const files = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walk(full, ext))
    } else if (entry.name.endsWith(ext)) {
      files.push(full)
    }
  }
  return files
}

function routeToDistFile(route) {
  if (route === '/') return join(distDir, 'index.html')
  return join(distDir, ...route.replace(/^\//, '').split('/'), 'index.html')
}

// 1. Verify sitemap.xml exists and has URLs
const sitemap = read(join(root, 'public', 'sitemap.xml'))
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
if (sitemapUrls.length < 10) {
  errors.push(`Sitemap has only ${sitemapUrls.length} URLs`)
}

// 2. Verify robots.txt references sitemap
const robots = read(join(root, 'public', 'robots.txt'))
if (!robots.includes('Sitemap:')) {
  errors.push('robots.txt missing Sitemap directive')
}
if (!robots.includes('Disallow: /quote/received')) {
  warnings.push('robots.txt should disallow /quote/received')
}

// 3. Verify llms.txt for AI visibility
for (const file of ['public/llms.txt', 'public/llms-full.txt']) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing ${file}`)
    continue
  }
  const content = read(join(root, file))
  if (!content.includes(SITE_URL)) {
    errors.push(`${file} must reference ${SITE_URL}`)
  }
}

const llms = read(join(root, 'public', 'llms.txt'))
for (const section of ['Primary pages', 'Product detail pages', 'Contact']) {
  if (!llms.includes(section)) {
    warnings.push(`llms.txt missing "${section}" section`)
  }
}

// 4. Verify PAGE_SEO covers key routes
const seoTs = read(join(srcDir, 'data', 'seo.ts'))
const expectedRoutes = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/service',
  '/products/overview',
  '/products/details',
  '/terms-and-conditions',
  '/quote',
]
for (const route of expectedRoutes) {
  if (!seoTs.includes(`'${route}'`)) {
    errors.push(`Missing PAGE_SEO entry for ${route}`)
  }
}

// 5. Check all img tags have alt attributes
const tsxFiles = walk(srcDir)
for (const file of tsxFiles) {
  const content = read(file)
  const imgTags = content.match(/<img[^>]*>/g) ?? []
  for (const tag of imgTags) {
    if (!/\balt=/.test(tag)) {
      errors.push(`Missing alt on <img> in ${file.replace(root, '')}`)
    }
  }
}

// 6. Verify index.html — no hard-coded canonical (SeoHead owns per-route canonicals)
const indexHtml = read(join(root, 'index.html'))
if (/<link[^>]+rel=["']canonical["']/i.test(indexHtml)) {
  errors.push('index.html must not contain a hard-coded canonical link (use SeoHead instead)')
}
if (/property=["']og:url["']/i.test(indexHtml)) {
  errors.push('index.html must not contain a hard-coded og:url (use SeoHead instead)')
}
const requiredMeta = ['description']
for (const meta of requiredMeta) {
  if (!indexHtml.includes(meta)) {
    errors.push(`index.html missing ${meta}`)
  }
}

// 6b. Sitemap and robots.txt must use the same SITE_URL domain
for (const url of sitemapUrls) {
  if (!url.startsWith(SITE_URL)) {
    errors.push(`Sitemap URL uses wrong domain: ${url} (expected ${SITE_URL})`)
  }
}
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) {
  errors.push(`robots.txt Sitemap must be ${SITE_URL}/sitemap.xml`)
}

// 6c. vercel.json must redirect apex (non-www) to preferred SITE_URL host
const vercelJson = read(join(root, 'vercel.json'))
const preferredHost = new URL(SITE_URL).host
const apexHost = preferredHost.startsWith('www.') ? preferredHost.slice(4) : preferredHost
if (!vercelJson.includes(`"value": "${apexHost}"`)) {
  errors.push(`vercel.json must redirect ${apexHost} → ${preferredHost}`)
}
if (!vercelJson.includes(`https://${preferredHost}/`)) {
  errors.push(`vercel.json redirect destination must use ${SITE_URL}`)
}

// 7. Verify structured data file exports key schemas
const structuredData = read(join(srcDir, 'components', 'seo', 'structuredData.ts'))
const requiredSchemas = [
  'Organization',
  'LocalBusiness',
  'WebSite',
  'WebPage',
  'BreadcrumbList',
  'FAQPage',
  'Product',
  'ItemList',
]
for (const schema of requiredSchemas) {
  if (!structuredData.includes(schema)) {
    errors.push(`structuredData.ts missing ${schema} schema`)
  }
}
if (structuredData.includes('SearchAction')) {
  errors.push('structuredData.ts should not include SearchAction (no site search implemented)')
}
if (!structuredData.includes('slatSeriesListSchema')) {
  errors.push('structuredData.ts missing slatSeriesListSchema for /products/details')
}

// 8. Verify OG images exist
for (const file of [
  'public/images/og/home.jpg',
  'public/images/og/fire-resistant.jpg',
  'public/images/og/hurricane-storm.jpg',
  'public/images/og/blog-wildfire-windows.jpg',
  'public/images/og/services.jpg',
]) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing ${file}`)
  }
}

// 9. Verify favicon and manifest exist
for (const file of [
  'public/favicon.svg',
  'public/site.webmanifest',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/llms.txt',
]) {
  if (!existsSync(join(root, file))) {
    errors.push(`Missing ${file}`)
  }
}

// 10. Prerender output checks (when prerender completed)
const prerenderComplete = existsSync(join(distDir, '.prerender-complete'))
if (existsSync(distDir) && prerenderComplete) {
  const sampleRoutes = ['/', '/faq', '/products/fire-resistant', '/blog', '/terms-and-conditions']
  const titles = new Set()

  for (const route of sampleRoutes) {
    const file = routeToDistFile(route)
    if (!existsSync(file)) {
      errors.push(`Missing prerendered HTML for ${route} (${file.replace(root, '')})`)
      continue
    }

    const html = read(file)
    if (!html.includes('<main')) {
      errors.push(`Prerendered ${route} missing <main> content`)
    }
    if (!html.includes('application/ld+json')) {
      warnings.push(`Prerendered ${route} missing JSON-LD scripts`)
    }

    const expectedCanonical = route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`
    const canonicalMatches = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]*>/gi)]
    if (canonicalMatches.length === 0) {
      errors.push(`Prerendered ${route} missing canonical link`)
    } else if (canonicalMatches.length > 1) {
      errors.push(`Prerendered ${route} has ${canonicalMatches.length} canonical links (expected 1)`)
    } else {
      const hrefMatch = canonicalMatches[0][0].match(/href=["']([^"']+)["']/i)
      const href = hrefMatch?.[1]
      if (href !== expectedCanonical) {
        errors.push(
          `Prerendered ${route} canonical is "${href}" (expected "${expectedCanonical}")`,
        )
      }
    }

    const ogUrlMatches = [...html.matchAll(/property=["']og:url["'][^>]*content=["']([^"']+)["']/gi)]
    if (ogUrlMatches.length > 1) {
      errors.push(`Prerendered ${route} has ${ogUrlMatches.length} og:url tags (expected 1)`)
    } else if (ogUrlMatches.length === 1 && ogUrlMatches[0][1] !== expectedCanonical) {
      errors.push(
        `Prerendered ${route} og:url is "${ogUrlMatches[0][1]}" (expected "${expectedCanonical}")`,
      )
    }

    const titleMatch = html.match(/<title>([^<]+)<\/title>/)
    if (!titleMatch) {
      errors.push(`Prerendered ${route} missing <title>`)
    } else {
      titles.add(titleMatch[1])
    }
  }

  if (titles.size < sampleRoutes.length) {
    errors.push('Prerendered pages share identical titles — route-specific SEO may be broken')
  }

  const prerenderedCount = PRERENDER_ROUTES.filter((route) =>
    existsSync(routeToDistFile(route)),
  ).length
  if (prerenderedCount < PRERENDER_ROUTES.length) {
    warnings.push(
      `Only ${prerenderedCount}/${PRERENDER_ROUTES.length} prerender routes have static HTML`,
    )
  }

  const notFoundHtml = join(distDir, '404.html')
  if (!existsSync(notFoundHtml)) {
    errors.push('Missing dist/404.html — run prerender to generate the custom error page')
  } else {
    const html = read(notFoundHtml)
    if (!html.includes('404 — Page Not Found')) {
      errors.push('dist/404.html missing expected "404 — Page Not Found" heading')
    }
    if (!html.includes('noindex')) {
      errors.push('dist/404.html must include noindex robots directive')
    }
    if (!html.includes('<title>Page Not Found | Inferno Shutters</title>')) {
      warnings.push('dist/404.html may be missing the expected page title')
    }
  }
}

// Report
console.log('SEO Validation Report')
console.log('='.repeat(40))
console.log(`Sitemap URLs: ${sitemapUrls.length}`)
console.log(`Files scanned: ${tsxFiles.length}`)

if (warnings.length) {
  console.log('\nWarnings:')
  warnings.forEach((w) => console.log(`  ⚠ ${w}`))
}

if (errors.length) {
  console.log('\nErrors:')
  errors.forEach((e) => console.log(`  ✗ ${e}`))
  process.exit(1)
}

console.log('\n✓ All SEO checks passed')
