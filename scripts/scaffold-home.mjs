import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const base = path.join(__dirname, 'src')

function write(rel, content) {
  const full = path.join(base, rel)
  fs.mkdirSync(path.dirname(full), { recursive: true })
  fs.writeFileSync(full, content, 'utf8')
  console.log('wrote', rel)
}

write(
  'data/site.ts',
  `export const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const PHONE = '(888) 999-8809'
export const EMAIL = 'info@infernoshutters.com'
`,
)

write(
  'components/layout/TopBar.tsx',
  `import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { EMAIL, PHONE } from '../../data/site'

export function TopBar() {
  return (
    <div className="bg-[#1a1a2e] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href={\`tel:\${PHONE.replace(/\\D/g, '')}\`} className="flex items-center gap-1.5 transition-colors hover:text-inferno-400">
            <Phone className="h-3 w-3" />
            <span>{PHONE}</span>
          </a>
          <a href={\`mailto:\${EMAIL}\`} className="hidden items-center gap-1.5 transition-colors hover:text-inferno-400 sm:flex">
            <Mail className="h-3 w-3" />
            <span>{EMAIL}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-inferno-400"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-inferno-400"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-inferno-400"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-inferno-400"><Instagram className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  )
}
`,
)

write(
  'components/layout/Header.tsx',
  `import { NAV_LINKS } from '../../data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0">
          <img src="/images/Logo Inferno.png" alt="Inferno-Roll" className="h-12 w-auto object-contain sm:h-14" />
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={\`text-sm font-medium transition-colors \${
                'active' in link && link.active ? 'text-inferno-500' : 'text-gray-700 hover:text-inferno-500'
              }\`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button type="button" className="rounded-md border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 xl:hidden" aria-label="Open menu">
          Menu
        </button>
      </div>
    </header>
  )
}
`,
)

write(
  'components/home/Hero.tsx',
  `import { useState } from 'react'
import { Phone } from 'lucide-react'
import { PHONE } from '../../data/site'

const HERO_IMAGES = ['/images/hero image.jpg', '/images/house.jpg', '/images/house2.jpg']

export function Hero() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="home" className="relative h-[520px] overflow-hidden sm:h-[580px] lg:h-[640px]">
      {HERO_IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt="Home with Inferno-Roll security shutters"
          className={\`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 \${index === current ? 'opacity-100' : 'opacity-0'}\`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-inferno-400">Protecting What Matters Most.</p>
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Home Defense Meets Wildfire Science.</h1>
          <button type="button" className="mt-6 rounded bg-white px-8 py-2.5 text-sm font-bold tracking-wide text-gray-900 transition hover:bg-gray-100">LEARN MORE</button>
        </div>
      </div>
      <a href={\`tel:\${PHONE.replace(/\\D/g, '')}\`} className="absolute bottom-24 right-4 z-20 flex items-center gap-3 rounded-lg bg-inferno-500 px-5 py-4 text-white shadow-xl transition hover:bg-inferno-600 sm:right-8 lg:bottom-28">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20"><Phone className="h-5 w-5" /></div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide">Call Us Now!</p>
          <p className="text-lg font-bold">{PHONE}</p>
        </div>
      </a>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button key={index} type="button" onClick={() => setCurrent(index)} aria-label={\`Go to slide \${index + 1}\`} className={\`h-2.5 w-2.5 rounded-full transition-colors \${index === current ? 'bg-white' : 'bg-white/50'}\`} />
        ))}
      </div>
    </section>
  )
}
`,
)

console.log('Part 1 complete')

write(
  'components/home/WildfireZones.tsx',
  `const FEATURES = [
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
              <div key={feature.title} className={\`flex items-start gap-4 rounded-xl p-4 transition \${feature.highlighted ? 'bg-gradient-to-r from-blue-900/60 to-navy-800/40 ring-1 ring-blue-500/30' : 'hover:bg-white/5'}\`}>
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
`,
)

write(
  'components/home/WhyChoose.tsx',
  `const BENEFITS = ['Wildfire-ready protection', 'Storm-Tested Strength', 'Energy Efficiency', 'Flexible Financing', 'Craftsmanship Guaranteed']

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
`,
)

write(
  'components/home/FeaturedSolutions.tsx',
  `const SOLUTIONS = [
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
`,
)

