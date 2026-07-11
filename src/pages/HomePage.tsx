import { useState } from 'react'
import { Hero } from '../components/home/Hero'
import { InvestorHighlight } from '../components/home/InvestorHighlight'
import { Reservation } from '../components/home/Reservation'
import { WhyChoose } from '../components/home/WhyChoose'
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
      <WhyChoose />
      <Reservation />
      <InvestorHighlight />
    </main>
  )
}