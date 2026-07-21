import { useState } from 'react'
import type { FormEvent } from 'react'
import { Headphones } from 'lucide-react'
import { CustomFabricationSection } from '../components/services/CustomFabricationSection'
import { FORMSPREE_CONTACT_ENDPOINT } from '../data/quote'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500'

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setIsSubmitted(true)
    } catch {
      setSubmitError('Something went wrong. Please try again or call us.')
      setIsSubmitted(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <section className="bg-navy-900 pb-16 pt-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Headphones className="h-4 w-4" />
            <span>Contact Us</span>
          </div>

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Make it easy to reach Inferno
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Have questions about wildfire protection, installation, or pricing?
            Send us a message and our team will get back to you quickly.
          </p>

          {isSubmitted ? (
            <div className="mt-10 rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8">
              <h2 className="text-2xl font-bold text-navy-900">Message Received</h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
                Thank you! Our team will get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-8 rounded-lg bg-inferno-500 px-10 py-3.5 text-sm font-bold text-white transition hover:bg-inferno-600"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              className="mt-10 rounded-2xl bg-white p-6 text-left shadow-xl sm:p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="inferno shutters"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="infernoshutters@gmail.com"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="contact-zip" className="mb-2 block text-sm font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    id="contact-zip"
                    name="zipCode"
                    type="text"
                    placeholder="ZIP Code"
                    className={inputClassName}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-700">
                    How we can help?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project..."
                    className={`${inputClassName} resize-none`}
                  />
                </div>
              </div>

              {submitError ? (
                <p className="mt-4 text-sm font-medium text-red-600" role="alert">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 w-full rounded-lg bg-inferno-500 py-3.5 text-sm font-bold text-white transition hover:bg-inferno-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CustomFabricationSection embedded />
        </div>
      </section>
    </main>
  )
}
