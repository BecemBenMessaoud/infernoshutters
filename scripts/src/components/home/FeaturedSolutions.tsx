const SOLUTIONS = [
  { icon: '/images/callfire.png', title: 'Residential Wildfire Hardening', description: 'Custom-installed shutters designed to meet CAL FIRE home hardening standards and protect your family.' },
  { icon: '/images/iconhome.png', title: 'HOA / Multi-Family Solutions', description: 'Scalable shutter systems for condominiums, townhomes, and multi-unit properties in fire-prone areas.' },
  { icon: '/images/iconspace.jpg', title: 'Defensible Space Planning', description: 'Guidance for creating and maintaining the first 0-100 feet around structures per PRC 4291.' },
  { icon: '/images/iconx.jpg', title: 'Insurance Readiness (CA)', description: 'Documentation package to support potential insurer discounts and FAIR Plan eligibility reviews.' },
]

export function FeaturedSolutions() {
  return (
    <section id="solutions" className="bg-navy-900 pb-16 pt-4 lg:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">Featured Solutions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-20 items-center justify-center">
                <img src={solution.icon} alt="" className="max-h-16 max-w-full object-contain" />
              </div>
              <h3 className="mb-2 text-base font-bold text-inferno-500">{solution.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{solution.description}</p>
              <a href="#" className="text-sm font-semibold text-inferno-500 transition hover:text-inferno-600">Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
