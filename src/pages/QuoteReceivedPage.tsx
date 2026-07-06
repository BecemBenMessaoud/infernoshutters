import { Link } from 'react-router-dom'

export function QuoteReceivedPage() {
  return (
    <main className="bg-[#f3f2ee] py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="font-medium text-inferno-500 hover:text-inferno-600">
                Home
              </Link>
            </li>
            <li className="text-gray-400" aria-hidden>
              &gt;
            </li>
            <li>
              <Link to="/quote" className="font-medium text-inferno-500 hover:text-inferno-600">
                Quote
              </Link>
            </li>
            <li className="text-gray-400" aria-hidden>
              &gt;
            </li>
            <li className="font-medium text-gray-600">Quote Request Received</li>
          </ol>
        </nav>

        <div className="rounded-2xl bg-[#e8e7e3] px-6 py-12 text-center shadow-sm sm:px-10 sm:py-16">
          <h1 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
            Quote Request Received.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-600 sm:text-base">
            Thank you! Our team will review your request and contact you within 1 business day.
          </p>

          <button
            type="button"
            className="mt-8 rounded-lg bg-inferno-500 px-10 py-3.5 text-sm font-bold text-white transition hover:bg-inferno-600"
          >
            Schedule Immediately
          </button>

          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-gray-500">OR</p>

          <Link
            to="/"
            className="mt-4 inline-block text-sm font-semibold text-navy-900 underline-offset-2 hover:underline"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </main>
  )
}