import type { ReactNode } from 'react'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'

type ProductDetailLayoutProps = {
  children: ReactNode
  wide?: boolean
}

export function ProductDetailLayout({ children, wide = false }: ProductDetailLayoutProps) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0b1d3d]">
      <div
        className={`mx-auto px-4 pb-16 pt-6 sm:px-6 sm:pt-8 lg:px-8 ${
          wide ? 'max-w-7xl' : 'max-w-6xl'
        }`}
      >
        <Link
          to="/products/overview"
          className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-inferno-500 to-amber-400 text-white shadow-lg transition hover:scale-105"
          aria-label="Close and return to products overview"
        >
          <X className="h-5 w-5" strokeWidth={3} />
        </Link>

        {children}
      </div>
    </main>
  )
}