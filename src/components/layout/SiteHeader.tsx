import { useEffect, useRef, useState } from 'react'
import { Header } from './Header'
import { TopBar } from './TopBar'

const SCROLL_DELTA = 8
const TOP_THRESHOLD = 12
const HIDE_AFTER = 48

export function SiteHeader() {
  const [topBarVisible, setTopBarVisible] = useState(true)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateTopBarVisibility = () => {
      const currentScrollY = window.scrollY
      const previousScrollY = lastScrollY.current
      const scrollDelta = currentScrollY - previousScrollY

      if (currentScrollY <= TOP_THRESHOLD) {
        setTopBarVisible(true)
      } else if (scrollDelta > SCROLL_DELTA && currentScrollY > HIDE_AFTER) {
        setTopBarVisible(false)
      } else if (scrollDelta < -SCROLL_DELTA) {
        setTopBarVisible(true)
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
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none ${
          topBarVisible ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
        aria-hidden={!topBarVisible}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`transition-transform duration-300 ease-in-out motion-reduce:transition-none ${
              topBarVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
          >
            <TopBar />
          </div>
        </div>
      </div>
      <Header />
    </div>
  )
}