import { Link } from 'react-router-dom'
import { ProductModelCard } from '../components/products/ProductModelCard'
import { CURTAIN_SERIES_ARTICLES } from '../data/curtain-series'

export function ProductsDetailsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1d3d]">
      <section className="px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Roll Shutter Slat Specifications
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Explore detailed model specifications for every Inferno-Roll slat series — from
            roll-formed aluminum to double-wall extruded profiles engineered for fire, storm, and
            security applications.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <Link to="/products/fire-resistant" className="text-inferno-400 hover:text-inferno-300">
              Fire-resistant shutters
            </Link>
            <Link to="/products/hurricane-storm" className="text-inferno-400 hover:text-inferno-300">
              Hurricane and storm shutters
            </Link>
            <Link to="/products/standard-security" className="text-inferno-400 hover:text-inferno-300">
              Standard security shutters
            </Link>
            <Link to="/products/heavy-duty" className="text-inferno-400 hover:text-inferno-300">
              Heavy-duty security shutters
            </Link>
            <Link to="/quote" className="text-white underline hover:text-inferno-300">
              Request a quote
            </Link>
          </div>
        </div>
      </section>
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