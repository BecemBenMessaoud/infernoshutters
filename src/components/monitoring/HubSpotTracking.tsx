import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    _hsq?: unknown[]
  }
}

/**
 * Tracks client-side route changes for HubSpot on this React SPA.
 */
export function HubSpotTracking() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    const path = `${pathname}${search}`
    const queue = (window._hsq = window._hsq ?? [])
    queue.push(['setPath', path])
    queue.push(['trackPageView'])
  }, [pathname, search])

  return null
}
