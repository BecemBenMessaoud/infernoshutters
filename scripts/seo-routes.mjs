/**
 * Single source of truth for sitemap URLs and prerender routes.
 * Keep in sync with src/App.tsx routes and src/data/seo.ts PAGE_SEO keys.
 */

export const SITE_URL = (process.env.VITE_SITE_URL ?? 'https://www.infernoshutters.com').replace(
  /\/$/,
  '',
)

/** Routes included in sitemap.xml and eligible for static prerender HTML. */
export const SITEMAP_ENTRIES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about', changefreq: 'monthly', priority: '0.8' },
  { loc: '/becomeadealer', changefreq: 'monthly', priority: '0.7' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.8' },
  { loc: '/faq', changefreq: 'monthly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.7' },
  {
    loc: '/blog/why-windows-and-doors-fail-first-in-a-wildfire',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    loc: '/blog/wildfire-insurance-home-hardening',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    loc: '/blog/why-every-home-in-a-wildfire-zone-needs-more-than-defensible-space',
    changefreq: 'monthly',
    priority: '0.7',
  },
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

export const PRERENDER_ROUTES = SITEMAP_ENTRIES.map((entry) => entry.loc)

/** App routes prerendered for SPA fallback but excluded from sitemap (e.g. noindex). */
export const PRERENDER_ONLY_ROUTES = ['/quote/received']

/** Path visited during prerender to capture the custom 404 page HTML. */
export const NOT_FOUND_PRERENDER_PATH = '/__404__'
