export function InvestorHighlight() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
      <img src="/images/house.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-navy-900/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-inferno-400 sm:text-3xl lg:text-4xl">Investor Highlight</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Inferno shutters is expanding. Discover investment opportunities in fire, storm, and security home protection.
        </p>
        <button type="button" className="mt-8 rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600">Learn more About us</button>
      </div>
    </section>
  )
}