write(
  'components/home/Reservation.tsx',
  `import { Banknote, ClipboardList, Flag, MapPin, Ruler, Tag, Wrench } from 'lucide-react'

const STEPS = [
  { icon: Ruler, title: 'Get Your Free Estimate', text: 'Share rough measurements or schedule a site evaluator' },
  { icon: Tag, title: 'Agree on Preliminary Pricing', text: 'Lock in your custom quote' },
  { icon: Banknote, title: 'Reserve with $1,000', text: 'Credited toward your order or refunded if you cancel' },
  { icon: ClipboardList, title: '50% Deposit', text: 'Due 1 month before production' },
  { icon: Flag, title: 'Final 50% Payment', text: 'Balance due when shutters are ready' },
  { icon: Wrench, title: 'Professional Installation', text: 'Installed by a certified Inferno-Roll dealer' },
]

const LOCATIONS = ['Los Angeles, CA', 'Riverside, CA', 'Malibu, CA']

export function Reservation() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">Reserve Your Inferno-Roll Shutters Today!</h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Protect your home before wildfire season hits. Secure your place in line with a{' '}
              <span className="font-bold text-inferno-500">$1,000 fully credited reservation fee.</span>
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {STEPS.map((step) => (
                <div key={step.title} className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center">
                  <step.icon className="mx-auto h-5 w-5 text-inferno-500" />
                  <h4 className="mt-2 text-xs font-bold text-navy-900">{step.title}</h4>
                  <p className="mt-1 text-[10px] leading-tight text-gray-500">{step.text}</p>
                </div>
              ))}
            </div>
            <button type="button" className="mt-8 rounded-lg bg-inferno-500 px-10 py-3 text-sm font-bold text-white transition hover:bg-inferno-600">Get Started</button>
            <div className="mt-8 space-y-2">
              {LOCATIONS.map((location) => (
                <div key={location} className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 shrink-0 text-inferno-500" /><span>{location}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-gray-100 p-6 shadow-inner sm:p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Name" required className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" />
              <input type="email" placeholder="Email" required className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" />
              <input type="text" placeholder="Address" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" />
              <input type="tel" placeholder="Phone" className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" />
              <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" defaultValue="">
                <option value="" disabled>Product Interest</option>
                <option value="residential">Residential Wildfire Hardening</option>
                <option value="hoa">HOA / Multi-Family</option>
                <option value="commercial">Commercial Solutions</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Message" rows={4} className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500" />
              <button type="submit" className="w-full rounded-lg bg-inferno-500 py-3 text-sm font-bold text-white transition hover:bg-inferno-600">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
`,
)

write(
  'components/home/InvestorHighlight.tsx',
  `export function InvestorHighlight() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 lg:py-24">
      <img src="/images/house.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-navy-900/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-inferno-400 sm:text-3xl lg:text-4xl">Investor Highlight</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Inferno shutters is expanding. Discover investment opportunities in fire, storm, and security home protection.
        </p>
        <button type="button" className="mt-8 rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600">Learn more About us</button>
      </div>
    </section>
  )
}
`,
)

write(
  'components/layout/Footer.tsx',
  `import { ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import { EMAIL, NAV_LINKS } from '../../data/site'

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src="/images/Logo Inferno.png" alt="Inferno-Roll" className="h-16 w-auto object-contain" />
            <p className="mt-2 text-sm text-gray-500">Powered by Sun & Security</p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Facebook" className="text-gray-600 transition hover:text-inferno-500"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="text-gray-600 transition hover:text-inferno-500"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 transition hover:text-inferno-500"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-600 transition hover:text-inferno-500"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Contact Info</h4>
            <p className="text-sm text-gray-600">{EMAIL}</p>
            <p className="mt-1 text-sm text-gray-600">(888) 999-8809</p>
            <p className="mt-2 text-sm text-gray-600">Los Angeles, CA</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 6).map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-gray-600 transition hover:text-inferno-500">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-navy-900">Newsletter</h4>
            <p className="mb-3 text-sm text-gray-600">Get updates about our latest news!</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@example.com" className="flex-1 rounded-l-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-inferno-500" />
              <button type="submit" className="flex items-center justify-center rounded-r-lg bg-inferno-500 px-3 text-white transition hover:bg-inferno-600" aria-label="Subscribe"><ArrowRight className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Inferno-Roll. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-inferno-500">Privacy Policy</a>
            <a href="#" className="transition hover:text-inferno-500">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
`,
)

write(
  'pages/HomePage.tsx',
  `import { FeaturedSolutions } from '../components/home/FeaturedSolutions'
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
`,
)

console.log('All files written')
