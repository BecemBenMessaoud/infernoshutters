import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ServiceCallModalVariant = 'service' | 'commercial'

type RepairServiceCallModalProps = {
  isOpen: boolean
  onClose: () => void
  variant?: ServiceCallModalVariant
}

type FormState = {
  fullName: string
  address: string
  email: string
  phoneNumber: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const INITIAL_FORM: FormState = {
  fullName: '',
  address: '',
  email: '',
  phoneNumber: '',
}

const VARIANT_COPY = {
  service: {
    title: 'Request Service Call',
    description: 'Share your details and our repair team will contact you to schedule service.',
    success: 'Thank you. Your service call request has been received.',
    idPrefix: 'repair',
  },
  commercial: {
    title: 'Talk to Commercial Team',
    description:
      'Share your details and our commercial team will contact you to discuss your project.',
    success: 'Thank you. Your commercial team request has been received.',
    idPrefix: 'commercial',
  },
} as const

export function RepairServiceCallModal({
  isOpen,
  onClose,
  variant = 'service',
}: RepairServiceCallModalProps) {
  const copy = VARIANT_COPY[variant]
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

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

    if (!form.phoneNumber.trim()) {
      nextErrors.phoneNumber = 'Phone number is required.'
    }

    return nextErrors
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
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
        aria-labelledby={`${copy.idPrefix}-service-call-title`}
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
          id={`${copy.idPrefix}-service-call-title`}
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
              htmlFor={`${copy.idPrefix}-phone`}
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              id={`${copy.idPrefix}-phone`}
              type="tel"
              value={form.phoneNumber}
              onChange={(event) => updateField('phoneNumber', event.target.value)}
              className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-1 ${
                errors.phoneNumber
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-200 focus:border-inferno-500 focus:ring-inferno-500'
              }`}
            />
            {errors.phoneNumber ? (
              <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
            ) : null}
          </div>

          {submitted ? (
            <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800">{copy.success}</p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-md bg-inferno-500 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}