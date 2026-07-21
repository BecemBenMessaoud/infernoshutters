import { useState } from 'react'
import { ChevronDown, Newspaper } from 'lucide-react'
import { BLOG_ARTICLE } from '../data/blog'
import { BlogContentBlocks } from '../components/blog/BlogContentBlocks'
import { HeroAccentBar } from '../components/ui/HeroAccentBar'

export function BlogPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  const toggleSection = (id: string) => {
    setOpenSections((current) => {
      const next = new Set(current)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  return (
    <main>
      <section className="bg-navy-900 pt-12 lg:pt-16">
        <div className="mx-auto max-w-4xl px-4 pb-8 text-center sm:px-6 sm:pb-10 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Newspaper className="h-4 w-4" />
            <span>Blog</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Insights on wildfire protection, home security, and rolling shutter solutions.
          </p>
        </div>
        <HeroAccentBar />
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article>
            <h2 className="text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
              {BLOG_ARTICLE.title}
            </h2>

            <div className="mt-6">
              <BlogContentBlocks blocks={BLOG_ARTICLE.intro} />
            </div>

            <div className="mt-10 space-y-3">
              {BLOG_ARTICLE.sections.map((section) => {
                const isOpen = openSections.has(section.id)

                return (
                  <div key={section.id}>
                    <button
                      type="button"
                      onClick={() => toggleSection(section.id)}
                      aria-expanded={isOpen}
                      className="flex w-full min-h-11 items-center justify-between gap-4 bg-navy-900 px-5 py-4 text-left transition hover:bg-navy-800"
                    >
                      <span className="min-w-0 flex-1 text-sm font-semibold text-white sm:text-base">
                        {section.title}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-white transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen ? (
                      <div className="bg-[#e6eef5] px-5 py-5">
                        <BlogContentBlocks blocks={section.blocks} />
                      </div>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}