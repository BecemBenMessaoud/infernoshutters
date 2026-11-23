import {
  Building2,
  CircleDollarSign,
  DollarSign,
  Flame,
  Home,
  Lock,
  Shield,
  Sparkles,
  Tag,
  Volume2,
  Wind,
  type LucideIcon,
} from 'lucide-react'
import { Navigate, Link, useParams } from 'react-router-dom'
import { ProductDetailLayout } from '../components/products/ProductDetailLayout'
import { ProductFeatureHero } from '../components/products/ProductFeatureHero'
import { ProductModelCard } from '../components/products/ProductModelCard'
import { PRODUCT_DETAIL_CONTENT } from '../data/product-details'
import type { ProductFeatureIconId } from '../data/product-details'
import { PRODUCT_IMAGES, PRODUCT_OVERVIEW_CARDS, type ProductDetailSlug } from '../data/products'

const PRODUCT_ARTICLES: Record<ProductDetailSlug, { href: string; label: string }[]> = {
  'fire-resistant': [
    {
      href: '/blog/why-windows-and-doors-fail-first-in-a-wildfire',
      label: 'Why Windows and Doors Fail First in a Wildfire',
    },
    {
      href: '/blog/wildfire-insurance-home-hardening',
      label: 'Wildfire Insurance Is Getting Harder to Keep',
    },
  ],
  'hurricane-storm': [
    {
      href: '/blog/when-the-pacific-comes-for-your-home',
      label: 'When the Pacific Comes for Your Home',
    },
  ],
  'heavy-duty': [
    {
      href: '/blog/what-actually-stops-a-break-in',
      label: 'What Actually Stops a Break-In',
    },
  ],
  'standard-security': [
    {
      href: '/blog/what-actually-stops-a-break-in',
      label: 'What Actually Stops a Break-In',
    },
  ],
}

const FEATURE_ICON_MAP: Record<ProductFeatureIconId, LucideIcon> = {
  home: Home,
  volume: Volume2,
  dollar: DollarSign,
  cost: CircleDollarSign,
  wind: Wind,
  impact: Sparkles,
  storm: Wind,
  lock: Lock,
  shield: Shield,
  building: Building2,
  tag: Tag,
  flame: Flame,
  wildfire: Home,
  security: Shield,
}

function isProductDetailSlug(slug: string): slug is ProductDetailSlug {
  return slug in PRODUCT_DETAIL_CONTENT
}

export function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug || !isProductDetailSlug(slug)) {
    return <Navigate to="/products/overview" replace />
  }

  const content = PRODUCT_DETAIL_CONTENT[slug]
  const relatedProducts = PRODUCT_OVERVIEW_CARDS.filter((product) => product.id !== slug)
  const usesSheetLayout = slug === 'standard-security' || slug === 'hurricane-storm' || slug === 'heavy-duty' || slug === 'fire-resistant'
  const features = content.features.map((feature) => ({
    icon: FEATURE_ICON_MAP[feature.icon],
    title: feature.title,
    description: feature.description,
  }))

  return (
    <ProductDetailLayout wide={usesSheetLayout}>
      <ProductFeatureHero
        title={content.heroTitle}
        features={features}
        image={PRODUCT_IMAGES[slug]}
        imageAlt={content.heroTitle}
      />

      <div className="mt-10 text-center">
        <span className="inline-block rounded-full bg-inferno-500 px-8 py-2.5 text-sm font-bold uppercase tracking-wide text-white sm:px-12 sm:text-base">
          {content.bannerLabel}
        </span>
        <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base">
          {content.description}
        </p>
      </div>

      <div
        className={
          usesSheetLayout
            ? 'mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-14 lg:gap-x-10 lg:gap-y-12'
            : 'mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'
        }
      >
        {content.models.map((model, index) => {
          const isLastOddItem =
            usesSheetLayout &&
            index === content.models.length - 1 &&
            content.models.length % 2 === 1

          const isLegacyCenteredLast =
            !usesSheetLayout &&
            index === content.models.length - 1 &&
            content.models.length % 3 === 1

          return (
            <div
              key={`${model.model}-${model.subtitle}`}
              className={
                isLastOddItem
                  ? 'sm:col-span-2 sm:flex sm:justify-center'
                  : isLegacyCenteredLast
                    ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2'
                    : undefined
              }
            >
              <div className={isLastOddItem ? 'h-full w-full sm:max-w-[calc(50%-1.25rem)]' : 'h-full w-full'}>
                <ProductModelCard model={model} prominent={usesSheetLayout} />
              </div>
            </div>
          )
        })}
      </div>

      <aside className="mt-16 border-t border-white/10 pt-12">
        <h2 className="text-center text-xl font-bold text-white sm:text-2xl">
          Explore Other Roll Shutter Systems
        </h2>
        <ul className="mt-8 grid gap-4 sm:grid-cols-3">
          {relatedProducts.map((product) => (
            <li key={product.id}>
              <Link
                to={product.detailHref}
                className="block rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white transition hover:border-inferno-500 hover:bg-white/10"
              >
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold text-white">From the blog</p>
          <ul className="mt-3 flex flex-col items-center gap-2">
            {PRODUCT_ARTICLES[slug].map((article) => (
              <li key={article.href}>
                <Link
                  to={article.href}
                  className="text-sm font-semibold text-inferno-400 underline hover:text-inferno-300"
                >
                  {article.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col items-center gap-3">
            {slug === 'hurricane-storm' ? (
              <Link
                to="/el-nino-storm-preparation"
                className="inline-flex rounded-lg border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Read the El Niño Guide
              </Link>
            ) : null}
            <Link
              to="/quote"
              className="inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </aside>
    </ProductDetailLayout>
  )
}