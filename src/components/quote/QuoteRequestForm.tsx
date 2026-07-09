import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PHONE } from '../../data/site'
import {
  QUOTE_INSTALLATION_TYPE_OPTIONS,
  QUOTE_PRODUCT_INTEREST_OPTIONS,
  QUOTE_REFERRAL_SOURCE_OPTIONS,
  QUOTE_TYPE_OPTIONS,
} from '../../data/quote'

const inputClassName =
  'w-full rounded-lg border border-gray-200 border-t-[3px] border-t-inferno-500 px-4 py-3.5 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500'

const selectClassName = `${inputClassName} text-gray-600`

function FieldLabel({
  htmlFor,
  children,
  required = false,
}: {
  htmlFor: string
  children: string
  required?: boolean
}) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-gray-700">
      {children}
      {required ? <span className="text-inferno-500"> *</span> : null}
    </label>
  )
}

type QuoteRequestFormProps = {
  idPrefix?: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export function QuoteRequestForm({ idPrefix = 'quote', onSubmit }: QuoteRequestFormProps) {
  return (
    <>
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 sm:text-sm">
          Call for a free Quote
        </p>
        <a
          href={`tel:${PHONE.replace(/\D/g, '')}`}
          className="mt-2 inline-block text-2xl font-bold text-inferno-500 transition hover:text-inferno-600 sm:text-3xl"
        >
          {PHONE}
        </a>
        <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-navy-900 sm:text-sm">
          Or Send a Message
        </p>
      </div>

      <form onSubmit={onSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <FieldLabel htmlFor={`${idPrefix}-type`} required>
              Type
            </FieldLabel>
            <select
              id={`${idPrefix}-type`}
              name="type"
              required
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select type
              </option>
              {QUOTE_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-product-interest`}>Product interested in?</FieldLabel>
            <select
              id={`${idPrefix}-product-interest`}
              name="productInterest"
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select product
              </option>
              {QUOTE_PRODUCT_INTEREST_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-installation-type`}>Installation Type</FieldLabel>
            <select
              id={`${idPrefix}-installation-type`}
              name="installationType"
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select installation type
              </option>
              {QUOTE_INSTALLATION_TYPE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-zip-code`} required>
              Zip Code
            </FieldLabel>
            <input
              id={`${idPrefix}-zip-code`}
              name="zipCode"
              type="text"
              required
              placeholder="Zip Code"
              className={inputClassName}
            />
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-name`} required>
              Name
            </FieldLabel>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              required
              placeholder="Name"
              className={inputClassName}
            />
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-email`}>Email</FieldLabel>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              placeholder="Email"
              className={inputClassName}
            />
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-phone`} required>
              Phone
            </FieldLabel>
            <input
              id={`${idPrefix}-phone`}
              name="phone"
              type="tel"
              required
              placeholder="Phone"
              className={inputClassName}
            />
          </div>

          <div>
            <FieldLabel htmlFor={`${idPrefix}-referral-source`} required>
              How Did you hear about us
            </FieldLabel>
            <select
              id={`${idPrefix}-referral-source`}
              name="referralSource"
              required
              defaultValue=""
              className={selectClassName}
            >
              <option value="" disabled>
                Select an option
              </option>
              {QUOTE_REFERRAL_SOURCE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <FieldLabel htmlFor={`${idPrefix}-message`}>Message</FieldLabel>
            <textarea
              id={`${idPrefix}-message`}
              name="message"
              rows={4}
              placeholder="Message"
              className={`${inputClassName} resize-y`}
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-6 md:flex-row md:items-center md:justify-between">
          <Link
            to="/privacy"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Privacy Policy
          </Link>

          <div className="flex w-full flex-col items-stretch gap-4 md:w-auto md:flex-row md:items-center md:gap-6">
            <div className="flex items-center gap-3 rounded border border-gray-300 bg-[#f9f9f9] px-3 py-2.5">
              <div className="h-6 w-6 shrink-0 rounded border border-gray-400 bg-white" />
              <span className="text-xs text-gray-600">I&apos;m not a robot</span>
              <div className="ml-2 flex flex-col items-center">
                <div className="h-8 w-8 rounded bg-gray-200" aria-hidden />
                <span className="mt-0.5 text-[10px] text-gray-400 sm:text-xs">reCAPTCHA</span>
              </div>
            </div>

            <button
              type="submit"
              className="shrink-0 rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
            >
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </>
  )
}