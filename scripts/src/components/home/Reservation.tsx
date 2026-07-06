import { Banknote, ClipboardList, Flag, MapPin, Ruler, Tag, Wrench } from 'lucide-react'

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
