import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PRODUCT_OVERVIEW_CARDS } from '../../data/products'

const SITE_NAME = 'Inferno-Roll'

const PAGE_TITLES: Record<string, string> = {
  '/': `${SITE_NAME} | Home Defense Meets Wildfire Science`,
  '/about': `About | ${SITE_NAME}`,
  '/becomeadealer': `Become a Dealer | ${SITE_NAME}`,
  '/contact': `Contact | ${SITE_NAME}`,
  '/faq': `FAQ | ${SITE_NAME}`,
  '/resources': `Resources (Blog / Guides) | ${SITE_NAME}`,
  '/service': `Services | ${SITE_NAME}`,
  '/products/overview': `Products Overview | ${SITE_NAME}`,
  '/products/details': `Product Details | ${SITE_NAME}`,
  '/quote': `Request a Quote | ${SITE_NAME}`,
  '/quote/received': `Quote Received | ${SITE_NAME}`,
}

function getPageTitle(pathname: string): string {
  if (PAGE_TITLES[pathname]) {
    return PAGE_TITLES[pathname]
  }

  const productMatch = pathname.match(/^\/products\/([^/]+)$/)
  if (productMatch) {
    const product = PRODUCT_OVERVIEW_CARDS.find((item) => item.id === productMatch[1])
    if (product) {
      return `${product.title} | ${SITE_NAME}`
    }
  }

  return SITE_NAME
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = getPageTitle(pathname)
  }, [pathname])

  return null
}
