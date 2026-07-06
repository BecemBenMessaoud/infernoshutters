import type { ReactNode } from 'react'
import { Home } from 'lucide-react'

type GuideArticleProps = {
  title: string
  intro: string
  children: ReactNode
  footer?: string
  footerVariant?: 'blue' | 'navy'
}

export function GuideArticle({
  title,
  intro,
  children,
  footer,
  footerVariant = 'blue',
}: GuideArticleProps) {
  return (
    <article className="mb-10 overflow-hidden rounded-t-2xl shadow-md last:mb-0">
      <div className="flex items-start gap-3 rounded-t-2xl bg-navy-900 px-5 py-4 sm:items-center sm:px-6">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-inferno-500 text-white">
          <Home className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <h2 className="min-w-0 flex-1 text-sm font-bold uppercase leading-snug text-white sm:text-lg">
          {title}
        </h2>
      </div>

      <p className="whitespace-pre-line bg-[#eef6fc] px-5 py-4 text-sm leading-relaxed text-navy-900 sm:px-6 sm:text-base">
        {intro}
      </p>

      {children}

      {footer ? (
        <p
          className={`whitespace-pre-line px-5 py-4 text-sm leading-relaxed sm:px-6 sm:text-base ${
            footerVariant === 'navy'
              ? 'bg-navy-900 font-medium text-white'
              : 'bg-[#eef6fc] text-navy-900'
          }`}
        >
          {footer}
        </p>
      ) : null}
    </article>
  )
}

type GuideSectionProps = {
  title: string
  tone?: 'orange' | 'navy'
  background?: 'blue' | 'orange' | 'white'
  children: ReactNode
}

export function GuideSection({
  title,
  tone = 'navy',
  background = 'blue',
  children,
}: GuideSectionProps) {
  const bgClass =
    background === 'orange'
      ? 'bg-[#fff1e6]'
      : background === 'white'
        ? 'bg-white'
        : 'bg-[#eef6fc]'

  return (
    <div>
      <h3
        className={`px-5 py-3 text-sm font-bold uppercase tracking-wide text-white sm:px-6 ${
          tone === 'orange' ? 'bg-inferno-500' : 'bg-navy-900'
        }`}
      >
        {title}
      </h3>
      <div className={`${bgClass} px-5 py-4 sm:px-6`}>{children}</div>
    </div>
  )
}

type GuideListProps = {
  items: string[]
  ordered?: boolean
}

export function GuideList({ items, ordered = false }: GuideListProps) {
  const className = 'list-outside space-y-2 pl-5 text-sm leading-relaxed text-navy-900 sm:text-base'
  if (ordered) {
    return (
      <ol className={`${className} list-decimal`}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    )
  }
  return (
    <ul className={`${className} list-disc`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

type GuideParagraphProps = {
  children: string
}

export function GuideParagraph({ children }: GuideParagraphProps) {
  return (
    <p className="whitespace-pre-line text-sm leading-relaxed text-navy-900 sm:text-base">
      {children}
    </p>
  )
}

type NumberedHighlightProps = {
  number: number
  title: string
  description: string
  highlight?: boolean
}

export function NumberedHighlight({
  number,
  title,
  description,
  highlight = false,
}: NumberedHighlightProps) {
  return (
    <div
      className={`flex gap-4 rounded-lg p-4 ${
        highlight ? 'bg-[#fff1e6]' : 'bg-[#eef6fc]'
      }`}
    >
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
          highlight ? 'bg-inferno-500' : 'bg-navy-900'
        }`}
      >
        {number}
      </span>
      <div>
        <p className="font-bold text-navy-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-gray-700 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export function ResourcesHero() {
  return (
    <section className="w-full leading-none">
      <img
        src="/images/resources-hero.png"
        alt="Resources — Blog & Guides. Expert guides to help you maintain your shutters and protect your home against wildfires — from our team to yours."
        width={1024}
        height={304}
        fetchPriority="high"
        decoding="async"
        className="block aspect-[1024/304] h-auto w-full object-cover object-center"
      />
    </section>
  )
}