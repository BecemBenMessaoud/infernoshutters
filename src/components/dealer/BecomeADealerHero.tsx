import { Handshake } from 'lucide-react'

export function BecomeADealerHero() {
  return (
    <section className="relative min-h-[min(78vh,720px)] overflow-hidden sm:min-h-[560px] lg:min-h-[620px]">
      <img
        src="/images/become-a-dealer-hero.png"
        alt="Inferno roll shutter installation on a residential home"
        width={1200}
        height={1600}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[42%_38%] sm:object-[48%_42%] lg:object-[32%_40%] xl:object-[28%_40%]"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:from-black/70 sm:via-black/40 sm:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent sm:hidden" />

      <div className="relative z-10 mx-auto flex h-full min-h-[min(78vh,720px)] max-w-7xl items-end px-4 pb-10 pt-28 sm:min-h-[560px] sm:items-center sm:px-6 sm:pb-0 sm:pt-0 lg:min-h-[620px] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
            <Handshake className="h-4 w-4" />
            <span>Become a Dealer</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Partner with Inferno
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
            Interested in carrying Inferno roll shutters? Tell us about your business and our team
            will reach out to discuss dealer opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}