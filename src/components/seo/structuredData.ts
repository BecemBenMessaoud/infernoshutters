import { CONTACT_FAQ_ITEMS, EMAIL, PHONE, SOCIAL_LINKS, BUSINESS_ADDRESS, LEGAL_ENTITY_NAME } from '../../data/site'
import { PRODUCT_DETAIL_CONTENT } from '../../data/product-details'
import { PRODUCT_OVERVIEW_CARDS, PRODUCT_IMAGES, type ProductDetailSlug } from '../../data/products'
import {
  BLOG_ARTICLE_TITLE,
  COMPANY,
  DEFAULT_OG_IMAGE,
  LOGO_URL,
  SITE_NAME,
  SITE_NAME_SHORT,
  SITE_URL,
  absoluteUrl,
  type PageSeoConfig,
} from '../../data/seo'

type JsonLd = Record<string, unknown>

function breadcrumbList(breadcrumbs: PageSeoConfig['breadcrumbs']): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

function webPage(pathname: string, seo: PageSeoConfig): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(pathname)}#webpage`,
    url: absoluteUrl(pathname),
    name: seo.title,
    description: seo.description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  }
}

export function organizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_ENTITY_NAME,
    alternateName: SITE_NAME_SHORT,
    url: SITE_URL,
    logo: LOGO_URL,
    description: COMPANY.description,
    email: EMAIL,
    telephone: PHONE,
    foundingDate: COMPANY.foundingDate,
    areaServed: COMPANY.areaServed,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    sameAs: SOCIAL_LINKS.map((link) => link.href),
  }
}

export function localBusinessSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: LOGO_URL,
    url: SITE_URL,
    telephone: PHONE,
    email: EMAIL,
    description: COMPANY.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_ADDRESS.streetAddress,
      addressLocality: BUSINESS_ADDRESS.addressLocality,
      addressRegion: BUSINESS_ADDRESS.addressRegion,
      postalCode: BUSINESS_ADDRESS.postalCode,
      addressCountry: BUSINESS_ADDRESS.addressCountry,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    priceRange: '$$$',
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  }
}

export function websiteSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: COMPANY.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  }
}

export function faqPageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: CONTACT_FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function servicePageSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/service#service`,
    name: 'Roll Shutter Installation, Repair & Maintenance',
    description:
      'Professional roll shutter installation, repair, and maintenance services by Inferno-Roll certified technicians for residential and commercial properties.',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    url: absoluteUrl('/service'),
  }
}

export function productSchema(slug: ProductDetailSlug): JsonLd | null {
  const product = PRODUCT_OVERVIEW_CARDS.find((item) => item.id === slug)
  const content = PRODUCT_DETAIL_CONTENT[slug]
  if (!product || !content) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${absoluteUrl(`/products/${slug}`)}#product`,
    name: product.title,
    description: content.description,
    image: absoluteUrl(PRODUCT_IMAGES[slug]),
    brand: {
      '@type': 'Brand',
      name: SITE_NAME_SHORT,
    },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    url: absoluteUrl(`/products/${slug}`),
    category: 'Roll Shutters',
    offers: {
      '@type': 'Offer',
      url: absoluteUrl('/quote'),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${SITE_URL}/#organization` },
    },
  }
}

export function articleSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: BLOG_ARTICLE_TITLE,
    description:
      'Why defensible space alone is not enough — and how roll shutters protect the weakest points of every home in wildfire zones.',
    author: { '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl('/blog'),
    url: absoluteUrl('/blog'),
    image: DEFAULT_OG_IMAGE,
    inLanguage: 'en-US',
  }
}

export function buildStructuredData(pathname: string, seo: PageSeoConfig): JsonLd[] {
  const schemas: JsonLd[] = [
    organizationSchema(),
    localBusinessSchema(),
    websiteSchema(),
    webPage(pathname, seo),
    breadcrumbList(seo.breadcrumbs),
  ]

  if (pathname === '/faq') {
    schemas.push(faqPageSchema())
  }

  if (pathname === '/service') {
    schemas.push(servicePageSchema())
  }

  if (pathname === '/blog') {
    schemas.push(articleSchema())
  }

  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  if (productMatch && productMatch[1] in PRODUCT_DETAIL_CONTENT) {
    const productLd = productSchema(productMatch[1] as ProductDetailSlug)
    if (productLd) schemas.push(productLd)
  }

  return schemas
}
