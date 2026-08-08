import { CommercialSolutionsSection } from '../components/services/CommercialSolutionsSection'
import { InstallationProofSection } from '../components/services/InstallationProofSection'
import { InstallationServiceSection } from '../components/services/InstallationServiceSection'
import { RepairMaintenanceSection } from '../components/services/RepairMaintenanceSection'

export function ServicesPage() {
  return (
    <main>
      <section className="bg-navy-900 py-10 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Roll Shutter Installation, Repair &amp; Maintenance Services
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base">
            Inferno-Roll provides certified installation, emergency repair, scheduled maintenance,
            and commercial roll shutter solutions to keep your property protected year-round.
          </p>
        </div>
      </section>
      <InstallationServiceSection />
      <InstallationProofSection />
      <RepairMaintenanceSection />
      <CommercialSolutionsSection />
    </main>
  )
}
