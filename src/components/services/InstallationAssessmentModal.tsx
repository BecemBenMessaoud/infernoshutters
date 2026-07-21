import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { X } from 'lucide-react'
import {
  FORMSPREE_CUSTOM_ASSESSMENT_ENDPOINT,
  FORMSPREE_SITE_ASSESSMENT_ENDPOINT,
} from '../../data/quote'

const INSTALLATION_TYPE_OPTIONS = [
  'Self Install',
  'Have Own Contractor',
  'Need a Dealer',
] as const

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type AssessmentModalVariant = 'site' | 'custom'

type InstallationAssessmentModalProps = {
  isOpen: boolean
  onClose: () => void
  variant?: AssessmentModalVariant
}

const VARIANT_COPY = {
  site: {
    title: 'Site Assessment',
    description:
      'Tell us about your project and our team will follow up to schedule your assessment.',
    success: 'Thank you. Your installation assessment request has been received.',
    idPrefix: 'site-assessment',
    endpoint: FORMSPREE_SITE_ASSESSMENT_ENDPOINT,
  },
  custom: {
    title: 'Request Custom Assessment',
    description:
      'Tell us about your custom fabrication or retrofit project and our team will follow up.',
    success: 'Thank you. Your custom assessment request has been received.',
    idPrefix: 'custom-assessment',
    endpoint: FORMSPREE_CUSTOM_ASSESSMENT_ENDPOINT,
  },
} as const

type FormState = {
  fullName: string
  address: string
  email: string
  installationType: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const INITIAL_FORM: FormState = {
  fullName: '',
  address: '',
  email: '',
  installationType: '',
}

export function InstallationAssessmentModal({
  isOpen,
  onClose,
  variant = 'site',
}: InstallationAssessmentModalProps) {
  const copy = VARIANT_COPY[variant]
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleClose = () => {
    setForm(INITIAL_FORM)
    setErrors({})
    setSubmitted(false)
    setIsSubmitting(false)
    setSubmitError(null)
    onClose()
  }

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}

    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Full name is required.'
    }

    if (!form.address.trim()) {
      nextErrors.address = 'Address is required.'
    }

    if (!form.email.trim()) {
      nextErrors.email = 'Email is required.'
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }

    if (!form.installationType) {
      nextErrors.installationType = 'Please select an installation type.'
    }

    return nextErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    const nextErrors = validate()
    setErrors(nextErrors)
    setSubmitError(null)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(copy.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          address: form.address.trim(),
          email: form.email.trim(),
          installationType: form.installationType,
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setForm(INITIAL_FORM)
      setSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or call us.')
      setSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-6 sm:items-center sm:px-6"
      onClick={handleClose}
      role="presentation"
    >
      <div
        className="relative my-auto w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${copy.idPrefix}-title`}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h2
          id={`${copy.idPrefix}-title`}
          className="pr-8 text-xl font-bold text-navy-900 sm:text-2xl"
        >
          {copy.title}
        </h2>
        <p className="mt-2 text-sm text-gray-600">{copy.description}</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor={`${copy.idPrefix}-full-name`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              id={`${copy.idPrefix}-full-name`}
              type="text"
              value={form.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-1 ${
                errors.fullName
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-inferno-500 focus:ring-inferno-500'
              }`}
            />
            {errors.fullName ? (
              <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${copy.idPrefix}-address`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              id={`${copy.idPrefix}-address`}
              type="text"
              value={form.address}
              onChange={(event) => updateField('address', event.target.value)}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-1 ${
                errors.address
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-inferno-500 focus:ring-inferno-500'
              }`}
            />
            {errors.address ? (
              <p className="mt-1 text-xs text-red-600">{errors.address}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${copy.idPrefix}-email`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id={`${copy.idPrefix}-email`}
              type="email"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-1 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-inferno-500 focus:ring-inferno-500'
              }`}
            />
            {errors.email ? (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor={`${copy.idPrefix}-installation-type`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Installation Type
            </label>
            <select
              id={`${copy.idPrefix}-installation-type`}
              value={form.installationType}
              onChange={(event) => updateField('installationType', event.target.value)}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-1 ${
                errors.installationType
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-inferno-500 focus:ring-inferno-500'
              }`}
            >
              <option value="" disabled>
                Select installation type
              </option>
              {INSTALLATION_TYPE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.installationType ? (
              <p className="mt-1 text-xs text-red-600">{errors.installationType}</p>
            ) : null}
          </div>

          {submitError ? (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
              {submitError}
            </p>
          ) : null}

          {submitted ? (
            <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">{copy.success}</p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-md bg-inferno-500 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Submitting…' : 'Submit Request'}
          </button>
        </form>
      </div>
    </div>
  )
}
