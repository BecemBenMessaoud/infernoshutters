const FEATURES = [
  {
    icon: '/images/first-icon.png',
    title: 'Fire',
    description:
      'Proven protection from wildfire embers, radiant heat, and severe winds.',
  },
  {
    icon: '/images/second-icon.png',
    title: 'Security',
    description:
      'Defend against intruders with reinforced shutter systems built to last.',
  },
  {
    icon: '/images/third-icon.png',
    title: 'Storm',
    description:
      'Engineered to withstand high winds, debris impact, and extreme weather.',
  },
  {
    icon: '/images/fourth-icon.png',
    title: 'Savings',
    description:
      'Cut utility bills by up to 30% with energy-efficient insulation.',
  },
] as const

const WILDFIRE_ZONES_IMAGE = {
  src: '/images/wildfire-zones.png',
  alt: 'Modern home with Inferno-Roll shutters protected during a wildfire',
} as const

export function WildfireZones() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Inferno-Roll Shutters was built for{' '}
          <span className="text-inferno-400">Wildfire Zones</span>
        </h2>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex w-full items-start gap-4 rounded-xl p-4 text-left"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={`${feature.title} protection icon`}
                    width={56}
                    height={56}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-inferno-400">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full overflow-hidden rounded-xl shadow-2xl">
            <img
              src={WILDFIRE_ZONES_IMAGE.src}
              alt={WILDFIRE_ZONES_IMAGE.alt}
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="h-[280px] w-full object-cover object-center sm:h-[340px] lg:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
