import { ScrollText } from 'lucide-react'
import { LegalDocumentBody } from '../components/legal/LegalDocumentBody'
import { LegalDocumentLayout } from '../components/legal/LegalDocumentLayout'
import { TERMS_AND_CONDITIONS_HTML } from '../data/legal-document-content'

export function TermsConditionsPage() {
  return (
    <LegalDocumentLayout badge="Legal" icon={ScrollText} title="Terms & Conditions">
      <LegalDocumentBody html={TERMS_AND_CONDITIONS_HTML} />
    </LegalDocumentLayout>
  )
}