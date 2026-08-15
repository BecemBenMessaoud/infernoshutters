import { useState } from 'react'

import { Link } from 'react-router-dom'

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

            <Newspaper className="h-4 w-4" aria-hidden />

            <span>Inferno-Roll Blog</span>

          </div>

          <h1 className="text-balance text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">

            {BLOG_ARTICLE.title}

          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">

            Expert insights on wildfire home hardening, defensible space limits, and why roll

            shutters are essential for protecting windows and doors in fire-prone areas.

          </p>

          <p className="mt-3 text-xs text-gray-400">

            Published {new Date(BLOG_ARTICLE.publishedDate).toLocaleDateString('en-US', {

              year: 'numeric',

              month: 'long',

              day: 'numeric',

            })}

          </p>

        </div>

        <HeroAccentBar />

      </section>



      <section className="bg-white py-12 lg:py-16">

        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          <article>

            <div>

              <BlogContentBlocks blocks={BLOG_ARTICLE.intro} />

            </div>



            <div className="mt-10 space-y-3">

              {BLOG_ARTICLE.sections.map((section) => {

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



            <aside className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6">

              <h2 className="text-lg font-bold text-navy-900">Explore Related Resources</h2>

              <ul className="mt-4 space-y-2 text-sm">

                <li>

                  <Link to="/products/fire-resistant" className="text-inferno-500 underline hover:text-inferno-600">

                    Fire-Resistant Roll Shutters

                  </Link>

                </li>

                <li>

                  <Link to="/faq" className="text-inferno-500 underline hover:text-inferno-600">

                    Frequently Asked Questions

                  </Link>

                </li>

                <li>

                  <Link to="/resources" className="text-inferno-500 underline hover:text-inferno-600">

                    Wildfire Protection Guides

                  </Link>

                </li>

                <li>

                  <Link to="/quote" className="text-inferno-500 underline hover:text-inferno-600">

                    Request a Free Quote

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

