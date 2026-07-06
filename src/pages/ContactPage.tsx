import { useState } from 'react'
import { Headphones, Minus, Plus } from 'lucide-react'
import { CONTACT_FAQ_ITEMS, CONTACT_FAQ_PREVIEW_COUNT } from '../data/site'

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showAllFaqs, setShowAllFaqs] = useState(false)

  const visibleFaqs = showAllFaqs
    ? CONTACT_FAQ_ITEMS
    : CONTACT_FAQ_ITEMS.slice(0, CONTACT_FAQ_PREVIEW_COUNT)

  const handleToggleFaqList = () => {
    setOpenFaq(null)
    setShowAllFaqs((current) => !current)
  }

  return (
    <main>
      <section className="bg-navy-900 pb-16 pt-12 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
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

          <form
            className="mt-10 rounded-2xl bg-white p-6 text-left shadow-xl sm:p-8"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="inferno shutters"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="infernoshutters@gmail.com"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                />
              </div>

              <div>
                <label htmlFor="contact-zip" className="mb-2 block text-sm font-medium text-gray-700">
                  ZIP Code
                </label>
                <input
                  id="contact-zip"
                  type="text"
                  placeholder="ZIP Code"
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-700">
                  How we can help?
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-inferno-500 py-3.5 text-sm font-bold text-white transition hover:bg-inferno-600"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-700">
              <span className="font-medium">FAQ</span>
            </div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Remove Friction Pre-Quote.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {visibleFaqs.map((item) => {
              const itemIndex = CONTACT_FAQ_ITEMS.findIndex(
                (faq) => faq.question === item.question,
              )
              const isOpen = openFaq === itemIndex

              return (
                <div key={item.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : itemIndex)}
                    className="flex w-full min-h-11 items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="min-w-0 flex-1 pr-2 text-sm font-medium text-navy-900 sm:text-base">
                      {item.question}
                    </span>
                    {isOpen ? (
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center">
                        <Minus className="h-4 w-4 text-gray-500" />
                      </span>
                    ) : (
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center">
                        <Plus className="h-4 w-4 text-gray-500" />
                      </span>
                    )}
                  </button>
                  {isOpen ? (
                    <p className="whitespace-pre-line pb-5 text-sm leading-relaxed text-gray-600">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={handleToggleFaqList}
              className="rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
            >
              {showAllFaqs ? 'See less' : 'See More FAQ'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}