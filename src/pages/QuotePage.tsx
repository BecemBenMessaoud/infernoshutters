import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { QuoteRequestForm } from '../components/quote/QuoteRequestForm'

export function QuotePage() {
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate('/quote/received')
  }

  return (
    <main>
      <div className="h-1.5 bg-inferno-500" aria-hidden />

      <section className="bg-[#3a3a3a] pb-10 pt-10 lg:pb-12 lg:pt-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Request a Professional Quote.
          </h1>
          <p className="mt-3 text-base text-white/90 sm:text-lg">
            Secure Your Home Before the Next Threat.
          </p>

          <div className="mx-auto mt-8 flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full bg-navy-900 px-4 py-2.5 sm:gap-3 sm:px-6">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-inferno-500">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </span>
            <span className="text-center text-xs font-medium text-white sm:text-left sm:text-sm">
              Licensed &bull; bonded &bull; Insured &bull; Warranty Backed
            </span>
          </div>
        </div>
      </section>

      <section className="flex min-h-[28rem] items-center justify-center bg-navy-900 px-4 py-16 sm:px-6 lg:min-h-[32rem] lg:px-8 lg:py-24">
        <div className="w-full max-w-4xl">
          <div className="mx-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <QuoteRequestForm idPrefix="quote-page" onSubmit={handleSubmit} />
          </div>
        </div>
      </section>
    </main>
  )
}
