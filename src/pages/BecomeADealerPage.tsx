import { Handshake } from 'lucide-react'

const inputClass =
  'w-full border border-transparent bg-[#f3f3f3] px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-gray-900'

const selectClass =
  'w-full border border-gray-900 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none'

const PRODUCT_FOCUS_OPTIONS = [
  'Fire-Resistant Shutter',
  'Standard Security Shutter',
  'Hurricane & Storm Shutter',
  'Heavy-Duty Shutter',
] as const

const PROJECT_READINESS_OPTIONS = [
  'One-Off Project',
  'Need immediate pricing',
  'Currently marketing similar products',
] as const

const HEAR_ABOUT_OPTIONS = [
  'Google Search',
  'Social Media',
  'Referral',
  'Trade Show / Event',
  'Advertisement',
  'Other',
] as const

function RequiredMark() {
  return <span className="text-red-500"> *</span>
}

function FormRow({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="grid grid-cols-1 items-center gap-2 py-2 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-6">
      <label htmlFor={htmlFor} className="text-sm text-gray-600">
        {label}
        {required ? <RequiredMark /> : null}
      </label>
      {children}
    </div>
  )
}

function SectionLegend({ children }: { children: React.ReactNode }) {
  return (
    <legend className="mb-3 text-base font-bold text-gray-900">{children}</legend>
  )
}

export function BecomeADealerPage() {
  return (
    <main>
      <section className="bg-navy-900 pb-16 pt-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Handshake className="h-4 w-4" />
            <span>Become a Dealer</span>
          </div>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Partner with Inferno
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Interested in carrying Inferno roll shutters? Tell us about your business and our team
            will reach out to discuss dealer opportunities.
          </p>

          <form
            className="mt-10 rounded-2xl bg-white p-6 text-left shadow-xl sm:p-8 lg:p-10"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-1">
              <FormRow label="Name" htmlFor="dealer-name" required>
                <input
                  id="dealer-name"
                  name="name"
                  type="text"
                  required
                  placeholder="First / Last Name"
                  className={inputClass}
                />
              </FormRow>

              <FormRow label="Company name" htmlFor="dealer-company" required>
                <input
                  id="dealer-company"
                  name="company"
                  type="text"
                  required
                  placeholder="Company name"
                  className={inputClass}
                />
              </FormRow>

              <FormRow label="Country" htmlFor="dealer-country" required>
                <input
                  id="dealer-country"
                  name="country"
                  type="text"
                  required
                  defaultValue="USA"
                  className={inputClass}
                />
              </FormRow>

              <FormRow label="Street Address" htmlFor="dealer-street" required>
                <input
                  id="dealer-street"
                  name="street"
                  type="text"
                  required
                  placeholder="Street Address"
                  className={inputClass}
                />
              </FormRow>

              <div className="grid grid-cols-1 items-center gap-3 py-2 sm:grid-cols-[11rem_minmax(0,1fr)_6.5rem_minmax(0,1fr)] sm:gap-x-4">
                <label htmlFor="dealer-city" className="text-sm text-gray-600">
                  City
                  <RequiredMark />
                </label>
                <input
                  id="dealer-city"
                  name="city"
                  type="text"
                  required
                  placeholder="City"
                  className={inputClass}
                />
                <label htmlFor="dealer-zip" className="text-sm text-gray-600">
                  Zip code
                  <RequiredMark />
                </label>
                <input
                  id="dealer-zip"
                  name="zip"
                  type="text"
                  required
                  placeholder="Zip code"
                  className={inputClass}
                />
              </div>

              <FormRow label="State" htmlFor="dealer-state" required>
                <input id="dealer-state" name="state" type="text" required className={inputClass} />
              </FormRow>

              <FormRow label="Email" htmlFor="dealer-email" required>
                <input
                  id="dealer-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className={inputClass}
                />
              </FormRow>

              <FormRow label="Phone" htmlFor="dealer-phone" required>
                <input
                  id="dealer-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Phone"
                  className={inputClass}
                />
              </FormRow>

              <div className="grid grid-cols-1 items-start gap-2 py-2 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-6">
                <label htmlFor="dealer-comments" className="pt-2 text-sm text-gray-600">
                  Comments / Questions
                </label>
                <textarea
                  id="dealer-comments"
                  name="comments"
                  rows={5}
                  placeholder="Message"
                  className={`${inputClass} resize-y`}
                />
              </div>
            </div>

            <div className="mt-8 space-y-8 border-t border-gray-100 pt-8">
              <fieldset className="border-0 p-0">
                <SectionLegend>
                  Which of our products will you concentrate on?
                  <RequiredMark />
                </SectionLegend>
                <div className="space-y-2">
                  {PRODUCT_FOCUS_OPTIONS.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="productFocus"
                        value={option}
                        className="h-4 w-4 rounded border-gray-300 text-inferno-500 focus:ring-inferno-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="border-0 p-0">
                <SectionLegend>
                  Have you installed similar products before
                  <RequiredMark />
                </SectionLegend>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="installedBefore"
                      value="yes"
                      required
                      className="h-4 w-4 border-gray-300 text-inferno-500 focus:ring-inferno-500"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-600">
                    <input
                      type="radio"
                      name="installedBefore"
                      value="no"
                      className="h-4 w-4 border-gray-300 text-inferno-500 focus:ring-inferno-500"
                    />
                    No
                  </label>
                </div>
              </fieldset>

              <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-x-6">
                <label htmlFor="dealer-operations" className="pt-2 text-sm text-gray-600">
                  In a few words, describe your operations/infrastructure
                  <RequiredMark />
                </label>
                <textarea
                  id="dealer-operations"
                  name="operations"
                  rows={5}
                  required
                  placeholder="Message"
                  className={`${inputClass} resize-y`}
                />
              </div>

              <fieldset className="border-0 p-0">
                <SectionLegend>Project Readiness</SectionLegend>
                <div className="space-y-2">
                  {PROJECT_READINESS_OPTIONS.map((option) => (
                    <label key={option} className="flex items-center gap-2 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        name="projectReadiness"
                        value={option}
                        className="h-4 w-4 rounded border-gray-300 text-inferno-500 focus:ring-inferno-500"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <FormRow label="How did you hear about us?" htmlFor="dealer-referral" required>
                <select id="dealer-referral" name="referral" required className={selectClass} defaultValue="">
                  <option value="" disabled>
                    - Select -
                  </option>
                  {HEAR_ABOUT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </FormRow>

              <p className="text-xs leading-relaxed text-gray-500">
                Disclaimer: By providing my contact information, I acknowledge and give my explicit
                consent to be contacted via SMS and receive emails for various purposes, which may
                include marketing and promotional content. Message and data rates may apply. Message
                frequency may vary. Reply STOP to opt out.
              </p>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-lg bg-inferno-500 py-3.5 text-sm font-bold text-white transition hover:bg-inferno-600 sm:w-auto sm:px-10"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}