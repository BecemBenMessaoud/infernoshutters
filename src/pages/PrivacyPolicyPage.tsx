import { Shield } from 'lucide-react'
import { LegalDocumentBody } from '../components/legal/LegalDocumentBody'
import { LegalDocumentLayout } from '../components/legal/LegalDocumentLayout'
import { PRIVACY_POLICY_HTML } from '../data/legal-document-content'

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout badge="Legal" icon={Shield} title="Privacy Policy">
      <LegalDocumentBody html={PRIVACY_POLICY_HTML} />
    </LegalDocumentLayout>
  )
}