import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Phone } from 'lucide-react'
import { HERO_SLIDES } from '../../data/heroImages'
import { PHONE } from '../../data/site'

const QuoteRequestModal = lazy(() =>
  import('../quote/QuoteRequestModal').then((module) => ({
    default: module.QuoteRequestModal,
  })),
)

const SLIDE_INTERVAL_MS = 5000
const SWIPE_THRESHOLD_PX = 50
const MOBILE_MEDIA_QUERY = '(max-width: 639px)'

function HeroSlidePicture({
  slide,
  isActive,
  isLcp,
}: {
  slide: (typeof HERO_SLIDES)[number]
  isActive: boolean
  isLcp: boolean
}) {
  return (
    <picture
      className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
        isActive ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <source
        type="image/webp"
        srcSet={`${slide.webpSmall} 640w, ${slide.webp} ${slide.width}w`}
        sizes="100vw"
      />
      <img
        src={slide.png}
        alt={slide.alt}
        width={slide.width}
        height={slide.height}
        decoding={isLcp ? 'sync' : 'async'}
        fetchPriority={isLcp ? 'high' : 'auto'}
        loading={isLcp ? 'eager' : 'lazy'}
        style={slide.objectPosition ? { objectPosition: slide.objectPosition } : undefined}
        className="h-full w-full object-cover object-center"
      />
    </picture>
  )
}

export function Hero() {
  const [current, setCurrent] = useState(0)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [loadedSlides, setLoadedSlides] = useState(() => new Set([0]))
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    document.getElementById('hero-lcp-placeholder')?.remove()
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY)
    const updateIsMobile = () => setIsMobile(mediaQuery.matches)

    updateIsMobile()
    mediaQuery.addEventListener('change', updateIsMobile)

    return () => mediaQuery.removeEventListener('change', updateIsMobile)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
    }, SLIDE_INTERVAL_MS)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const nextIndex = (current + 1) % HERO_SLIDES.length
    setLoadedSlides((previous) => {
      if (previous.has(current) && previous.has(nextIndex)) {
        return previous
      }
      const updated = new Set(previous)
      updated.add(current)
      updated.add(nextIndex)
      return updated
    })
  }, [current])

  const goToNextSlide = () => {
    setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)
  }

  const goToPreviousSlide = () => {
    setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    if (!isMobile) {
      return
    }

    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (!isMobile || !touchStart.current) {
      return
    }

    const touch = event.changedTouches[0]
    const deltaX = touch.clientX - touchStart.current.x
    const deltaY = touch.clientY - touchStart.current.y
    touchStart.current = null

    if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX || Math.abs(deltaX) < Math.abs(deltaY)) {
      return
    }

    if (deltaX < 0) {
      goToNextSlide()
      return
    }

    goToPreviousSlide()
  }

  const handleSlideSelect = (index: number) => {
    setCurrent(index)
    setLoadedSlides((previous) => {
      if (previous.has(index)) {
        return previous
      }
      const updated = new Set(previous)
      updated.add(index)
      return updated
    })
  }

  return (
    <section
      id="home"
      className="relative h-[580px] overflow-hidden sm:h-[600px] lg:h-[640px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {HERO_SLIDES.map((slide, index) =>
        loadedSlides.has(index) ? (
          <HeroSlidePicture
            key={slide.webp}
            slide={slide}
            isActive={index === current}
            isLcp={index === 0}
          />
        ) : null,
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="absolute inset-x-0 top-24 z-10 mx-auto max-w-7xl px-4 sm:top-auto sm:bottom-44 sm:px-6 lg:bottom-48 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-inferno-400 sm:mb-3 sm:text-sm">
            Protecting What Matters Most.
          </p>
          <h1 className="text-balance text-[1.35rem] font-bold leading-snug text-white sm:text-4xl sm:leading-tight lg:text-5xl">
            Home Defense Meets Wildfire Science.
          </h1>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsQuoteModalOpen(true)}
        className="absolute bottom-16 left-4 right-4 z-20 flex min-h-[4.5rem] items-center justify-center gap-4 rounded-xl bg-inferno-500 px-6 py-4 text-white shadow-xl transition hover:bg-inferno-600 sm:bottom-24 sm:left-auto sm:right-8 sm:min-h-[5rem] sm:min-w-[20rem] sm:justify-start sm:px-8 sm:py-5 lg:bottom-28 lg:min-w-[22rem]"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-14 sm:w-14">
          <Phone className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <div className="min-w-0 text-left">
          <p className="text-sm font-bold uppercase tracking-wide sm:text-base">Call Us Now!</p>
          <p className="text-lg font-bold sm:text-xl">{PHONE}</p>
        </div>
      </button>

      {isQuoteModalOpen ? (
        <Suspense fallback={null}>
          <QuoteRequestModal
            isOpen={isQuoteModalOpen}
            onClose={() => setIsQuoteModalOpen(false)}
          />
        </Suspense>
      ) : null}

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSlideSelect(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative flex h-11 w-11 items-center justify-center"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === current ? 'bg-white' : 'bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
