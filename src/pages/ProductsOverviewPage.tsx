import { Link } from 'react-router-dom'
import {
  PRODUCT_COMPARISON_ROWS,
  PRODUCT_OVERVIEW_CARDS,
} from '../data/products'

export function ProductsOverviewPage() {
  return (
    <main>
      <section className="relative min-h-[420px] overflow-hidden sm:min-h-[480px] lg:min-h-[540px]">
        <img
          src="/images/products-hero.png"
          alt="Modern home with Inferno roll shutters"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 mx-auto flex h-full min-h-[420px] max-w-7xl items-center px-4 py-16 sm:min-h-[480px] sm:px-6 lg:min-h-[540px] lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Explore Our Roll Shutter Systems
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
              Inferno-Roll shutters are engineered to protect your home and business from
              wildfire, severe weather, intrusions, and more. Explore our full range of systems
              designed for reliability, performance, and long-term peace of mind.
            </p>
            <Link
              to="/quote"
              className="mt-8 inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {PRODUCT_OVERVIEW_CARDS.map((product) => (
              <article
                key={product.id}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md"
              >
                <div className="h-44 overflow-hidden bg-[#ececec] sm:h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-navy-900 sm:text-xl">{product.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-700">
                    {product.description}
                  </p>

                  <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="rounded-lg bg-white px-1 py-1">
                      <img
                        src={product.illustration}
                        alt={`${product.title} illustration`}
                        className="h-8 w-auto max-w-full object-contain sm:h-9 sm:max-w-[150px]"
                      />
                    </div>

                    <Link
                      to={product.detailHref}
                      className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-inferno-500 hover:text-inferno-500 sm:w-auto"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex justify-center sm:justify-end">
            <button
              type="button"
              className="min-h-11 rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-navy-900 transition hover:border-inferno-500 hover:text-inferno-500"
            >
              Compare Two Products
            </button>
          </div>

          <p className="mb-2 text-center text-xs text-gray-500 sm:hidden">
            Swipe horizontally to compare products.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
            <table className="w-full min-w-[1100px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr>
                  <th className="border border-gray-200 bg-inferno-500 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Shutter Type
                  </th>
                  <th className="border border-gray-200 bg-navy-900 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Slat Type
                  </th>
                  <th className="border border-gray-200 bg-navy-900 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Main Purpose
                  </th>
                  <th className="border border-gray-200 bg-navy-900 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Best For
                  </th>
                  <th className="border border-gray-200 bg-navy-900 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Key Features
                  </th>
                  <th className="border border-gray-200 bg-navy-900 px-4 py-3.5 font-semibold text-white sm:px-5">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRODUCT_COMPARISON_ROWS.map((row) => (
                  <tr key={row.shutterType} className="bg-white">
                    <td className="border border-gray-200 px-4 py-3.5 font-bold text-navy-900 sm:px-5">
                      {row.shutterType}
                    </td>
                    <td className="border border-gray-200 px-4 py-3.5 align-top text-gray-800 sm:px-5">
                      {row.slatType}
                    </td>
                    <td className="border border-gray-200 px-4 py-3.5 align-top text-gray-800 sm:px-5">
                      {row.mainPurpose}
                    </td>
                    <td className="border border-gray-200 px-4 py-3.5 align-top text-gray-800 sm:px-5">
                      {row.bestFor}
                    </td>
                    <td className="border border-gray-200 px-4 py-3.5 align-top text-gray-800 sm:px-5">
                      {row.keyFeatures}
                    </td>
                    <td className="border border-gray-200 px-4 py-3.5 align-top text-gray-800 sm:px-5">
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-4 px-4 sm:px-6 md:flex-row md:gap-6">
          <Link
            to="/quote"
            className="w-full rounded-lg bg-white px-10 py-3.5 text-center text-sm font-bold text-navy-900 transition hover:bg-gray-100 sm:w-auto"
          >
            Request a Quote
          </Link>
          <Link
            to="/quote"
            className="w-full rounded-lg bg-inferno-500 px-10 py-3.5 text-center text-sm font-bold text-white transition hover:bg-inferno-600 sm:w-auto"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}