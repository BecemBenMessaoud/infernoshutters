const BENEFITS = ['Wildfire-ready protection', 'Storm-Tested Strength', 'Energy Efficiency', 'Flexible Financing', 'Craftsmanship Guaranteed']

export function WhyChoose() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Why Homeowners Choose <span className="text-inferno-400">Inferno</span></h2>
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-inferno-500" />
                  <span className="text-base text-gray-200 sm:text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <img src="/images/showcase2.jpg" alt="Home protected with Inferno shutters during wildfire" className="h-[320px] w-full object-cover sm:h-[380px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
