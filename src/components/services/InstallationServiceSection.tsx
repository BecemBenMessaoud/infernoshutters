import { Check } from 'lucide-react'
import { INSTALLATION_INCLUDED, INSTALLATION_TIMELINE } from '../../data/services'
import { ServiceImagePlaceholder } from './ServiceImagePlaceholder'

const TEAM_IMAGE_SIZE =
  'aspect-[5/3] w-full max-h-[193px] shrink-0 sm:max-h-[205px] lg:max-h-[213px]'

export function InstallationServiceSection() {
  return (
    <section id="services-installation" className="scroll-mt-24 bg-navy-900 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-x-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-inferno-500" aria-hidden />
              <p className="text-sm font-medium text-inferno-400">Inferno Roll Shutter</p>
            </div>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Installation Service
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Our certified team ensures every Inferno Roll Shutter installation meets the highest
              standards of safety, precision, and structural integrity for maximum wildfire and
              security protection.
            </p>
          </div>

          <div className="lg:pt-8">
            <ServiceImagePlaceholder
              label="Team Photo"
              src="/images/services-faq-workers.png"
              alt="Inferno installation team"
              className={TEAM_IMAGE_SIZE}
            />
          </div>

          <div className="grid gap-6 sm:gap-10 lg:col-span-2 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-x-12">
            <div className="relative min-w-0 overflow-hidden">
              <div
                className="pointer-events-none absolute left-[12.5%] right-0 top-4 z-0 hidden h-px bg-white/30 md:block lg:right-0"
                aria-hidden
              />
              <ol className="relative z-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-4 md:gap-x-2 md:gap-y-8">
                {INSTALLATION_TIMELINE.map((step, index) => (
                  <li key={step} className="flex flex-col items-center text-center">
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-inferno-500 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="mt-3 text-xs leading-snug text-white sm:text-sm">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div
              className={`flex flex-col justify-center rounded-xl border border-gray-200 bg-white p-4 sm:p-5 ${TEAM_IMAGE_SIZE}`}
            >
              <h3 className="text-base font-bold text-navy-900">What&apos;s Included</h3>
              <ul className="mt-3 space-y-2">
                {INSTALLATION_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" strokeWidth={2.5} />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}