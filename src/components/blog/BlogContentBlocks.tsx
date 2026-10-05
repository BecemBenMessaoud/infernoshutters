import { Link } from 'react-router-dom'
import {
  Anchor,
  Flame,
  Link2,
  Lock,
  MapPin,
  Shield,
  Snowflake,
  TreePine,
  VolumeX,
  Waves,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import type { BlogBlock, BlogCardItem } from '../../data/blog'

const ICONS: Record<BlogCardItem['icon'], LucideIcon> = {
  shield: Shield,
  link: Link2,
  anchor: Anchor,
  lock: Lock,
  waves: Waves,
  flame: Flame,
  snowflake: Snowflake,
  wind: Wind,
  tree: TreePine,
  volume: VolumeX,
}

function ActionLink({
  href,
  className,
  children,
}: {
  href: string
  className: string
  children: string
}) {
  if (/^(https?:|tel:|mailto:)/i.test(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

export function BlogContentBlocks({
  blocks,
  variant = 'default',
}: {
  blocks: readonly BlogBlock[]
  variant?: 'default' | 'prose'
}) {
  const isProse = variant === 'prose'
  const bodyClass = isProse
    ? 'text-base leading-relaxed text-gray-600'
    : 'text-sm leading-relaxed text-navy-900 sm:text-base'

  return (
    <div className={isProse ? 'space-y-5' : 'space-y-4'}>
      {blocks.map((block, index) => {
        if (block.type === 'hero-banner') {
          const isWaves = block.theme === 'waves'
          return (
            <div
              key={`hero-banner-${index}`}
              className="overflow-hidden rounded-2xl bg-navy-900 text-center shadow-[0_8px_24px_rgba(0,26,61,0.18)]"
            >
              <div className="px-6 pt-10 sm:px-10 sm:pt-12">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-inferno-400">
                  {block.eyebrow}
                </p>
                <p className="mx-auto mt-3 max-w-xl text-xl font-semibold leading-snug text-white sm:text-2xl">
                  {block.headline}
                </p>
              </div>
              {isWaves ? (
                <svg
                  className="mt-8 block h-16 w-full"
                  viewBox="0 0 1200 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M0,50 C150,80 300,20 450,50 C600,80 750,20 900,50 C1050,80 1150,30 1200,50 L1200,100 L0,100 Z"
                    fill="rgba(255,255,255,0.08)"
                  />
                  <path
                    d="M0,65 C150,95 300,35 450,65 C600,95 750,35 900,65 C1050,95 1150,45 1200,65 L1200,100 L0,100 Z"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <path
                    d="M0,80 C150,100 300,50 450,80 C600,100 750,50 900,80 C1050,100 1150,60 1200,80 L1200,100 L0,100 Z"
                    fill="rgba(255,255,255,0.18)"
                  />
                </svg>
              ) : (
                <div className="mt-8 space-y-[6px] px-6 pb-8 sm:px-10" aria-hidden>
                  {[0.1, 0.13, 0.16, 0.19, 0.22].map((opacity) => (
                    <div
                      key={opacity}
                      className="h-1.5 w-full rounded-sm bg-white"
                      style={{ opacity }}
                    />
                  ))}
                </div>
              )}
            </div>
          )
        }

        if (block.type === 'case-study') {
          return (
            <div
              key={`case-study-${index}`}
              className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-8 text-white shadow-[0_8px_24px_rgba(0,26,61,0.25)] sm:px-8"
            >
              <div
                className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-inferno-500 to-inferno-400"
                aria-hidden
              />
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-inferno-400">
                {block.label}
              </p>
              <h3 className="mt-2 text-xl font-bold">{block.title}</h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-300">
                <MapPin className="h-4 w-4 shrink-0 text-inferno-400" aria-hidden />
                {block.location}
              </p>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-gray-200 sm:text-base">
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph.text}>
                    {paragraph.lead ? (
                      <>
                        <strong className="font-semibold text-white">{paragraph.lead}</strong>{' '}
                      </>
                    ) : null}
                    {paragraph.text}
                  </p>
                ))}
              </div>
            </div>
          )
        }

        if (block.type === 'stat') {
          return (
            <div
              key={`stat-${index}`}
              className="rounded-2xl bg-navy-900 px-6 py-8 text-center sm:px-8 sm:py-10"
            >
              <p className="text-4xl font-bold tracking-tight text-inferno-400 sm:text-5xl">
                {block.value}
              </p>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
                {block.label}
              </p>
            </div>
          )
        }

        if (block.type === 'card-grid') {
          return (
            <div
              key={`card-grid-${index}`}
              className="grid gap-3 sm:grid-cols-3"
            >
              {block.cards.map((card) => {
                const Icon = ICONS[card.icon]
                return (
                  <div
                    key={card.title}
                    className="rounded-xl border border-gray-200 bg-white p-5"
                  >
                    <Icon className="mb-3 h-6 w-6 text-[#6b90c4]" aria-hidden />
                    <h3 className="text-base font-bold text-navy-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
                  </div>
                )
              })}
            </div>
          )
        }

        if (block.type === 'feature-list') {
          return (
            <div
              key={`feature-list-${index}`}
              className="overflow-hidden rounded-xl border border-gray-200"
            >
              {block.items.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 border-b border-gray-200 bg-white px-5 py-4 last:border-b-0"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-inferno-500 text-xs font-bold text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'pull-quote') {
          return (
            <blockquote
              key={`pull-quote-${index}`}
              className="border-y-2 border-inferno-500 py-6 text-center text-xl font-semibold italic leading-snug text-navy-900 sm:text-2xl"
            >
              {block.text}
            </blockquote>
          )
        }

        if (block.type === 'spec-grid') {
          return (
            <div
              key={`spec-grid-${index}`}
              className="grid overflow-hidden rounded-xl border border-gray-200 sm:grid-cols-3"
            >
              {block.items.map((item) => (
                <div
                  key={item.value}
                  className="border-b border-gray-200 bg-white px-4 py-5 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <p className="text-lg font-bold text-navy-900">{item.value}</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          )
        }

        if (block.type === 'benefit-grid') {
          return (
            <div
              key={`benefit-grid-${index}`}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {block.items.map((item) => {
                const Icon = ICONS[item.icon]
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-5 text-center"
                  >
                    <Icon className="mx-auto mb-2 h-6 w-6 text-[#6b90c4]" aria-hidden />
                    <p className="text-sm font-semibold leading-snug text-navy-900">
                      {item.label}
                    </p>
                  </div>
                )
              })}
            </div>
          )
        }

        if (block.type === 'quote-box') {
          return (
            <div
              key={`quote-box-${index}`}
              className="rounded-xl border border-dashed border-navy-900 bg-gray-50 p-6"
            >
              <h3 className="text-lg font-bold text-navy-900">{block.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                {block.text}
              </p>
            </div>
          )
        }

        if (block.type === 'cta') {
          return (
            <div
              key={`cta-${index}`}
              className="relative overflow-hidden rounded-2xl bg-navy-900 px-6 py-10 text-center sm:px-8"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-inferno-600 via-inferno-400 to-inferno-600"
                aria-hidden
              />
              <h2 className="text-xl font-bold text-white sm:text-2xl">{block.title}</h2>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
                {block.text}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <ActionLink
                  href={block.primary.href}
                  className="inline-flex rounded-lg bg-inferno-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-inferno-600"
                >
                  {block.primary.label}
                </ActionLink>
                {block.secondary ? (
                  <ActionLink
                    href={block.secondary.href}
                    className="inline-flex rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                  >
                    {block.secondary.label}
                  </ActionLink>
                ) : null}
              </div>
            </div>
          )
        }

        if (block.type === 'list') {
          return (
            <ul
              key={`list-${index}`}
              className={`list-disc space-y-2 pl-5 ${bodyClass}`}
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }

        if (block.type === 'subheading') {
          return (
            <h3
              key={`subheading-${index}`}
              className="mt-2 text-base font-semibold text-navy-800 sm:text-lg"
            >
              {block.text}
            </h3>
          )
        }

        if (block.type === 'callout') {
          return (
            <div
              key={`callout-${index}`}
              className={`my-2 rounded-r-lg border-l-4 border-inferno-500 px-5 py-4 ${
                isProse ? 'bg-[#f7f8fb]' : 'bg-inferno-50'
              }`}
            >
              {block.label ? (
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-inferno-500">
                  {block.label}
                </p>
              ) : null}
              <p className={bodyClass}>{block.text}</p>
            </div>
          )
        }

        if (block.type === 'plainbox') {
          return (
            <div
              key={`plainbox-${index}`}
              className="my-2 rounded-xl bg-navy-900 px-5 py-5 text-white sm:px-6"
            >
              <h3 className="mb-3 text-base font-semibold text-inferno-400 sm:text-lg">
                {block.title}
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-200 sm:text-base">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )
        }

        if (block.type === 'rich-paragraph') {
          return (
            <p key={`rich-paragraph-${index}`} className={bodyClass}>
              {block.segments.map((segment, segmentIndex) => {
                if (segment.type === 'link') {
                  return (
                    <ActionLink
                      key={`${segment.href}-${segmentIndex}`}
                      href={segment.href}
                      className="text-inferno-500 underline hover:text-inferno-600"
                    >
                      {segment.text}
                    </ActionLink>
                  )
                }

                return <span key={`text-${segmentIndex}`}>{segment.value}</span>
              })}
            </p>
          )
        }

        return (
          <p
            key={`paragraph-${index}`}
            className={`${bodyClass} ${block.emphasis ? 'font-semibold text-navy-900' : ''}`}
          >
            {block.text}
          </p>
        )
      })}
    </div>
  )
}
