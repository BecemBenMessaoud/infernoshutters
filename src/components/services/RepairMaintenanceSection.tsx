import { useState } from 'react'
import { REPAIR_SERVICE_CARDS } from '../../data/services'
import { RepairServiceCallModal } from './RepairServiceCallModal'

const CARD_TONES = {
  brown: 'bg-[#8a7355]',
  blue: 'bg-[#5c6d7a]',
  olive: 'bg-[#6b6b4e]',
} as const

export function RepairMaintenanceSection() {
  const [isServiceCallModalOpen, setIsServiceCallModalOpen] = useState(false)

  return (
    <>
      <section id="services-repair" className="scroll-mt-24 bg-navy-900 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Repair &amp; Maintenance</h2>
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base lg:max-w-xl lg:justify-self-end">
              Keep your Inferno-Roll shutters operating reliably with emergency repairs, scheduled
              maintenance plans, and preventive inspections designed for wildfire and storm
              readiness.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REPAIR_SERVICE_CARDS.map((card) => (
              <article
                key={card.title}
                className={`flex flex-col items-center rounded-lg p-6 text-center text-white ${CARD_TONES[card.tone]}`}
              >
                <div className="flex w-full items-center justify-center">
                  <img
                    src={card.iconSrc}
                    alt=""
                    className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/90">
                  {card.description}
                </p>
                <p className="mt-5 text-sm font-bold">{card.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setIsServiceCallModalOpen(true)}
              className="inline-block rounded-md bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:px-10"
            >
              Request Service Call
            </button>
          </div>
        </div>
      </section>

      <RepairServiceCallModal
        isOpen={isServiceCallModalOpen}
        onClose={() => setIsServiceCallModalOpen(false)}
      />
    </>
  )
}