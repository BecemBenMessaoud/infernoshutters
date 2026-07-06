import { useState } from 'react'
import { Cog, Ruler, Shield, User } from 'lucide-react'
import { FABRICATION_FEATURES } from '../../data/services'
import { InstallationAssessmentModal } from './InstallationAssessmentModal'
import { ServiceImagePlaceholder } from './ServiceImagePlaceholder'

const FEATURE_ICONS = {
  user: User,
  cog: Cog,
  ruler: Ruler,
  shield: Shield,
} as const

export function CustomFabricationSection() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  return (
    <>
      <section id="services-fabrication" className="scroll-mt-24 bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 sm:text-4xl">
                Custom Fabrication &amp; Retrofits
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                From historic facades to architect-specified openings, we engineer custom shutter
                solutions with precise fitment, reinforced mounting, and finishes that complement
                your property.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {FABRICATION_FEATURES.map((feature) => {
                  const Icon = FEATURE_ICONS[feature.icon]

                  return (
                    <div
                      key={feature.title}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-inferno-500 text-white">
                        <Icon className="h-4 w-4" strokeWidth={2.25} />
                      </span>
                      <h3 className="mt-3 text-sm font-bold text-navy-900">{feature.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-600 sm:text-sm">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <ServiceImagePlaceholder
                label="Roll Shutter Product View"
                src="/images/services/custom-fabrication.png"
                alt="Custom roll shutter retrofit on a home patio"
                className="h-[300px] w-full max-w-[360px] overflow-hidden rounded-xl sm:h-[340px] sm:max-w-[400px] lg:h-[380px] lg:max-w-[460px]"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsAssessmentModalOpen(true)}
              className="inline-block rounded-md bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:px-10"
            >
              Request Custom Assessment
            </button>
          </div>
        </div>
      </section>

      <InstallationAssessmentModal
        isOpen={isAssessmentModalOpen}
        onClose={() => setIsAssessmentModalOpen(false)}
      />
    </>
  )
}