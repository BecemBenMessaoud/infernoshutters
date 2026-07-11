import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

type LegalDocumentLayoutProps = {
  badge: string
  icon: LucideIcon
  title: string
  children: ReactNode
}

export function LegalDocumentLayout({ badge, icon: Icon, title, children }: LegalDocumentLayoutProps) {
  return (
    <main>
      <section className="bg-navy-900 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 text-sm text-white">
            <Icon className="h-4 w-4" />
            <span>{badge}</span>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">{children}</div>
      </section>
    </main>
  )
}