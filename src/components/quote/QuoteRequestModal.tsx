import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { QuoteRequestForm } from './QuoteRequestForm'
import { submitProtectedForm } from '../../lib/submitForm'

type QuoteRequestModalProps = {
  isOpen: boolean
  onClose: () => void
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const navigate = useNavigate()
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

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false)
      setSubmitError(null)
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  const handleSubmit = async (
    payload: Record<string, string>,
    recaptchaToken: string,
  ) => {
    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      await submitProtectedForm('quote', payload, recaptchaToken)
      onClose()
      navigate('/quote/received')
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : 'Something went wrong. Please try again or call us.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 px-4 py-6 sm:items-center sm:px-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="relative my-auto w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 id="quote-modal-title" className="sr-only">
          Request a Professional Quote
        </h2>

        <QuoteRequestForm
          idPrefix="quote-modal"
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          submitError={submitError}
        />
      </div>
    </div>,
    document.body,
  )
}
