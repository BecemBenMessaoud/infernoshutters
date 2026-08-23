# SEO & AI Visibility Checklist

Run `npm run validate-seo` after every build. The build pipeline runs this automatically.

## Phase 1 — Technical (implemented)

- [x] Static prerender HTML for all public routes (`scripts/prerender.mjs`)
- [x] Centralized sitemap/prerender routes (`scripts/seo-routes.mjs`)
- [x] `llms.txt` and `llms-full.txt` for AI crawlers
- [x] JSON-LD: Organization, LocalBusiness, WebSite, WebPage, FAQ, Product, ItemList
- [x] Slat series ItemList schema on `/products/details`
- [x] Removed invalid SearchAction schema (no site search)
- [x] robots.txt allows major AI bots
- [x] Terms & Conditions and Privacy indexed

## Phase 2 — Search Console (manual)

- [ ] Verify domain in [Google Search Console](https://search.google.com/search-console)
- [ ] Submit `https://www.infernoshutters.com/sitemap.xml`
- [ ] Verify in [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Monitor indexing, Core Web Vitals, and crawl errors monthly

## Phase 3 — Content (ongoing)

- [ ] Publish 1–2 blog articles per month (wildfire, storm, security topics)
- [ ] Expand FAQ with long-tail questions
- [ ] Add internal links from blog → products → quote
- [x] Unique OG images (1200×630) for Home, Fire-resistant, Hurricane, Blog featured, Services
- [ ] Create unique OG images for remaining top product and blog pages

## Phase 4 — Authority (ongoing)

- [ ] Add certifications / fire-test documentation page
- [ ] Case studies with location + product used
- [ ] Google Business Profile (if applicable)
- [ ] Industry backlinks and dealer citations

## Commands

```bash
npm run sitemap        # Regenerate sitemap.xml
npm run validate-seo   # Run SEO checks
npm run build          # Full build + prerender + validate
PRERENDER_SKIP=1 npm run build   # Skip prerender (local fallback)
```

## Adding a new public page

1. Add route in `src/App.tsx`
2. Add `PAGE_SEO` entry in `src/data/seo.ts`
3. Add entry to `scripts/seo-routes.mjs`
4. Add links in `public/llms.txt` if important for AI citation
5. Run `npm run build`
