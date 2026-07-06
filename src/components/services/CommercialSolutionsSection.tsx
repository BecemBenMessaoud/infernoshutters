import { useState } from 'react'
import { Briefcase, FileText } from 'lucide-react'
import {
  COMMERCIAL_CARDS,
  COMMERCIAL_PROPERTY_FEATURES,
} from '../../data/services'
import { RepairServiceCallModal } from './RepairServiceCallModal'

const COMMERCIAL_TONES = {
  blue: 'bg-[#4a6278]',
  brown: 'bg-[#8a7355]',
} as const

const PROPERTY_ICONS = {
  file: FileText,
  briefcase: Briefcase,
} as const

function CommercialCard({
  title,
  description,
  iconSrc,
  tone,
  className = '',
}: {
  title: string
  description: string
  iconSrc: string
  tone: keyof typeof COMMERCIAL_TONES
  className?: string
}) {
  return (
    <article
      className={`flex h-full flex-col items-center justify-center rounded-lg px-4 py-5 text-center text-white sm:px-5 ${COMMERCIAL_TONES[tone]} ${className}`}
    >
      <div className="flex w-full items-center justify-center">
        <img src={iconSrc} alt="" className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
      </div>
      <h3 className="mt-3 text-base font-bold sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/90">{description}</p>
    </article>
  )
}

export function CommercialSolutionsSection() {
  const [isCommercialModalOpen, setIsCommercialModalOpen] = useState(false)
  const multiSiteCard = COMMERCIAL_CARDS[0]
  const contractorCard = COMMERCIAL_CARDS[1]

  return (
    <>
      <section
        id="services-commercial"
        className="relative scroll-mt-24 bg-navy-900 py-14 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Commercial Solutions</h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
              Scalable roll shutter programs for contractors, property managers, and multi-site
              operators with dedicated support, documentation, and volume pricing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            <CommercialCard
              title={multiSiteCard.title}
              description={multiSiteCard.description}
              iconSrc={multiSiteCard.iconSrc}
              tone={multiSiteCard.tone}
            />

            <CommercialCard
              title={contractorCard.title}
              description={contractorCard.description}
              iconSrc={contractorCard.iconSrc}
              tone={contractorCard.tone}
            />

            <article className="flex h-full flex-col rounded-lg bg-navy-800 p-5 text-white">
              <h3 className="text-lg font-bold">Property Management Solutions</h3>
              <p className="mt-2 text-sm text-white/80">
                Programs built for portfolios that need consistent service and reporting.
              </p>

              <div className="mt-5 flex flex-1 flex-col justify-center space-y-3">
                {COMMERCIAL_PROPERTY_FEATURES.map((feature) => {
                  const Icon = PROPERTY_ICONS[feature.icon]

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-3 rounded-lg bg-white p-4 text-navy-900"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-inferno-500 text-white">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                      <div>
                        <h4 className="text-sm font-bold">{feature.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>

            <div className="md:col-span-2 lg:col-start-2 lg:row-start-2">
              <button
                type="button"
                onClick={() => setIsCommercialModalOpen(true)}
                className="min-h-11 w-full rounded-md bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:px-10"
              >
                Talk to Commercial Team
              </button>
            </div>

            <p
              className="w-full text-balance px-2 text-center text-xl font-bold leading-snug text-white sm:text-3xl lg:col-span-3 lg:col-start-1 lg:row-start-3 lg:text-4xl"
              style={{ color: '#ffffff' }}
            >
              Schedule Your Onsite Estimate Today!
            </p>
          </div>
        </div>
      </section>

      <RepairServiceCallModal
        isOpen={isCommercialModalOpen}
        onClose={() => setIsCommercialModalOpen(false)}
        variant="commercial"
      />
    </>
  )
}