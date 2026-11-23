import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EL_NINO_FAQ } from '../data/el-nino'

const STEPS = [
  {
    title: 'Assess your openings',
    body: 'Review window and door dimensions, existing protection, and mounting conditions with Inferno-Roll to select a shutter configuration suited to your installation.',
  },
  {
    title: 'Check shutter operation',
    body: 'Arrange an inspection for wear, corrosion, and alignment. Review your system’s operating instructions and any manual operation procedure before you need to close your shutters.',
  },
  {
    title: 'Plan your installation',
    body: 'Request measurements and a free quote for your property. Discuss fabrication, installation scheduling, and available financing options with the Inferno-Roll team.',
  },
] as const

export function ElNinoStormPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  return (
    <main>
      <section className="bg-navy-900 py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Prepare your home for El Niño storm conditions
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Plan protection for your windows and doors with Inferno-Roll roll shutters. Include
            opening measurements, mounting conditions, and shutter operation in your storm
            preparedness plan.
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Financing options are available. Ask about current terms and eligibility when you
            request your free quote.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="inline-flex rounded-lg bg-inferno-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-inferno-600"
            >
              Request a Free Quote
            </Link>
            <Link
              to="/products/hurricane-storm"
              className="inline-flex rounded-lg border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              View hurricane and storm shutters
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {STEPS.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm font-semibold text-inferno-500">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-bold text-navy-900">{step.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-700 sm:text-base">{step.body}</p>
              {index === 1 ? (
                <Link
                  to="/service"
                  className="mt-4 inline-flex text-sm font-semibold text-inferno-600 underline hover:text-inferno-700"
                >
                  Schedule a shutter inspection
                </Link>
              ) : null}
              {index === 2 ? (
                <Link
                  to="/quote"
                  className="mt-4 inline-flex text-sm font-semibold text-inferno-600 underline hover:text-inferno-700"
                >
                  Request a free quote
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              <Link to="/products/hurricane-storm" className="hover:text-inferno-400">
                Roll shutter protection for your windows.
              </Link>
            </h2>
            <p className="mt-4 text-base font-semibold text-gray-200 sm:text-lg">
              <Link
                to="/blog/when-the-pacific-comes-for-your-home"
                className="underline hover:text-inferno-400"
              >
                A shutter system fitted to your property.
              </Link>
            </p>
          </div>
          <img
            src="/images/products/overview-hurricane-storm.png"
            alt="Inferno-Roll hurricane and storm roll shutter protecting a home's windows and doors"
            width={640}
            height={480}
            loading="lazy"
            decoding="async"
            className="h-64 w-full rounded-xl object-cover sm:h-80"
          />
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Your storm shutter questions, answered
          </h2>
          <div className="mt-8 space-y-3">
            {EL_NINO_FAQ.map((item, index) => {
              const isOpen = openItems.has(index)

              return (
                <article key={item.question}>
                  <h3 className="m-0 text-base font-semibold sm:text-lg">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      className="flex w-full min-h-11 items-center justify-between gap-4 bg-navy-900 px-5 py-4 text-left transition hover:bg-navy-800"
                    >
                      <span className="min-w-0 flex-1 text-sm font-semibold text-white sm:text-base">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-white transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                  </h3>
                  <div hidden={!isOpen} className="bg-[#e6eef5] px-5 py-4">
                    <p className="text-sm leading-relaxed text-navy-900 sm:text-base">{item.answer}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Request a free quote</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base">
            Tell Inferno-Roll about the windows and doors you want to protect and your installation
            plans. Financing options are available. Ask our team about current terms and eligibility.
          </p>
          <Link
            to="/quote"
            className="mt-6 inline-flex rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
          >
            Request a Free Quote
          </Link>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-gray-400 sm:text-sm">
            Storm performance depends on the selected shutter system, documented ratings, and
            installation. Roll shutters do not replace emergency instructions or evacuation orders.
            Follow local weather alerts and official guidance.
          </p>
        </div>
      </section>
    </main>
  )
}
