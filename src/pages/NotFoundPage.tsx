import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
        >
          Return to Home
        </Link>
      </div>
    </main>
  )
}