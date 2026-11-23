import { getPageSeo } from '../data/seo'

/** Public GA4 measurement ID. It is not a secret and is safe in the client bundle. */
export const GA_MEASUREMENT_ID = 'G-F4G820BMXK'

type AnalyticsValue = string | number | boolean

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

let started = false
let lastPagePath = ''

function canTrack(): boolean {
  return typeof window !== 'undefined' && !navigator.webdriver
}

function installGtag() {
  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)
}

/** Loads the official GA4 tag once. Automatic page views stay off so the SPA can send them. */
export function initGoogleAnalytics() {
  if (started || !canTrack()) {
    return
  }
  started = true
  installGtag()
}

function sendEvent(name: string, params: Record<string, AnalyticsValue> = {}) {
  if (!window.gtag) {
    return
  }
  window.gtag('event', name, {
    ...params,
    send_to: GA_MEASUREMENT_ID,
  })
}

export function trackPageView(pathname: string, search = '') {
  if (!canTrack()) {
    return
  }
  initGoogleAnalytics()
  const pagePath = `${pathname}${search}`
  if (lastPagePath === pagePath) {
    return
  }
  lastPagePath = pagePath
  sendEvent('page_view', {
    page_title: getPageSeo(pathname).title,
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath}`,
  })
}

/** Fires only after the quote API accepts the submission. */
export function trackQuoteSubmission() {
  if (!canTrack()) {
    return
  }
  initGoogleAnalytics()
  sendEvent('quote_submit', { form_name: 'quote' })
}

function linkText(element: Element): string {
  const label = element.getAttribute('aria-label')
  return (label || element.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100)
}

function sameOriginPath(href: string): string | null {
  try {
    const url = new URL(href, window.location.origin)
    if (url.origin !== window.location.origin) {
      return null
    }
    return url.pathname
  } catch {
    return null
  }
}

const CTA_PATHS = new Set(['/quote', '/contact', '/becomeadealer'])

function trackClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }

  const anchor = target.closest('a')
  if (anchor) {
    const href = anchor.getAttribute('href') ?? ''
    const text = linkText(anchor)
    if (href.startsWith('tel:')) {
      sendEvent('phone_click', { link_url: href.slice(0, 100), link_text: text })
      return
    }
    if (href.startsWith('mailto:')) {
      sendEvent('email_click', { link_url: href.slice(0, 100), link_text: text })
      return
    }
    const path = sameOriginPath(href)
    if (path && CTA_PATHS.has(path)) {
      sendEvent('cta_click', { link_url: path, link_text: text })
    }
    return
  }

  const button = target.closest('button')
  if (!button || button.type === 'submit') {
    return
  }
  const text = linkText(button)
  if (/call us now|request a (free )?(quote|estimate)/i.test(text)) {
    sendEvent('cta_click', { link_url: 'button', link_text: text })
  }
}

export function bindAnalyticsClicks() {
  if (!canTrack()) {
    return () => undefined
  }
  document.addEventListener('click', trackClick, true)
  return () => document.removeEventListener('click', trackClick, true)
}
