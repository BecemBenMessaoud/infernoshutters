import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { FaqHero } from '../components/faq/FaqHero'
import { CONTACT_FAQ_ITEMS } from '../data/site'

export function FaqPage() {
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
      <FaqHero />

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {CONTACT_FAQ_ITEMS.map((item, index) => {
              const isOpen = openItems.has(index)

              return (
                <div key={item.question}>
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
                    />
                  </button>

                  {isOpen ? (
                    <div className="bg-[#e6eef5] px-5 py-4">
                      <p className="whitespace-pre-line text-sm leading-relaxed text-navy-900 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-inferno-500 py-14 lg:py-16">
        <div
          className="absolute bottom-0 left-0 h-0 w-0 border-b-[56px] border-r-[72px] border-b-transparent border-r-navy-900"
          aria-hidden
        />
        <div className="relative z-10 flex justify-center px-4">
          <Link
            to="/quote"
            className="w-full max-w-xs rounded border-2 border-white px-10 py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-inferno-500 sm:w-auto sm:text-base"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}