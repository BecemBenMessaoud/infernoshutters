import { Link } from 'react-router-dom'
import { Newspaper } from 'lucide-react'
import { getBlogLatestGridArticles, getFeaturedBlogArticle, BLOG_COMING_SOON_CARD } from '../data/blog'
import { BlogCard, BlogComingSoonCard } from '../components/blog/BlogCard'
import { BlogSectionLabel } from '../components/blog/BlogSectionLabel'
import { FireTestProofSection } from '../components/blog/FireTestProofSection'
import { FeaturedArticleArt } from '../components/blog/FeaturedArticleArt'
import { HeroAccentBar } from '../components/ui/HeroAccentBar'
import { PHONE } from '../data/site'

export function BlogIndexPage() {
  const featured = getFeaturedBlogArticle()
  const latestArticles = getBlogLatestGridArticles()

  return (
    <main>
      <section className="bg-navy-900 pt-12 lg:pt-16">
        <div className="mx-auto max-w-4xl px-4 pb-8 text-center sm:px-6 sm:pb-10 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Newspaper className="h-4 w-4" aria-hidden />
            <span>Inferno-Roll Blog</span>
          </div>
          <h1 className="text-balance text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Home Defense Meets <span className="text-inferno-400">Wildfire Science</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Straight talk on protecting your home from embers, storms, and break-ins, from the
            team that fire-tests its own shutters instead of just talking about it.
          </p>
        </div>
        <HeroAccentBar />
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <BlogSectionLabel>Featured</BlogSectionLabel>

          <article className="mb-10 overflow-hidden rounded-[18px] border border-gray-200 bg-white shadow-md lg:grid lg:grid-cols-[1.05fr_1fr]">
            <FeaturedArticleArt />
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <span className="inline-flex w-fit rounded-full bg-inferno-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-inferno-600">
                {featured.category}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
                <Link to={`/blog/${featured.slug}`} className="hover:text-inferno-500">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                {featured.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span>{featured.readTime}</span>
                <span className="h-1 w-1 rounded-full bg-inferno-500" aria-hidden />
                <span>{featured.categoryDetail}</span>
              </div>
              <Link
                to={`/blog/${featured.slug}`}
                className="mt-6 inline-flex w-fit rounded-lg bg-inferno-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-inferno-600"
              >
                Read the guide
              </Link>
            </div>
          </article>

          <FireTestProofSection />

          <BlogSectionLabel>Latest Articles</BlogSectionLabel>
          <div className="grid gap-[26px] sm:grid-cols-2 lg:grid-cols-3">
            {latestArticles.map((article) => (
              <BlogCard key={article.slug} article={article} />
            ))}
            <BlogComingSoonCard card={BLOG_COMING_SOON_CARD} />
          </div>

          <aside className="mt-12 rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Protect the most vulnerable part of your home
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
              Custom fire, storm, and security shutters, designed and manufactured in California and
              professionally installed for a perfect fit.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-inferno-400">
                  1. Free Consultation
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  A personalized assessment of your home&apos;s windows and doors.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-inferno-400">
                  2. Professional Install
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  A seamless fit and finish by our own crew.
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-inferno-400">
                  3. Peace of Mind
                </p>
                <p className="mt-2 text-sm text-gray-200">
                  Fire, storm, and security protection that&apos;s there when you need it.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                to="/quote"
                className="inline-flex rounded-lg bg-inferno-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-inferno-600"
              >
                Request a Free Estimate
              </Link>
              <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="text-lg font-bold text-white">
                {PHONE}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
