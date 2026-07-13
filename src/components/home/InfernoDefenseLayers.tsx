import { Shield } from 'lucide-react'

const FEATURES = [
  {
    title: 'Proprietary fire technology',
    description:
      'Rated to shut out flame and radiant heat at the moment your openings are most exposed.',
    icon: 'fire',
  },
  {
    title: 'ASTM-certified & insurance-ready',
    description:
      'Exceeds ASTM fire-resistance benchmarks and can support insurance retention in high-risk zones.',
    icon: 'certified',
  },
  {
    title: 'Year-round efficiency',
    description:
      'Blocks up to 90% of solar heat gain, cutting cooling costs and dampening outside noise.',
    icon: 'efficiency',
  },
  {
    title: 'Multi-layer aluminum slats',
    description:
      'Durable, heat-resistant slats form a sealed barrier over windows and doors against heat and impact.',
    icon: 'slats',
  },
  {
    title: 'Smart, automatic control',
    description:
      'Automatic, remote, or manual operation with app and voice control — plus solar backup for post-fire use.',
    icon: 'control',
  },
  {
    title: 'Built to last decades',
    description:
      'Premium materials tested for longevity, engineered to perform reliably with minimal maintenance.',
    icon: 'shield',
  },
] as const

type FeatureIconName = (typeof FEATURES)[number]['icon']

function FeatureIcon({ name }: { name: FeatureIconName }) {
  if (name === 'fire') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E25633] sm:h-14 sm:w-14">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white sm:h-7 sm:w-7" fill="currentColor" aria-hidden>
          <path d="M12 3c1.2 2.4 3.6 3.8 3.6 7.2 0 2.6-1.6 4.8-3.6 6-2-1.2-3.6-3.4-3.6-6C8.4 6.8 10.8 5.4 12 3zm0 16.5c2.8-2 4.8-5.2 4.8-9.3 0-2.1-.8-3.7-1.8-5.2C13.8 7.8 12.9 9.8 12 11c-.9-1.2-1.8-3.2-2.9-5.5-1 1.5-1.8 3.1-1.8 5.2 0 4.1 2 7.3 4.7 9.3z" />
        </svg>
      </div>
    )
  }

  if (name === 'certified') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg viewBox="0 0 32 36" className="h-12 w-12 text-[#E25633] sm:h-14 sm:w-14" aria-hidden>
          <path
            fill="currentColor"
            d="M16 1.5 4 7.2v9.4c0 7.2 5.1 13.9 12 17.9 6.9-4 12-10.7 12-17.9V7.2L16 1.5zm-1.2 20.3-4.1-4.1 1.9-1.9 2.2 2.2 5.6-5.6 1.9 1.9-7.5 7.6z"
          />
        </svg>
      </div>
    )
  }

  if (name === 'efficiency') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg viewBox="0 0 40 32" className="h-10 w-12 text-[#E25633] sm:h-12 sm:w-14" aria-hidden>
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            d="M6 24h28M20 24V10"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            d="M8 24a12 12 0 0 1 24 0"
          />
        </svg>
      </div>
    )
  }

  if (name === 'slats') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg viewBox="0 0 36 32" className="h-10 w-11 text-[#5C5C5C] sm:h-11 sm:w-12" aria-hidden>
          <rect x="4" y="4" width="28" height="5" rx="1" fill="currentColor" />
          <rect x="4" y="13.5" width="28" height="5" rx="1" fill="currentColor" />
          <rect x="4" y="23" width="28" height="5" rx="1" fill="currentColor" />
        </svg>
      </div>
    )
  }

  if (name === 'control') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <svg viewBox="0 0 36 36" className="h-12 w-12" aria-hidden>
          <circle cx="18" cy="18" r="15" fill="#5C5C5C" />
          <path d="M18 9v9l6 4" stroke="#E25633" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
    )
  }

  if (name === 'shield') {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
        <Shield
          className="h-10 w-10 fill-[#5C5C5C] text-[#5C5C5C] sm:h-11 sm:w-11"
          strokeWidth={1.25}
          aria-hidden
        />
      </div>
    )
  }

  return null
}

export function InfernoDefenseLayers() {
  return (
    <section className="bg-[#F7F2E9] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 sm:gap-4">
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E25633] sm:text-xs">
            What Inferno-Roll Gives You
          </p>
          <div className="hidden h-px flex-1 bg-[#CCCCCC] sm:block" />
        </div>

        <h2 className="mt-5 max-w-3xl text-2xl font-bold text-navy-900 sm:mt-6 sm:text-3xl lg:text-4xl">
          One system. Many layers of defense.
        </h2>

        <div className="mt-10 grid gap-x-10 gap-y-8 sm:mt-12 sm:gap-x-14 sm:gap-y-10 md:grid-cols-2 lg:gap-x-20 lg:gap-y-12">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="flex items-start gap-4 sm:gap-5">
              <FeatureIcon name={feature.icon} />
              <div className="min-w-0 pt-0.5">
                <h3 className="text-base font-bold leading-snug text-[#1A1A1A] sm:text-[1.05rem]">
                  {feature.title}
                </h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[#4A4A4A] sm:text-[0.95rem] sm:leading-7">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}