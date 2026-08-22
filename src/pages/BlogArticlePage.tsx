import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Newspaper } from 'lucide-react'
import { getBlogArticle } from '../data/blog'
import { BlogContentBlocks } from '../components/blog/BlogContentBlocks'
import { HeroAccentBar } from '../components/ui/HeroAccentBar'
import { PHONE } from '../data/site'

export function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getBlogArticle(slug) : undefined
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())

  if (!article) {
    return <Navigate to="/blog" replace />
  }

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
          <Link
            to="/blog"
            className="mb-4 inline-flex text-sm font-semibold text-inferno-400 hover:text-inferno-300"
          >
            ← Back to all articles
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Newspaper className="h-4 w-4" aria-hidden />
            <span>{article.category}</span>
          </div>
          <h1 className="text-balance text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-400 sm:text-sm">
            <span>{article.readTime}</span>
            <span className="h-1 w-1 rounded-full bg-inferno-500" aria-hidden />
            <span>{article.categoryDetail}</span>
            <span className="h-1 w-1 rounded-full bg-inferno-500" aria-hidden />
            <span>
              Published{' '}
              {new Date(article.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
        </div>
        <HeroAccentBar />
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article>
            <div>
              <BlogContentBlocks blocks={article.intro} />
            </div>

            <div className="mt-10 space-y-3">
              {article.sections.map((section) => {
                const isOpen = openSections.has(section.id)

                return (
                  <section key={section.id}>
                    <h2 className="m-0 text-base font-semibold sm:text-lg">
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
                          aria-hidden
                        />
                      </button>
                    </h2>

                    {isOpen ? (
                      <div className="bg-[#e6eef5] px-5 py-5">
                        <BlogContentBlocks blocks={section.blocks} />
                      </div>
                    ) : null}
                  </section>
                )
              })}
            </div>

            <aside className="mt-12 rounded-xl bg-navy-900 p-6 text-white">
              <h2 className="text-lg font-bold">See what it can do for your home</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
                Inferno-Roll makes custom fire, storm, and security shutters, designed and
                manufactured in California and professionally installed. Book a free home assessment
                and we&apos;ll show you exactly what your windows and doors need.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <Link
                  to="/quote"
                  className="inline-flex rounded-lg bg-inferno-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-inferno-600"
                >
                  Request a Free Estimate
                </Link>
                <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="font-bold text-inferno-400">
                  {PHONE}
                </a>
              </div>
            </aside>

            <aside className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-lg font-bold text-navy-900">Explore Related Resources</h2>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <Link
                    to="/products/fire-resistant"
                    className="text-inferno-500 underline hover:text-inferno-600"
                  >
                    Fire-Resistant Roll Shutters
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-inferno-500 underline hover:text-inferno-600">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-inferno-500 underline hover:text-inferno-600"
                  >
                    Wildfire Protection Guides
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-inferno-500 underline hover:text-inferno-600">
                    Request a Free Quote
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-inferno-500 underline hover:text-inferno-600">
                    All Blog Articles
                  </Link>
                </li>
              </ul>
            </aside>
          </article>
        </div>
      </section>
    </main>
  )
}
