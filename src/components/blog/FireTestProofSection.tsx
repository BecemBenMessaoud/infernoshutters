const FIRE_TEST_STATS = [
  {
    value: '30 min',
    label: 'Held back wildfire radiant heat with no burn-through (ICAL test)',
  },
  {
    value: '16–20 min',
    label: 'Held direct open flame before burn-through (CSFM 12-7A-1)',
  },
  {
    value: '~1 min',
    label: 'How fast an uncoated control shutter failed, for comparison',
  },
  {
    value: '150 kW',
    label: 'Direct-flame burner the coated shutters stood up to',
  },
] as const

const FIRE_TEST_BARS = [
  {
    value: '~1',
    label: 'Uncoated shutter (flame)',
    height: '3%',
    barClass: 'bg-gradient-to-t from-gray-500 to-gray-400',
  },
  {
    value: '10',
    label: 'Standard wildfire test',
    height: '33%',
    barClass: 'bg-gradient-to-t from-amber-500 to-amber-300',
  },
  {
    value: '16–20',
    label: 'Inferno-Roll (direct flame)',
    height: '60%',
    barClass: 'bg-gradient-to-t from-inferno-600 to-inferno-400',
  },
  {
    value: '30',
    label: 'Inferno-Roll (radiant heat)',
    height: '100%',
    barClass: 'bg-gradient-to-t from-inferno-700 to-inferno-500',
  },
] as const

export function FireTestProofSection() {
  return (
    <div className="relative mb-10 overflow-hidden rounded-[20px] bg-gradient-to-b from-navy-900 to-[#060f1e] p-6 text-white sm:p-8 lg:p-10">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,106,26,0.3),transparent_65%)]"
        aria-hidden
      />

      <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-10">
        <div>
          <p className="text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-amber-400">
            Independently Fire-Tested
          </p>
          <h2 className="mt-2 text-[1.7rem] font-bold leading-tight sm:text-3xl">
            Fire-tested, not just fire-talked
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#c3cfdd] sm:text-base">
            Inferno-Roll shutters were tested at Western Fire Center, an independent fire lab, to
            California&apos;s wildfire exposure methods. Here&apos;s what the shutters did against
            real heat and real flame.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {FIRE_TEST_STATS.map((stat) => (
              <div
                key={stat.value}
                className="rounded-[13px] border border-white/12 bg-white/5 p-4"
              >
                <p className="text-[1.7rem] font-extrabold leading-none text-amber-400">
                  {stat.value}
                </p>
                <p className="mt-2 text-[0.82rem] leading-snug text-[#c3cfdd]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[13px] border border-white/12 bg-white/[0.04] px-4 py-5 sm:px-5">
          <p className="mb-4 text-center text-[0.82rem] text-[#c3cfdd]">
            Minutes of protection before burn-through
          </p>

          <div
            className="flex h-[190px] items-end gap-3 border-b border-white/16 pb-1.5 sm:gap-4"
            role="img"
            aria-label="Bar chart comparing minutes of fire protection: uncoated shutter about 1 minute, standard wildfire test 10 minutes, Inferno-Roll direct flame 16 to 20 minutes, Inferno-Roll radiant heat 30 minutes"
          >
            {FIRE_TEST_BARS.map((bar) => (
              <div
                key={bar.label}
                className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-[0.82rem] font-extrabold text-white">{bar.value}</span>
                <div
                  className={`w-full min-h-[6px] rounded-t-[7px] ${bar.barClass}`}
                  style={{ height: bar.height }}
                />
              </div>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-4 gap-3 sm:gap-4">
            {FIRE_TEST_BARS.map((bar) => (
              <p
                key={`${bar.label}-caption`}
                className="min-h-[2.4em] text-center text-[0.68rem] leading-tight text-[#c3cfdd]"
              >
                {bar.label}
              </p>
            ))}
          </div>

          <p className="mt-3 text-center text-[0.68rem] text-[#8fa0b6]">
            Source: Western Fire Center, WFCi reports #22033a (radiant heat) &amp; #22033b (direct
            flame).
          </p>
        </div>
      </div>
    </div>
  )
}
