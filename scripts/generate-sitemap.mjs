#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from route definitions.
 * Run: node scripts/generate-sitemap.mjs
 */

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { SITE_URL, SITEMAP_ENTRIES } from './seo-routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const lastmod = new Date().toISOString().split('T')[0]

const urls = SITEMAP_ENTRIES.map(
  ({ loc, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), sitemap, 'utf8')
console.log(`Sitemap generated with ${SITEMAP_ENTRIES.length} URLs → public/sitemap.xml`)
