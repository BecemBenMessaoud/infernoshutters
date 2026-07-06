const SOLUTIONS = [
  {
    icon: '/images/callfire.png',
    title: 'CAL FIRE Home Hardening',
    description:
      'Installed to support ember-resistant best practices and defensible space planning',
  },
  {
    icon: '/images/iconhome.png',
    title: 'PRC 4291 Defensible Space',
    description:
      'Guidance for creating and maintaining the first 0-100 feet around structures',
  },
  {
    icon: '/images/iconspace.jpg',
    title: 'PRC 4291 Defensible Space',
    description:
      'Documentation package to support potential insurer discounts where available',
  },
  {
    icon: '/images/iconx.jpg',
    title: 'FAIR Plan Readiness (CA)',
    description:
      'Install and photo log aligned for broker submissions and eligibility reviews',
  },
]

export function FeaturedSolutions() {
  return (
    <section id="products" className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Featured Solutions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SOLUTIONS.map((solution, index) => (
            <div
              key={`${solution.title}-${index}`}
              className="flex h-full flex-col items-center rounded-2xl bg-white px-6 py-8 text-center shadow-lg"
            >
              <div className="mb-6 flex h-40 w-full shrink-0 items-center justify-center">
                <img
                  src={solution.icon}
                  alt=""
                  className="max-h-36 max-w-[180px] object-contain"
                />
              </div>
              <h3 className="mb-3 flex min-h-[2.75rem] w-full items-start justify-center text-base font-bold leading-snug text-inferno-500">
                {solution.title}
              </h3>
              <p className="flex min-h-[4.5rem] w-full items-start justify-center text-sm leading-relaxed text-gray-600">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}