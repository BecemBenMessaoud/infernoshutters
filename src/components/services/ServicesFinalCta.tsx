import { ServiceCtaButton } from './ServiceCtaButton'

export function ServicesFinalCta() {
  return (
    <section className="bg-navy-900 py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <ServiceCtaButton to="/quote">Book Installation Assessment</ServiceCtaButton>
          <ServiceCtaButton>Request Service Call</ServiceCtaButton>
        </div>
      </div>
    </section>
  )
}