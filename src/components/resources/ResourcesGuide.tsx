import type { ReactNode } from 'react'
import { ChevronDown, Home, BookOpen } from 'lucide-react'

type GuideAccordionItemProps = {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

export function GuideAccordionItem({
  title,
  isOpen,
  onToggle,
  children,
}: GuideAccordionItemProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full min-h-11 items-center justify-between gap-4 bg-navy-900 px-5 py-4 text-left transition hover:bg-navy-800"
      >
        <span className="min-w-0 flex-1 text-sm font-semibold text-white sm:text-base">
          {title}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-white transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen ? <div className="bg-[#e6eef5]">{children}</div> : null}
    </div>
  )
}

type GuideArticleProps = {
  title: string
  intro: string
  children: ReactNode
  footer?: string
  footerVariant?: 'blue' | 'navy'
  hideHeader?: boolean
}

export function GuideArticle({
  title,
  intro,
  children,
  footer,
  footerVariant = 'blue',
  hideHeader = false,
}: GuideArticleProps) {
  return (
    <article className={hideHeader ? '' : 'mb-10 overflow-hidden rounded-t-2xl shadow-md last:mb-0'}>
      {hideHeader ? null : (
        <div className="flex items-start gap-3 rounded-t-2xl bg-navy-900 px-5 py-4 sm:items-center sm:px-6">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-inferno-500 text-white">
            <Home className="h-4 w-4" strokeWidth={2.5} />
          </span>
          <h2 className="min-w-0 flex-1 text-sm font-bold uppercase leading-snug text-white sm:text-lg">
            {title}
          </h2>
        </div>
      )}

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
    <section className="bg-navy-900 py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
          <BookOpen className="h-4 w-4" />
          <span>Resources</span>
        </div>
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Resources</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
          Expert guides to help you maintain your shutters and protect your home against wildfires — from
          our team to yours.
        </p>
      </div>
    </section>
  )
}