import { FeaturedSolutions } from '../components/home/FeaturedSolutions'
import { Hero } from '../components/home/Hero'
import { InvestorHighlight } from '../components/home/InvestorHighlight'
import { Reservation } from '../components/home/Reservation'
import { WhyChoose } from '../components/home/WhyChoose'
import { WildfireZones } from '../components/home/WildfireZones'
import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { TopBar } from '../components/layout/TopBar'

export function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <WildfireZones />
        <WhyChoose />
        <FeaturedSolutions />
        <Reservation />
        <InvestorHighlight />
      </main>
      <Footer />
    </>
  )
}
