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
import { Navigate, useParams } from 'react-router-dom'
import { ProductDetailLayout } from '../components/products/ProductDetailLayout'
import { ProductFeatureHero } from '../components/products/ProductFeatureHero'
import { ProductModelCard } from '../components/products/ProductModelCard'
import { PRODUCT_DETAIL_CONTENT } from '../data/product-details'
import type { ProductFeatureIconId } from '../data/product-details'
import { PRODUCT_IMAGES, type ProductDetailSlug } from '../data/products'

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
    </ProductDetailLayout>
  )
}