import { Map } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ABOUT_ACCREDITATIONS } from '../data/site'

export function AboutPage() {
  return (
    <main>
      <section className="bg-navy-900 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              About Inferno | Certified Roll Shutter Experts
            </h1>
            <p className="mt-6 max-w-5xl text-sm leading-relaxed text-gray-200 sm:text-base lg:text-lg">
              Inferno provides premium protection for homes and businesses through the design and
              installation of advanced roll shutter systems for residential and commercial
              properties. Proudly made in the United States, our patent-pending products set a
              new standard in America, shaped by research and development, precision engineering,
              and a strong commitment to quality. Thoughtfully designed to safeguard your
              property and the people who matter most, our shutters offer protection against
              wildfire, severe weather, snowstorms, and security threats. Through strict
              production standards and partnerships with certified suppliers, we ensure dependable
              quality from material selection to final assembly. From the first consultation to
              final installation, our process is centered on clarity, precision, and professional
              support. Inferno delivers customizable, long-lasting shutter systems created to meet
              diverse project needs with confidence, comfort, and peace of mind.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-navy-900 sm:text-3xl">
            Accreditations &amp; Certifications
          </h2>

          <div className="mt-8 flex justify-center px-4 sm:mt-10">
            <div className="flex w-full max-w-[52rem] flex-wrap items-center justify-center gap-4 rounded-lg bg-[#ececec] px-4 py-6 sm:gap-6 sm:px-10 sm:py-8 lg:px-14">
              {ABOUT_ACCREDITATIONS.map((item) => (
                <span
                  key={item.label}
                  className={`text-center text-base font-bold leading-tight sm:text-xl lg:text-[1.35rem] ${
                    item.tone === 'red'
                      ? 'text-[#d62828]'
                      : item.tone === 'green'
                        ? 'text-[#2a9d3a]'
                        : 'text-navy-900'
                  }`}
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">Warranty Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                Inferno-Roll shutter systems are backed by warranty coverage designed to protect
                your investment. Coverage details vary by product line and installation package,
                with support available across our expanding U.S. service footprint.
              </p>
            </div>

            <div className="flex min-h-[320px] items-center justify-center rounded-xl bg-gray-100 p-6 sm:min-h-[380px] lg:min-h-[420px]">
              <div className="text-center">
                <img
                  src="/images/statesFinal.png"
                  alt="US Coverage Map"
                  className="mx-auto mb-4 w-full max-w-md object-contain sm:max-w-lg lg:max-h-80 lg:max-w-xl"
                />
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
                  <Map className="h-4 w-4" />
                  <span>US Coverage Map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">Service Areas</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Inferno shutters is expanding. Discover opportunities in fire and security home
            protection.
          </p>
          <Link
            to="/quote"
            className="mt-8 inline-block rounded-lg bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </main>
  )
}
