import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_NAME_SHORT,
  TWITTER_HANDLE,
  canonicalUrl,
  getPageSeo,
} from '../../data/seo'
import { buildStructuredData } from './structuredData'

export function SeoHead() {
  const { pathname } = useLocation()
  const seo = getPageSeo(pathname)
  const canonical = canonicalUrl(pathname)
  const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE
  const robots = seo.noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'
  const structuredData = buildStructuredData(pathname, seo)

  return (
    <Helmet key={pathname} prioritizeSeoTags>
      <html lang="en" />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords ? <meta name="keywords" content={seo.keywords} /> : null}
      <meta name="robots" content={robots} />
      <meta name="googlebot" content={robots} />
      <meta name="author" content={SITE_NAME_SHORT} />
      <meta name="publisher" content={SITE_NAME} />
      {seo.aiSummary ? <meta name="abstract" content={seo.aiSummary} /> : null}
      {seo.aiSummary ? <meta name="summary" content={seo.aiSummary} /> : null}
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content={seo.ogType ?? 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={seo.title} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={seo.title} />

      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
