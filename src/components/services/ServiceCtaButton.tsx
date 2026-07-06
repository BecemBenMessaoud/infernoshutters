import { Link } from 'react-router-dom'

type ServiceCtaButtonProps = {
  to?: string
  children: React.ReactNode
  className?: string
}

export function ServiceCtaButton({
  to = '/contact',
  children,
  className = '',
}: ServiceCtaButtonProps) {
  return (
    <Link
      to={to}
      className={`inline-block rounded-md bg-inferno-500 px-8 py-3 text-sm font-bold text-white transition hover:bg-inferno-600 sm:px-10 ${className}`}
    >
      {children}
    </Link>
  )
}