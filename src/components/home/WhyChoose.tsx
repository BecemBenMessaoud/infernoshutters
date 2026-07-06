const BENEFITS = [
  'Wildfire-ready protection',
  'Storm-Tested Strength',
  'Energy Efficiency',
  'Flexible Financing',
  'Craftsmanship Guaranteed',
] as const

const WHY_CHOOSE_VIDEO = {
  src: '/videos/why-choose-inferno.mp4',
  poster: '/images/why-choose-fire.png',
} as const

export function WhyChoose() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Why Homeowners Choose{' '}
              <span className="text-inferno-400">Inferno</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-inferno-500" />
                  <span className="text-base text-gray-200 sm:text-lg">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl">
            <video
              className="aspect-video w-full max-h-[50vh] object-cover object-center"
              controls
              playsInline
              preload="metadata"
              poster={WHY_CHOOSE_VIDEO.poster}
            >
              <source src={WHY_CHOOSE_VIDEO.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}