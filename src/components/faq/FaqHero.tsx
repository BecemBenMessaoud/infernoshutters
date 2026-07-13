import { CircleHelp } from 'lucide-react'

export function FaqHero() {
  return (
    <section className="bg-navy-900 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
          <CircleHelp className="h-4 w-4" />
          <span>FAQ</span>
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">FAQ</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Answers to common questions to help you understand our wildfire protection and security
          solutions before you request a quote.
        </p>
      </div>
    </section>
  )
}
