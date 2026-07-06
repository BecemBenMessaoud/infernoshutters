import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE } from '../../data/site'

const HERO_IMAGES = [
  {
    src: '/images/inferno-roll.png',
    alt: 'Inferno-Roll shutters protecting a home from wildfire',
  },
  {
    src: '/images/az.png',
    alt: 'Inferno-Roll shutters on an Arizona desert home',
    objectPosition: '38% center',
  },
  {
    src: '/images/inferno-roll-winter.png',
    alt: 'Inferno-Roll shutters on a snow-covered mountain home',
  },
] as const

export function Hero() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="home" className="relative h-[520px] overflow-hidden sm:h-[580px] lg:h-[640px]">
      {HERO_IMAGES.map((image, index) => (
        <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority={index === 0 ? 'high' : 'auto'}
          loading={index === 0 ? 'eager' : 'lazy'}
          style={
            'objectPosition' in image
              ? { objectPosition: image.objectPosition }
              : undefined
          }
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-40 z-10 mx-auto max-w-7xl px-4 sm:bottom-44 sm:px-6 lg:bottom-48 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-inferno-400">
            Protecting What Matters Most.
          </p>
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Home Defense Meets Wildfire Science.
          </h1>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <a
        href={`tel:${PHONE.replace(/\D/g, '')}`}
        className="absolute bottom-28 left-4 right-4 z-20 flex items-center justify-center gap-3 rounded-lg bg-inferno-500 px-4 py-3 text-white shadow-xl transition hover:bg-inferno-600 sm:bottom-24 sm:left-auto sm:right-8 sm:justify-start sm:px-5 sm:py-4 lg:bottom-28"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
          <Phone className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide">Call Us Now!</p>
          <p className="text-lg font-bold">{PHONE}</p>
        </div>
      </a>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
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