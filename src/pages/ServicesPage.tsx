import { CommercialSolutionsSection } from '../components/services/CommercialSolutionsSection'
import { InstallationProofSection } from '../components/services/InstallationProofSection'
import { InstallationServiceSection } from '../components/services/InstallationServiceSection'
import { RepairMaintenanceSection } from '../components/services/RepairMaintenanceSection'

export function ServicesPage() {
  return (
    <main>
      <InstallationServiceSection />
      <InstallationProofSection />
      <RepairMaintenanceSection />
      <CommercialSolutionsSection />
    </main>
  )
}