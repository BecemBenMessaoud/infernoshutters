import { AlertTriangle } from 'lucide-react'
import { HeroAccentBar } from '../ui/HeroAccentBar'

export function NotFoundHero() {
  return (
    <section className="bg-navy-900 pt-12 lg:pt-16">
      <div className="mx-auto max-w-4xl px-4 pb-8 text-center sm:px-6 sm:pb-10 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
          <AlertTriangle className="h-4 w-4" aria-hidden />
          <span>Error 404</span>
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">404 — Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          The page you requested does not exist or may have been moved. Return to the homepage or
          explore our roll shutter products and services below.
        </p>
      </div>
      <HeroAccentBar />
    </section>
  )
}
