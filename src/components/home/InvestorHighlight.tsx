import { Link } from 'react-router-dom'

const PARTNER_LOGOS = [
  { src: '/images/partners/pentagon.png', alt: 'Pentagon Security Shutters' },
  { src: '/images/partners/gaposa.png', alt: 'GAPOSA Motors and Control Systems' },
  { src: '/images/partners/somfy.png', alt: 'Somfy' },
  { src: '/images/partners/roll-a-shield.png', alt: 'Roll-A-Shield' },
  { src: '/images/partners/alpha.png', alt: 'Alpha Motor Corporation' },
  { src: '/images/partners/heroal.png', alt: 'heroal' },
  { src: '/images/partners/alutech.png', alt: 'Alutech United, Inc' },
  { src: '/images/partners/qmi.png', alt: 'QMi Security Innovations' },
]

const SCROLLING_LOGOS = [...PARTNER_LOGOS, ...PARTNER_LOGOS]

export function InvestorHighlight() {
  return (
    <section className="relative bg-navy-900 pt-16 pb-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            Investor Highlight
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-200 sm:text-lg">
            Inferno shutters is expanding. Discover investment opportunities in
            fire storm and security home protection .
          </p>
          <Link
            to="/investor-info"
            className="mt-8 inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl bg-white px-6 py-6 shadow-lg">
            <p className="mb-4 text-center text-sm font-semibold text-navy-900">
              Trusted Partners
            </p>
            <div className="overflow-hidden">
              <div className="partner-scroll-track flex items-center gap-10">
                {SCROLLING_LOGOS.map((logo, index) => (
                  <div
                    key={`${logo.src}-${index}`}
                    className="flex h-16 shrink-0 items-center justify-center sm:h-20"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-14 w-auto max-w-[140px] object-contain sm:max-h-16 sm:max-w-[160px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}