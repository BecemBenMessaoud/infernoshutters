import { ProductModelCard } from '../components/products/ProductModelCard'
import { CURTAIN_SERIES_ARTICLES } from '../data/curtain-series'

export function ProductsDetailsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1d3d]">
      <section id="products-details" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:gap-x-10 lg:gap-y-12">
            {CURTAIN_SERIES_ARTICLES.map((model) => (
              <ProductModelCard key={model.model} model={model} prominent showCaption />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}