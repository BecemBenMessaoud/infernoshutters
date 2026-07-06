import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE } from '../../data/site'

const HERO_IMAGES = ['/images/hero image.jpg', '/images/house.jpg', '/images/house2.jpg']

export function Hero() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="home" className="relative h-[520px] overflow-hidden sm:h-[580px] lg:h-[640px]">
      {HERO_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Home with Inferno-Roll security shutters"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-inferno-400">Protecting What Matters Most.</p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Home Defense Meets Wildfire Science.</h1>
          <button type="button" className="mt-6 rounded bg-white px-8 py-2.5 text-sm font-bold tracking-wide text-gray-900 transition hover:bg-gray-100">LEARN MORE</button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="absolute bottom-24 right-4 z-20 flex items-center gap-3 rounded-lg bg-inferno-500 px-5 py-4 text-white shadow-xl transition hover:bg-inferno-600 sm:right-8 lg:bottom-28">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20"><Phone className="h-5 w-5" /></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide">Call Us Now!</p>
          <p className="text-lg font-bold">{PHONE}</p>
        </div>
      </a>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button key={index} type="button" onClick={() => setCurrent(index)} aria-label={`Go to slide ${index + 1}`} className={`h-2.5 w-2.5 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
    </section>
  )
}
