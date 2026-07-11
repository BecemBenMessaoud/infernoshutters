import { Headphones } from 'lucide-react'
import { CustomFabricationSection } from '../components/services/CustomFabricationSection'

export function ContactPage() {
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

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CustomFabricationSection embedded />
        </div>
      </section>
    </main>
  )
}
