import {
  Banknote,
  ClipboardList,
  Flag,
  MapPin,
  Ruler,
  Tag,
  Wrench,
} from 'lucide-react'

const RESERVE_NOW_URL =
  'https://connect.intuit.com/portal/app/CommerceNetwork/view/scs-v1-d34d119939b54de3adbaeaf41cf8dbf50b9f7be4320f42188783224ae1debcce6e0a64e5a52d4008a4ef67bc73612842?locale=EN_US&cta=saveandcopylink'

const STEPS = [
  {
    icon: Ruler,
    title: 'Get Your Free Estimate',
    text: 'Share rough measurements or schedule a site evaluator',
  },
  {
    icon: Tag,
    title: 'Agree on Preliminary Pricing',
    text: 'Lock in your custom quote',
  },
  {
    icon: Banknote,
    title: 'Reserve with $1,000',
    text: 'Credited toward your order or refunded if you cancel',
  },
  {
    icon: ClipboardList,
    title: '50% Deposit',
    text: 'Due 1 month before production',
  },
  {
    icon: Flag,
    title: 'Final 50% Payment',
    text: 'Balance due when shutters are ready',
  },
  {
    icon: Wrench,
    title: 'Professional Installation',
    text: 'Installed by a certified Inferno-Roll dealer',
  },
]

export function Reservation() {
  return (
    <section id="contact" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl lg:text-4xl">
              Reserve Your Inferno-Roll Shutters Today!
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Protect your home before wildfire season hits. Secure your place in
              line with a{' '}
              <span className="font-bold text-inferno-500">
                $1,000 fully credited reservation fee.
              </span>
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((step) => (
                <div
                  key={step.title}
                  className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-center"
                >
                  <step.icon className="mx-auto h-5 w-5 text-inferno-500" />
                  <h4 className="mt-2 text-xs font-bold text-navy-900">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-xs leading-tight text-gray-500 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={RESERVE_NOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full min-h-11 max-w-xs items-center justify-center rounded-lg bg-inferno-500 px-10 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:w-auto"
              >
                Reserve Now
              </a>
            </div>

            <div className="mt-8 flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-inferno-500" />
              <div className="text-sm leading-relaxed text-navy-900">
                <p>
                  <span className="font-bold text-inferno-500">locations:</span>
                </p>
                <p>230 MCDONALDS AVE</p>
                <p>RICHMOND, CA 94801</p>
                <p className="mt-2">Pebble Beach, CA 93953</p>
                <p className="mt-2">
                  <span className="font-bold text-inferno-500">
                    Corporate mailing office:
                  </span>{' '}
                  The Nevada address
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-6 shadow-inner sm:p-8">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
              />
              <select
                name="type"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Type
                </option>
                <option value="commercial">Commercial</option>
                <option value="residential">Residential</option>
              </select>
              <select
                name="installationType"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Installation Type
                </option>
                <option value="self-install">Self Install</option>
                <option value="own-contractor">Have Own Contractor</option>
                <option value="need-dealer">Need a Dealer</option>
              </select>
              <select
                name="productInterest"
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Product interested in?
                </option>
                <option value="rolling-shutter">Rolling Shutter</option>
                <option value="retractable-screens">Retractable Screens</option>
                <option value="security-screens">Security Screens</option>
                <option value="combination">Combination</option>
              </select>
              <select
                name="referralSource"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
                defaultValue=""
              >
                <option value="" disabled>
                  How Did you hear about us
                </option>
                <option value="google-search">Google Search Result</option>
                <option value="youtube">Youtube</option>
                <option value="facebook-ads">Facebook Ads</option>
                <option value="referral">Referral</option>
                <option value="previous-client">Previous Client</option>
                <option value="online-ad">Online Ad</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-inferno-500 focus:ring-1 focus:ring-inferno-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-inferno-500 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
