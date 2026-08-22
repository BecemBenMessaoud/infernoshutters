import { Link } from 'react-router-dom'
import type { BlogArticle, BlogComingSoonCard } from '../../data/blog'
import { PHONE } from '../../data/site'

const CARD_ART_CLASSES = {
  ember: 'bg-gradient-to-br from-[#e0400f] to-[#ff6a1a]',
  navy: 'bg-gradient-to-br from-navy-900 to-[#1f4a7a]',
  slate: 'bg-gradient-to-br from-[#243b57] to-gray-500',
} as const

type BlogCardProps = {
  article: BlogArticle
}

export function BlogCard({ article }: BlogCardProps) {
  const title = article.cardTitle ?? article.title
  const excerpt = article.cardExcerpt ?? article.excerpt

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-[0_4px_16px_rgba(11,29,61,0.09)] transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(11,29,61,0.13)]">
      <div
        className={`relative h-[118px] ${CARD_ART_CLASSES[article.cardAccent]}`}
        aria-hidden
      >
        <span className="absolute bottom-2 right-3.5 text-[2.5rem] leading-none opacity-90">
          {article.cardGlyph}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
        <span className="inline-flex w-fit rounded-full bg-[#eef2f7] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-navy-900">
          {article.category}
        </span>

        <h2 className="mt-3 text-[1.16rem] font-bold leading-snug text-navy-900">
          <Link to={`/blog/${article.slug}`} className="hover:text-inferno-500">
            {title}
          </Link>
        </h2>

        <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-gray-500">{excerpt}</p>

        <Link
          to={`/blog/${article.slug}`}
          className="mt-4 inline-flex text-[0.9rem] font-bold text-inferno-600 hover:text-inferno-700"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}

type BlogComingSoonCardProps = {
  card: BlogComingSoonCard
}

export function BlogComingSoonCard({ card }: BlogComingSoonCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[15px] border border-gray-200 bg-white shadow-[0_4px_16px_rgba(11,29,61,0.09)]">
      <div
        className={`relative h-[118px] ${CARD_ART_CLASSES[card.cardAccent]}`}
        aria-hidden
      >
        <span className="absolute bottom-2 right-3.5 text-[2.5rem] leading-none opacity-90">
          {card.cardGlyph}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-[22px] pb-6 pt-5">
        <span className="inline-flex w-fit rounded-full bg-[#eef2f7] px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-navy-900">
          {card.category}
        </span>

        <h2 className="mt-3 text-[1.16rem] font-bold leading-snug text-navy-900">{card.title}</h2>

        <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-gray-500">{card.excerpt}</p>

        <p className="mt-4 text-[0.82rem] font-bold uppercase tracking-[0.08em] text-gray-500">
          Guides coming soon ·{' '}
          <a
            href={`tel:${PHONE.replace(/\D/g, '')}`}
            className="normal-case tracking-normal text-inferno-600 hover:text-inferno-700"
          >
            ask us now →
          </a>
        </p>
      </div>
    </article>
  )
}
