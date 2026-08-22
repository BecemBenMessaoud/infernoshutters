#!/usr/bin/env node
/**
 * Generates public/sitemap.xml from route definitions.
 * Run: node scripts/generate-sitemap.mjs
 */

const SITE_URL = (process.env.VITE_SITE_URL ?? 'https://www.infernoshutters.com').replace(/\/$/, '')

const PATHS = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/becomeadealer', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/faq', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.7' },
  { loc: '/blog/why-windows-and-doors-fail-first-in-a-wildfire', changefreq: 'monthly', priority: '0.7' },
  { loc: '/blog/wildfire-insurance-home-hardening', changefreq: 'monthly', priority: '0.7' },
  { loc: '/blog/why-every-home-in-a-wildfire-zone-needs-more-than-defensible-space', changefreq: 'monthly', priority: '0.7' },
  { loc: '/resources', changefreq: 'monthly', priority: '0.7' },
  { loc: '/investor-info', changefreq: 'monthly', priority: '0.6' },
  { loc: '/service', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/overview', changefreq: 'weekly', priority: '0.9' },
  { loc: '/products/details', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/standard-security', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/hurricane-storm', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/heavy-duty', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/fire-resistant', changefreq: 'monthly', priority: '0.9' },
  { loc: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms-and-conditions', changefreq: 'yearly', priority: '0.3' },
  { loc: '/quote', changefreq: 'monthly', priority: '0.8' },
]

const lastmod = new Date().toISOString().split('T')[0]

const urls = PATHS.map(
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

import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
writeFileSync(join(__dirname, '..', 'public', 'sitemap.xml'), sitemap, 'utf8')
console.log(`Sitemap generated with ${PATHS.length} URLs → public/sitemap.xml`)
