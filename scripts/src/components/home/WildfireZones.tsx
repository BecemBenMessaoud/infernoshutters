const FEATURES = [
  { icon: '/images/first-icon.png', title: 'Fire', description: 'Proven protection from wildfire embers, radiant heat, and severe winds.' },
  { icon: '/images/second-icon.png', title: 'Security', description: 'Defend against intruders with reinforced shutter systems built to last.' },
  { icon: '/images/third-icon.png', title: 'Storm', description: 'Engineered to withstand high winds, debris impact, and extreme weather.' },
  { icon: '/images/fourth-icon.png', title: 'Savings', description: 'Cut utility bills by up to 30% with energy-efficient insulation.', highlighted: true },
]

export function WildfireZones() {
  return (
    <section className="bg-navy-900 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          Inferno-Roll Shutters was built for <span className="text-inferno-400">Wildfire Zones</span>
        </h2>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            {FEATURES.map((feature) => (
              <div key={feature.title} className={`flex items-start gap-4 rounded-xl p-4 transition ${feature.highlighted ? 'bg-gradient-to-r from-blue-900/60 to-navy-800/40 ring-1 ring-blue-500/30' : 'hover:bg-white/5'}`}>
                <div className="flex h-16 w-16 shrink-0 items-center justify-center">
                  <img src={feature.icon} alt={feature.title} className="h-14 w-14 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-inferno-400">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -right-4 top-8 h-48 w-48 rounded-full bg-inferno-500/20 blur-3xl" />
            <img src="/images/before_after.png" alt="Before and after shutter installation" className="relative z-10 w-full max-w-lg rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
