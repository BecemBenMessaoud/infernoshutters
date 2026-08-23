import { useState } from 'react'
import { Hero } from '../components/home/Hero'
import { LazySection } from '../components/ui/LazyWhenVisible'
import {
  WildfireZones,
  type WildfireFeatureTitle,
} from '../components/home/WildfireZones'

export function HomePage() {
  const [selectedFeature, setSelectedFeature] =
    useState<WildfireFeatureTitle>('Fire')

  return (
    <main>
      <Hero />
      <WildfireZones selected={selectedFeature} onSelect={setSelectedFeature} />
      <LazySection
        loader={() => import('../components/home/WhyChoose').then((m) => ({ default: m.WhyChoose }))}
        minHeight="24rem"
      />
      <LazySection
        loader={() =>
          import('../components/home/InfernoDefenseLayers').then((m) => ({
            default: m.InfernoDefenseLayers,
          }))
        }
        minHeight="28rem"
      />
      <LazySection
        loader={() =>
          import('../components/home/FeaturedSolutions').then((m) => ({
            default: m.FeaturedSolutions,
          }))
        }
        minHeight="28rem"
      />
      <LazySection
        loader={() => import('../components/home/Reservation').then((m) => ({ default: m.Reservation }))}
        minHeight="20rem"
      />
      <LazySection
        loader={() =>
          import('../components/home/InvestorHighlight').then((m) => ({
            default: m.InvestorHighlight,
          }))
        }
        minHeight="24rem"
      />
    </main>
  )
}
