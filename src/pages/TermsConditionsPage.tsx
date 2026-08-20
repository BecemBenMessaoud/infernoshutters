import { ScrollText } from 'lucide-react'
import { LegalDocumentBody } from '../components/legal/LegalDocumentBody'
import { LegalDocumentLayout } from '../components/legal/LegalDocumentLayout'
import { TERMS_AND_CONDITIONS_HTML } from '../data/terms-and-conditions-content'

export function TermsConditionsPage() {
  return (
    <LegalDocumentLayout badge="Legal" icon={ScrollText} title="Terms & Conditions">
      <section aria-label="Terms and conditions content">
        <LegalDocumentBody html={TERMS_AND_CONDITIONS_HTML} />
      </section>
    </LegalDocumentLayout>
  )
}