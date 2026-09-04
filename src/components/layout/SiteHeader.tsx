import { useEffect, useRef, useState } from 'react'
import { Header } from './Header'
import { TopBar } from './TopBar'

/** Minimum scroll movement before reacting (avoids micro-jitter). */
const SCROLL_DELTA = 12
/** Always keep the top bar visible within this distance from the page top. */
const TOP_LOCK_ZONE = 96
/** Only hide the top bar after the user has scrolled past this point. */
const HIDE_AFTER = 120
/** Ignore hide/show toggles briefly after a change (matches CSS transition). */
const TOGGLE_COOLDOWN_MS = 320

export function SiteHeader() {
  const [topBarVisible, setTopBarVisible] = useState(true)
  const lastScrollY = useRef(0)
  const topBarVisibleRef = useRef(true)
  const lastToggleAt = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const setVisibility = (visible: boolean) => {
      if (topBarVisibleRef.current === visible) {
        return
      }

      topBarVisibleRef.current = visible
      lastToggleAt.current = performance.now()
      setTopBarVisible(visible)
    }

    const updateTopBarVisibility = () => {
      const currentScrollY = window.scrollY
      const previousScrollY = lastScrollY.current
      const scrollDelta = currentScrollY - previousScrollY
      const inCooldown = performance.now() - lastToggleAt.current < TOGGLE_COOLDOWN_MS

      if (currentScrollY <= TOP_LOCK_ZONE) {
        setVisibility(true)
      } else if (!inCooldown) {
        if (scrollDelta > SCROLL_DELTA && currentScrollY > HIDE_AFTER) {
          setVisibility(false)
        } else if (scrollDelta < -SCROLL_DELTA) {
          setVisibility(true)
        }
      }

      lastScrollY.current = currentScrollY
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) {
        return
      }

      ticking.current = true
      window.requestAnimationFrame(updateTopBarVisibility)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50 w-full max-w-[100vw] overflow-x-clip">
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out motion-reduce:transition-none ${
          topBarVisible ? 'max-h-12 sm:max-h-14' : 'max-h-0'
        }`}
        aria-hidden={!topBarVisible}
      >
        <TopBar />
      </div>
      <Header />
    </div>
  )
}
