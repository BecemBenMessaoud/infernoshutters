import { CommercialSolutionsSection } from '../components/services/CommercialSolutionsSection'
import { CustomFabricationSection } from '../components/services/CustomFabricationSection'
import { InstallationProofSection } from '../components/services/InstallationProofSection'
import { InstallationServiceSection } from '../components/services/InstallationServiceSection'
import { RepairMaintenanceSection } from '../components/services/RepairMaintenanceSection'

export function ServicesPage() {
  return (
    <main>
      <InstallationServiceSection />
      <InstallationProofSection />
      <RepairMaintenanceSection />
      <CustomFabricationSection />
      <CommercialSolutionsSection />
    </main>
  )
}