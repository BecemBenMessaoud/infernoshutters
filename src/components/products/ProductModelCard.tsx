import { ColorOptionsBar } from './ColorOptionsBar'
import { SlatProfile, type SlatProfileVariant } from './SlatProfile'

export type ProductSpecColumn = {
  heading: string
  items: string[]
}

export type ProductModelData = {
  model: string
  subtitle: string
  sheetImage?: string
  profile?: SlatProfileVariant
  columns?: ProductSpecColumn[]
}

type ProductModelCardProps = {
  model: ProductModelData
  prominent?: boolean
  showCaption?: boolean
}

export function ProductModelCard({
  model,
  prominent = false,
  showCaption = false,
}: ProductModelCardProps) {
  if (model.sheetImage) {
    return (
      <article
        className={`flex h-full w-full flex-col overflow-hidden bg-white ${
          prominent
            ? 'rounded-2xl border-[3px] border-inferno-500/90 p-2 shadow-2xl sm:p-3'
            : 'rounded-xl border-2 border-inferno-500/80 shadow-lg'
        }`}
      >
        <div className="aspect-[842/742] w-full overflow-hidden">
          <img
            src={model.sheetImage}
            alt={`${model.model} ${model.subtitle}`}
            className="h-full w-full object-contain object-center"
            loading="lazy"
            decoding="async"
          />
        </div>

        {showCaption ? (
          <div className="border-t border-inferno-500/20 px-4 py-4 sm:px-5">
            <h3 className="text-lg font-bold text-navy-900 sm:text-xl">{model.model}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">{model.subtitle}</p>
          </div>
        ) : null}
      </article>
    )
  }

  return (
    <article className="overflow-hidden rounded-xl border-2 border-inferno-500/80 bg-white shadow-lg">
      <div className="border-b border-inferno-500/30 px-4 py-3 sm:px-5">
        <p className="text-right text-xs font-bold uppercase leading-snug text-navy-900 sm:text-sm">
          <span className="text-base sm:text-lg">{model.model}</span>
          <br />
          {model.subtitle}
        </p>
      </div>

      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_auto] sm:p-5">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {model.columns?.map((column) => (
            <div key={column.heading}>
              <h4 className="mb-1.5 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                {column.heading}
              </h4>
              <ul className="space-y-0.5 text-[10px] leading-relaxed text-gray-700 sm:text-[11px]">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center sm:min-w-[140px]">
          {model.profile ? <SlatProfile variant={model.profile} /> : null}
        </div>
      </div>

      <ColorOptionsBar />
    </article>
  )
}