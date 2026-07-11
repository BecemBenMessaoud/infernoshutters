const legalProseClassName =
  'legal-prose text-sm leading-relaxed text-gray-700 sm:text-base [&_a]:text-inferno-500 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-inferno-600 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy-900 [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-navy-900 [&_h4]:mb-2 [&_h4]:mt-6 [&_h4]:text-base [&_h4]:font-semibold [&_h4]:text-navy-900 [&_li]:mb-2 [&_p]:mb-4 [&_strong]:font-semibold [&_strong]:text-navy-900 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul_ul]:mt-2 [&_ul_ul]:list-disc'

type LegalDocumentBodyProps = {
  html: string
}

export function LegalDocumentBody({ html }: LegalDocumentBodyProps) {
  return (
    <div
      className={`${legalProseClassName} rounded-2xl bg-[#f8f7f4] p-6 shadow-sm sm:p-8 lg:p-10`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}