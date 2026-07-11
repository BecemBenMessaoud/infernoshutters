import { TrendingUp } from 'lucide-react'
import { InvestorHighlightsContent } from '../components/investor/InvestorHighlightsContent'

export function InvestorInfoPage() {
  return (
    <main>
      <section className="min-h-[calc(100vh-8rem)] bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
              <TrendingUp className="h-4 w-4" />
              <span>Investor info</span>
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Investor Highlights
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Explore growth opportunities with Inferno Roll Shutters and learn why investors are
              partnering with us to scale fire-resilient home protection nationwide.
            </p>
          </div>

          <InvestorHighlightsContent />
        </div>
      </section>
    </main>
  )
}