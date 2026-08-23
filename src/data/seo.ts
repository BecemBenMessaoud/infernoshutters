import { PRODUCT_OVERVIEW_CARDS } from './products'
import { BLOG_ARTICLES, getBlogArticle } from './blog'

export const SITE_NAME = 'Inferno-Roll Shutters'
export const SITE_NAME_SHORT = 'Inferno-Roll'
export const SITE_TAGLINE = 'Home Defense Meets Wildfire Science'
export const SITE_URL =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') ?? 'https://www.infernoshutters.com'
export const TWITTER_HANDLE = '@Infernoshutters'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og/home.jpg`
export const OG_IMAGES = {
  home: `${SITE_URL}/images/og/home.jpg`,
  fireResistant: `${SITE_URL}/images/og/fire-resistant.jpg`,
  hurricaneStorm: `${SITE_URL}/images/og/hurricane-storm.jpg`,
  blogFeatured: `${SITE_URL}/images/og/blog-wildfire-windows.jpg`,
  services: `${SITE_URL}/images/og/services.jpg`,
} as const
export const LOGO_URL = `${SITE_URL}/images/Logo%20Inferno.png`

export const COMPANY = {
  legalName: 'Inferno-Roll Shutters',
  description:
    'Premium fire-resistant, hurricane-rated, and security roll shutter systems for residential and commercial properties across the United States.',
  phone: '+1-888-999-8809',
  email: 'info@infernoshutters.com',
  areaServed: 'United States',
  foundingDate: '2020',
} as const

export type PageSeoConfig = {
  title: string
  description: string
  keywords?: string
  ogType?: 'website' | 'article' | 'product'
  ogImage?: string
  noindex?: boolean
  aiSummary?: string
  breadcrumbs: Array<{ name: string; path: string }>
}

const BASE_KEYWORDS =
  'roll shutters, fire resistant shutters, wildfire protection, hurricane shutters, security shutters, Inferno-Roll, home hardening'

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  '/': {
    title: `${SITE_NAME_SHORT} | ${SITE_TAGLINE}`,
    description:
      'Inferno-Roll manufactures fire-resistant, hurricane-rated, and security roll shutters for wildfire zones and storm-prone homes. ASTM-tested protection for windows and doors.',
    keywords: `${BASE_KEYWORDS}, CAL FIRE home hardening, defensible space, ember protection`,
    ogImage: OG_IMAGES.home,
    aiSummary:
      'Inferno-Roll is a U.S. manufacturer of motorized roll shutters engineered for wildfire ember protection, hurricane resistance, and home security.',
    breadcrumbs: [{ name: 'Home', path: '/' }],
  },
  '/about': {
    title: `About Inferno-Roll | Certified Roll Shutter Experts`,
    description:
      'Learn about Inferno-Roll — U.S.-made roll shutter experts with CAL FIRE, UL, and Intertek accreditations. Serving residential and commercial properties nationwide.',
    keywords: `${BASE_KEYWORDS}, about Inferno, roll shutter company, CAL FIRE accredited`,
    aiSummary:
      'Company overview covering Inferno-Roll engineering standards, accreditations, warranty coverage, and nationwide service areas.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ],
  },
  '/becomeadealer': {
    title: `Become a Dealer | ${SITE_NAME_SHORT}`,
    description:
      'Partner with Inferno-Roll as an authorized dealer. Join our network of certified roll shutter installers serving wildfire and storm protection markets.',
    keywords: `${BASE_KEYWORDS}, dealer program, shutter installer partnership`,
    aiSummary:
      'Dealer application page for contractors and installers interested in selling and installing Inferno-Roll shutter systems.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Become a Dealer', path: '/becomeadealer' },
    ],
  },
  '/contact': {
    title: `Contact Us | ${SITE_NAME_SHORT}`,
    description:
      'Contact Inferno-Roll for roll shutter quotes, installation questions, and wildfire protection consultations. Call (888) 999-8809 or email info@infernoshutters.com.',
    keywords: `${BASE_KEYWORDS}, contact, quote request, customer support`,
    aiSummary:
      'Contact page with phone, email, and inquiry form for homeowners and businesses seeking roll shutter solutions.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
  },
  '/faq': {
    title: `FAQ | Roll Shutter Questions Answered | ${SITE_NAME_SHORT}`,
    description:
      'Answers to common questions about Inferno-Roll fire-resistant shutters — pricing, installation, warranties, maintenance, power outages, and wildfire protection.',
    keywords: `${BASE_KEYWORDS}, FAQ, shutter warranty, installation permit, wildfire shutters cost`,
    aiSummary:
      'Comprehensive FAQ covering testing, colors, self-installation, warranties, maintenance, sizing, and insurance considerations.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'FAQ', path: '/faq' },
    ],
  },
  '/blog': {
    title: `Blog | ${SITE_NAME_SHORT} Shutters`,
    description:
      'The Inferno-Roll blog: fire-tested roll shutters that protect your windows and doors from wildfire embers, storms, and break-ins. Home defense meets wildfire science.',
    keywords: `${BASE_KEYWORDS}, wildfire blog, home hardening tips, defensible space, ember protection`,
    aiSummary:
      'Blog index covering wildfire science, home hardening, insurance, and fire-tested roll shutter protection for windows and doors.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
    ],
  },
  '/resources': {
    title: `Resources | Wildfire & Shutter Guides | ${SITE_NAME_SHORT}`,
    description:
      'Downloadable guides and resources on wildfire home hardening, roll shutter selection, installation best practices, and building code compliance.',
    keywords: `${BASE_KEYWORDS}, wildfire resources, shutter guides, home hardening checklist`,
    aiSummary:
      'Resource library with guides on wildfire defense layers, shutter specifications, and regulatory compliance for homeowners.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' },
    ],
  },
  '/investor-info': {
    title: `Investor Information | ${SITE_NAME_SHORT}`,
    description:
      'Investor highlights and company information for Inferno-Roll — a growing U.S. roll shutter manufacturer focused on wildfire and storm protection markets.',
    keywords: `${BASE_KEYWORDS}, investor relations, company growth`,
    aiSummary:
      'Investor-facing overview of Inferno-Roll market position, product innovation, and growth in wildfire protection.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Investor Info', path: '/investor-info' },
    ],
  },
  '/service': {
    title: `Installation & Repair Services | ${SITE_NAME_SHORT}`,
    description:
      'Professional roll shutter installation, repair, and maintenance services by Inferno-Roll certified technicians. Commercial and residential coverage nationwide.',
    keywords: `${BASE_KEYWORDS}, shutter installation, repair service, maintenance plans`,
    ogImage: OG_IMAGES.services,
    aiSummary:
      'Services page covering certified installation, repair, maintenance programs, and commercial roll shutter solutions.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/service' },
    ],
  },
  '/products/overview': {
    title: `Roll Shutter Products | Fire, Storm & Security | ${SITE_NAME_SHORT}`,
    description:
      'Explore Inferno-Roll shutter systems: fire-resistant, hurricane/storm, standard security, and heavy-duty models. Compare slat types, features, and applications.',
    keywords: `${BASE_KEYWORDS}, product comparison, fire resistant shutter, hurricane shutter`,
    aiSummary:
      'Product catalog with four shutter categories, comparison table, and links to detailed specifications for each system.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products/overview' },
    ],
  },
  '/products/details': {
    title: `Product Specifications & Slat Models | ${SITE_NAME_SHORT}`,
    description:
      'Detailed slat model specifications for Inferno-Roll shutter systems — I4000 through I5600 series with material, construction, and application details.',
    keywords: `${BASE_KEYWORDS}, slat specifications, I4500, I5600, aluminum shutter models`,
    aiSummary:
      'Technical specifications page listing all Inferno-Roll slat models with construction details and performance characteristics.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products/overview' },
      { name: 'Specifications', path: '/products/details' },
    ],
  },
  '/privacy': {
    title: `Privacy Policy | ${SITE_NAME_SHORT}`,
    description:
      'Inferno-Roll privacy policy — how we collect, use, and protect your personal information when you visit our website or request a quote.',
    aiSummary:
      'Legal privacy policy describing data collection, cookies, and personal information handling for Inferno-Roll website visitors and quote requests.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  },
  '/terms-and-conditions': {
    title: 'Terms & Conditions | Inferno Shutters',
    description:
      'Review the Terms & Conditions governing the use of the Inferno Shutters website, product information, professional quotes, installation services, and customer inquiries.',
    aiSummary:
      'Terms and conditions for the Inferno Shutters website covering roller shutter products, professional quote requests, installation assessment requests, pricing, orders, warranty, and customer inquiries.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    ],
  },
  '/quote': {
    title: `Request a Quote | ${SITE_NAME_SHORT}`,
    description:
      'Request a free roll shutter quote from Inferno-Roll. Provide window and door measurements for a detailed estimate on fire-resistant and security shutter systems.',
    keywords: `${BASE_KEYWORDS}, free quote, shutter pricing, estimate`,
    aiSummary:
      'Quote request form for homeowners and businesses to receive customized roll shutter pricing.',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Request a Quote', path: '/quote' },
    ],
  },
  '/quote/received': {
    title: `Quote Request Received | ${SITE_NAME_SHORT}`,
    description: 'Your Inferno-Roll quote request has been received. Our team will contact you shortly.',
    noindex: true,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Quote Received', path: '/quote/received' },
    ],
  },
}

const PRODUCT_SEO_OVERRIDES: Record<
  string,
  Partial<Pick<PageSeoConfig, 'description' | 'keywords' | 'aiSummary' | 'ogImage'>>
> = {
  'standard-security': {
    description:
      'Standard security roll shutters by Inferno-Roll — aluminum slats with foam filling for everyday protection, noise reduction, and energy efficiency on residential and commercial openings.',
    keywords: `${BASE_KEYWORDS}, standard security shutter, aluminum roll shutter`,
    aiSummary:
      'Standard security shutter product page with I4000–I5600 slat models for general-purpose protection and insulation.',
  },
  'hurricane-storm': {
    description:
      'Hurricane and storm roll shutters engineered for high-wind, impact, and debris protection. Code-ready solutions for coastal and severe weather regions.',
    keywords: `${BASE_KEYWORDS}, hurricane shutter, storm shutter, impact rated`,
    ogImage: OG_IMAGES.hurricaneStorm,
    aiSummary:
      'Hurricane/storm-rated shutter product page with end-retention slats for severe weather protection.',
  },
  'heavy-duty': {
    description:
      'Heavy-duty security roll shutters with reinforced construction for maximum break-in deterrence. Ideal for storefronts, dispensaries, and high-risk commercial properties.',
    keywords: `${BASE_KEYWORDS}, heavy duty security shutter, anti-burglary shutters`,
    aiSummary:
      'Heavy-duty security shutter product page with reinforced slats and tracks for maximum intrusion protection.',
  },
  'fire-resistant': {
    description:
      'Fire-resistant roll shutters with ASTM-tested radiant heat and flame protection. Engineered for wildfire-prone homes with ember-resistant coating technology.',
    keywords: `${BASE_KEYWORDS}, fire resistant shutter, wildfire shutter, ASTM tested, ember protection`,
    ogImage: OG_IMAGES.fireResistant,
    aiSummary:
      'Fire-resistant shutter product page with fire-rated slats and proprietary heat-activated protective coating for wildfire defense.',
  },
}

export function getPageSeo(pathname: string): PageSeoConfig {
  if (PAGE_SEO[pathname]) {
    return PAGE_SEO[pathname]
  }

  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const slug = productMatch[1]
    const product = PRODUCT_OVERVIEW_CARDS.find((item) => item.id === slug)
    if (product) {
      const overrides = PRODUCT_SEO_OVERRIDES[slug] ?? {}
      return {
        title: `${product.title} | ${SITE_NAME_SHORT}`,
        description: overrides.description ?? product.description,
        keywords: overrides.keywords ?? BASE_KEYWORDS,
        ogType: 'product',
        ogImage: overrides.ogImage ?? `${SITE_URL}${product.image}`,
        aiSummary: overrides.aiSummary ?? product.description,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products/overview' },
          { name: product.title, path: `/products/${slug}` },
        ],
      }
    }
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/)
  if (blogMatch) {
    const article = getBlogArticle(blogMatch[1])
    if (article) {
      const featuredOg =
        article.slug === 'why-windows-and-doors-fail-first-in-a-wildfire'
          ? OG_IMAGES.blogFeatured
          : undefined
      return {
        title: `${article.title} | ${SITE_NAME_SHORT} Blog`,
        description: article.seoDescription,
        keywords: `${BASE_KEYWORDS}, wildfire blog, ${article.category.toLowerCase()}`,
        ogType: 'article',
        ogImage: featuredOg,
        aiSummary: article.aiSummary,
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: article.title, path: `/blog/${article.slug}` },
        ],
      }
    }
  }

  return {
    title: `Page Not Found | ${SITE_NAME_SHORT}`,
    description: `The page you requested could not be found. Browse ${SITE_NAME_SHORT} roll shutter products, services, and wildfire protection resources.`,
    noindex: true,
    breadcrumbs: [{ name: 'Home', path: '/' }],
  }
}

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const SITEMAP_PATHS = [
  '/',
  '/about',
  '/becomeadealer',
  '/contact',
  '/faq',
  '/blog',
  ...BLOG_ARTICLES.map((article) => `/blog/${article.slug}`),
  '/resources',
  '/investor-info',
  '/service',
  '/products/overview',
  '/products/details',
  ...PRODUCT_OVERVIEW_CARDS.map((p) => p.detailHref),
  '/privacy',
  '/terms-and-conditions',
  '/quote',
] as const

export const BLOG_ARTICLE_TITLE = BLOG_ARTICLES[0]?.title ?? 'Inferno-Roll Blog'
