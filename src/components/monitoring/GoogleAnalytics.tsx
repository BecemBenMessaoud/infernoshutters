import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { bindAnalyticsClicks, trackPageView } from '../../lib/analytics'

/**
 * GA4 for this React Router app.
 * The tag does not send its own page_view. This component sends one per route.
 */
export function GoogleAnalytics() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    trackPageView(pathname, search)
  }, [pathname, search])

  useEffect(() => bindAnalyticsClicks(), [])

  return null
}
