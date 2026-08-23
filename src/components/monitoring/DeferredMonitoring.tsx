import { Suspense, lazy, useEffect, useState } from 'react'

const Analytics = lazy(() =>
  import('@vercel/analytics/react').then((module) => ({ default: module.Analytics })),
)
const SpeedInsights = lazy(() =>
  import('@vercel/speed-insights/react').then((module) => ({ default: module.SpeedInsights })),
)

/**
 * Loads Vercel monitoring after the main thread is idle so it does not block first paint.
 */
export function DeferredMonitoring() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const enable = () => setEnabled(true)

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(enable, { timeout: 3000 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(enable, 1500)
    return () => globalThis.clearTimeout(timeoutId)
  }, [])

  if (!enabled) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <Analytics />
      <SpeedInsights />
    </Suspense>
  )
}
