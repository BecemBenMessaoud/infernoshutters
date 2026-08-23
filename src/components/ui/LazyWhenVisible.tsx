import { Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react'

type LazyWhenVisibleProps = {
  children: ReactNode
  /** Reserved height before content mounts to limit layout shift. */
  minHeight?: string
  /** Start loading slightly before the section enters the viewport. */
  rootMargin?: string
}

/**
 * Mounts children only when near the viewport so lazy chunks and media load after first paint.
 */
export function LazyWhenVisible({
  children,
  minHeight = '18rem',
  rootMargin = '240px 0px',
}: LazyWhenVisibleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || isVisible) {
      return
    }

    // Render everything during Puppeteer prerender / automated audits.
    if (navigator.webdriver) {
      setIsVisible(true)
      return
    }

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return (
    <div ref={containerRef} style={isVisible ? undefined : { minHeight }}>
      {isVisible ? children : null}
    </div>
  )
}

type LazySectionProps = {
  loader: () => Promise<{ default: React.ComponentType }>
  minHeight?: string
  rootMargin?: string
}

export function LazySection({ loader, minHeight, rootMargin }: LazySectionProps) {
  const LazyComponent = lazy(loader)

  return (
    <LazyWhenVisible minHeight={minHeight} rootMargin={rootMargin}>
      <Suspense fallback={<div aria-hidden style={{ minHeight: minHeight ?? '18rem' }} />}>
        <LazyComponent />
      </Suspense>
    </LazyWhenVisible>
  )
}
