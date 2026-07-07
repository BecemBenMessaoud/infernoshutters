import { useState } from 'react'
import { Star } from 'lucide-react'
import { INSTALLATION_TRUST_BADGES } from '../../data/services'
import { InstallationAssessmentModal } from './InstallationAssessmentModal'
import { ServiceImagePlaceholder } from './ServiceImagePlaceholder'

const PROOF_IMAGE_SIZE =
  'h-[140px] w-full max-w-[190px] shrink-0 sm:h-[148px] sm:w-[210px] lg:h-[152px] lg:w-[230px]'

function TrustBadge({ label }: { label: string }) {
  return (
    <div className="flex h-[140px] w-full max-w-[130px] shrink-0 flex-col items-center justify-center rounded-full border-[3px] border-navy-900 bg-white px-2.5 text-center sm:h-[148px] sm:w-[136px] lg:h-[152px] lg:w-[142px]">
      <div className="flex items-end justify-center gap-0.5 text-inferno-500">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-2.5 w-2.5 fill-inferno-500 text-inferno-500 ${
              index === 0 || index === 4
                ? '-translate-y-0.5'
                : index === 2
                  ? 'translate-y-0.5'
                  : ''
            }`}
          />
        ))}
      </div>
      <p className="mt-2 text-[10px] font-bold leading-tight text-navy-900 sm:text-[11px]">
        {label}
      </p>
    </div>
  )
}

export function InstallationProofSection() {
  const [isAssessmentModalOpen, setIsAssessmentModalOpen] = useState(false)

  return (
    <>
      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:gap-10">
            <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8 xl:gap-10">
              <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                <ServiceImagePlaceholder
                  src="/images/shutter-installation.png"
                  alt="Roller shutter installation"
                  label="Shutter Installation"
                  className={`${PROOF_IMAGE_SIZE} overflow-hidden rounded-xl`}
                />
                <ServiceImagePlaceholder
                  src="/images/installer.png"
                  alt="Inferno installer mounting rolling shutters"
                  label="Installer"
                  className={`${PROOF_IMAGE_SIZE} overflow-hidden rounded-xl`}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {INSTALLATION_TRUST_BADGES.map((badge) => (
                  <TrustBadge key={badge} label={badge} />
                ))}
              </div>
            </div>

            <div className="flex w-full justify-center">
              <button
                type="button"
                onClick={() => setIsAssessmentModalOpen(true)}
                className="inline-block min-h-11 rounded-md bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:px-10"
              >
                Site Assessment
              </button>
            </div>
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
