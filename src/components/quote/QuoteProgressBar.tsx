import { QUOTE_STEPS } from '../../data/quote'

type QuoteProgressBarProps = {
  currentStep: number
}

export function QuoteProgressBar({ currentStep }: QuoteProgressBarProps) {
  return (
    <div className="mt-6">
      <p className="mb-3 text-center text-sm font-medium text-white/90">
        Step {currentStep} of {QUOTE_STEPS.length}
      </p>
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-2 rounded-full bg-navy-800 px-2 py-2 sm:gap-1 sm:px-3 sm:py-2.5">
        {QUOTE_STEPS.map((step) => {
          const isActive = step.number === currentStep

          return (
            <span
              key={step.label}
              className={`rounded-full px-3 py-2 text-xs font-semibold sm:px-3 sm:text-xs lg:px-4 ${
                isActive
                  ? 'bg-inferno-500 text-white'
                  : 'text-white/70'
              }`}
            >
              {step.number}. {step.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}