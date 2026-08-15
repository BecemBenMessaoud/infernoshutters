#!/usr/bin/env node
/**
 * Validates SEO configuration across the Inferno-Roll website.
 * Run: node scripts/validate-seo.mjs
 */

import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const srcDir = join(root, 'src')

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

// 3. Verify PAGE_SEO covers key routes
const seoTs = read(join(srcDir, 'data', 'seo.ts'))
const expectedRoutes = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/blog',
  '/service',
  '/products/overview',
  '/quote',
]
for (const route of expectedRoutes) {
  if (!seoTs.includes(`'${route}'`)) {
    errors.push(`Missing PAGE_SEO entry for ${route}`)
  }
}

// 4. Check all img tags have alt attributes
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

// 5. Verify index.html has essential meta tags
const indexHtml = read(join(root, 'index.html'))
const requiredMeta = ['description', 'canonical', 'og:title', 'twitter:card']
for (const meta of requiredMeta) {
  if (!indexHtml.includes(meta)) {
    errors.push(`index.html missing ${meta}`)
  }
}

// 6. Verify structured data file exports key schemas
const structuredData = read(join(srcDir, 'components', 'seo', 'structuredData.ts'))
const requiredSchemas = ['Organization', 'LocalBusiness', 'WebSite', 'WebPage', 'BreadcrumbList', 'FAQPage', 'Product']
for (const schema of requiredSchemas) {
  if (!structuredData.includes(schema)) {
    errors.push(`structuredData.ts missing ${schema} schema`)
  }
}

// 7. Verify favicon and manifest exist
for (const file of ['public/favicon.svg', 'public/site.webmanifest', 'public/robots.txt', 'public/sitemap.xml']) {
  try {
    read(join(root, file))
  } catch {
    errors.push(`Missing ${file}`)
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
