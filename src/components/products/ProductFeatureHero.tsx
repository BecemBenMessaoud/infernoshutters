import type { LucideIcon } from 'lucide-react'

export type ProductFeature = {
  icon: LucideIcon
  title: string
  description: string
}

type ProductFeatureHeroProps = {
  title: string
  features: ProductFeature[]
  image: string
  imageAlt: string
}

export function ProductFeatureHero({
  title,
  features,
  image,
  imageAlt,
}: ProductFeatureHeroProps) {
  return (
    <div className="overflow-hidden rounded-2xl border-b-4 border-inferno-500 bg-white shadow-xl">
      <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:p-8 lg:gap-10">
        <div>
          <h1 className="text-xl font-bold uppercase tracking-wide text-navy-900 sm:text-2xl">
            {title}
          </h1>
          <ul className="mt-6 space-y-4">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-inferno-500 text-white">
                  <feature.icon className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase text-navy-900">{feature.title}</p>
                  <p className="mt-0.5 text-sm text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
          <img
            src={image}
            alt={imageAlt}
            width={1024}
            height={682}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  )
}