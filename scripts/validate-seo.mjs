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

// 6. Verify index.html has essential meta tags
const indexHtml = read(join(root, 'index.html'))
const requiredMeta = ['description', 'canonical', 'og:title', 'twitter:card']
for (const meta of requiredMeta) {
  if (!indexHtml.includes(meta)) {
    errors.push(`index.html missing ${meta}`)
  }
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
    if (!html.includes('rel="canonical"')) {
      errors.push(`Prerendered ${route} missing canonical link`)
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
