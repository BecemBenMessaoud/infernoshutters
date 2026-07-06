import { useState } from 'react'
import { Check, CheckCircle2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { QuoteProgressBar } from '../components/quote/QuoteProgressBar'
import {
  QUOTE_LOCATION_SUGGESTIONS,
  QUOTE_PRODUCT_TYPES,
  QUOTE_PROPERTY_TYPES,
  QUOTE_STEPS,
} from '../data/quote'

const inputClassName =
  'w-full rounded-lg border border-gray-200 border-t-[3px] border-t-inferno-500 px-4 py-3.5 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500'

export function QuotePage() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [address, setAddress] = useState('90210, Beverly Hills, CA')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [propertyType, setPropertyType] = useState<string>(QUOTE_PROPERTY_TYPES[0])
  const [productType, setProductType] = useState<string>(QUOTE_PRODUCT_TYPES[0])
  const [name, setName] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [email, setEmail] = useState('')
  const [howWeCanHelp, setHowWeCanHelp] = useState('')

  const activeStep = QUOTE_STEPS[currentStep - 1]

  const handleNextStep = () => {
    if (currentStep < QUOTE_STEPS.length) {
      setCurrentStep((step) => step + 1)
      return
    }

    navigate('/quote/received')
  }

  const handlePreviousStep = () => {
    setCurrentStep((step) => Math.max(1, step - 1))
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

          <QuoteProgressBar currentStep={currentStep} />
        </div>
      </section>

      <section className="flex min-h-[28rem] items-center justify-center bg-navy-900 px-4 py-16 sm:px-6 lg:min-h-[32rem] lg:px-8 lg:py-24">
        <div className="w-full max-w-2xl">
          <div className="mx-auto rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">
              Step {currentStep} &mdash; {activeStep.label}
            </h2>

            {currentStep === 1 ? (
              <>
                <div className="relative mt-6">
                  <label htmlFor="quote-location" className="sr-only">
                    Location
                  </label>
                  <input
                    id="quote-location"
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    placeholder="ZIP code or full address"
                    className={inputClassName}
                  />

                  {showSuggestions ? (
                    <div className="absolute left-0 right-0 top-full z-10 mt-1 max-h-48 overflow-y-auto overflow-x-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
                      {QUOTE_LOCATION_SUGGESTIONS.map((suggestion, index) => (
                        <button
                          key={`${suggestion}-${index}`}
                          type="button"
                          onClick={() => {
                            setAddress(suggestion)
                            setShowSuggestions(false)
                          }}
                          className="block w-full border-b border-gray-100 bg-gray-50 px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-100 last:border-b-0"
                        >
                          {suggestion}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-lg bg-[#e8f5e9] px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#2e7d32]" />
                  <span className="text-sm font-medium text-[#2e7d32]">We cover this area!</span>
                </div>

                <p className="mt-6 text-center text-xs text-gray-500">
                  * Service available in select areas.
                </p>
              </>
            ) : null}

            {currentStep === 2 ? (
              <div className="mt-6">
                <label htmlFor="quote-property-type" className="mb-2 block text-sm font-medium text-gray-700">
                  Property type
                </label>
                <select
                  id="quote-property-type"
                  value={propertyType}
                  onChange={(event) => setPropertyType(event.target.value)}
                  className={inputClassName}
                >
                  {QUOTE_PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {currentStep === 3 ? (
              <div className="mt-6">
                <label htmlFor="quote-product-type" className="mb-2 block text-sm font-medium text-gray-700">
                  Product interest
                </label>
                <select
                  id="quote-product-type"
                  value={productType}
                  onChange={(event) => setProductType(event.target.value)}
                  className={inputClassName}
                >
                  {QUOTE_PRODUCT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            ) : null}

            {currentStep === 4 ? (
              <div className="mt-6 space-y-5">
                <div>
                  <label htmlFor="quote-name" className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="quote-zip-code" className="mb-2 block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    id="quote-zip-code"
                    type="text"
                    value={zipCode}
                    onChange={(event) => setZipCode(event.target.value)}
                    placeholder="90210"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="quote-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="quote-how-we-can-help" className="mb-2 block text-sm font-medium text-gray-700">
                    How we can Help?
                  </label>
                  <textarea
                    id="quote-how-we-can-help"
                    value={howWeCanHelp}
                    onChange={(event) => setHowWeCanHelp(event.target.value)}
                    placeholder="Tell us about your project or questions"
                    rows={4}
                    className={`${inputClassName} resize-y`}
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 md:flex-row md:items-center md:justify-between">
              <Link
                to="/privacy"
                className="text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Privacy Policy
              </Link>

              <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center md:gap-6">
                {currentStep === 4 ? (
                  <div className="flex items-center gap-3 rounded border border-gray-300 bg-[#f9f9f9] px-3 py-2.5">
                    <div className="h-6 w-6 shrink-0 rounded border border-gray-400 bg-white" />
                    <span className="text-xs text-gray-600">I&apos;m not a robot</span>
                    <div className="ml-2 flex flex-col items-center">
                      <div className="h-8 w-8 rounded bg-gray-200" aria-hidden />
                      <span className="mt-0.5 text-[10px] text-gray-400 sm:text-xs">reCAPTCHA</span>
                    </div>
                  </div>
                ) : null}

                <div className="flex flex-col gap-3 sm:flex-row">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePreviousStep}
                      className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-navy-900 transition hover:border-inferno-500 hover:text-inferno-500"
                    >
                      Back
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="shrink-0 rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
                  >
                    {currentStep === QUOTE_STEPS.length ? 'Submit Request' : 'Next Step'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}