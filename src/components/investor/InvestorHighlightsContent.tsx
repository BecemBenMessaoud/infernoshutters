import { EMAIL } from '../../data/site'

const HIGHLIGHT_POINTS = [
  {
    title: 'Proven Market Demand:',
    body: (
      <>
        Wildfires caused <span className="font-bold text-red-400">$250 billion</span> in damages last
        year, yet fewer than 13.5% of homes have ember-resistant protections. Homeowners are seeking
        resilient solutions that also reduce energy costs and security.
      </>
    ),
  },
  {
    title: 'Scalable Business Model:',
    body: 'Custom installations, trusted manufacturing partners, and recurring service programs create predictable revenue and sustainable growth.',
  },
  {
    title: 'Expanding Reach:',
    body: (
      <>
        With <span className="font-bold text-red-400">15% growth</span> in installations
        year-over-year, Inferno Shutters is scaling from California to high-risk regions nationwide,
        building brand equity and a reputation for premium fire-resistant, energy-efficient, and
        security.
      </>
    ),
  },
  {
    title: 'Defensible Advantage:',
    body: 'Proprietary shutter designs uniquely combine fire protection, energy efficiency, and security—a triple value proposition unmatched by commodity providers.',
  },
  {
    title: 'Investor Opportunity:',
    body: (
      <>
        With strong demand, strategic partnerships, and a clear go-to-market plan, Inferno Shutters
        presents a compelling investment case with{' '}
        <span className="font-bold text-red-400">projected ROI of 6–10%</span> and national
        scalability.
      </>
    ),
  },
] as const

export function InvestorHighlightsContent() {
  return (
    <div className="rounded-2xl bg-[#0a2540] p-6 shadow-xl sm:p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-inferno-500 sm:text-3xl">Investor Highlight</h2>

      <p className="mt-4 text-lg font-semibold text-[#f0ee74] sm:text-xl">
        Inferno-Roll Shutters is expanding.
      </p>

      <p className="mt-4 text-sm leading-relaxed text-gray-200 sm:text-base">
        Wildfires and extreme weather events are reshaping housing markets and insurance coverage
        across the country. Inferno Shutters is positioned at the intersection of home protection,
        energy efficiency, and long-term property value.
      </p>

      <ul className="mt-8 space-y-6">
        {HIGHLIGHT_POINTS.map((point) => (
          <li key={point.title} className="leading-relaxed text-gray-200">
            <p className="mb-2 text-base font-bold text-inferno-500 sm:text-lg">{point.title}</p>
            <p className="text-sm sm:text-base">{point.body}</p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm leading-relaxed text-gray-200 sm:text-base">
        Now is the time to partner in shaping the future of fire-resilient home protection. Investor
        packages and structured opportunities are available for strategic partners ready to grow
        with us.
      </p>

      <div className="mt-8 border-t border-white/20 pt-6">
        <h3 className="text-lg font-bold text-inferno-500 sm:text-xl">Connect With Our Team</h3>
        <p className="mt-2 text-sm text-gray-200 sm:text-base">
          Contact:{' '}
          <a
            href={`mailto:${EMAIL}`}
            className="font-medium text-sky-400 underline underline-offset-2 transition hover:text-sky-300"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </div>
  )
}