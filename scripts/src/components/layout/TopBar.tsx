import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react'
import { EMAIL, PHONE } from '../../data/site'

export function TopBar() {
  return (
    <div className="bg-[#1a1a2e] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6">
          <a href={`tel:${PHONE.replace(/\D/g, '')}`} className="flex items-center gap-1.5 transition-colors hover:text-inferno-400">
            <Phone className="h-3 w-3" />
            <span>{PHONE}</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="hidden items-center gap-1.5 transition-colors hover:text-inferno-400 sm:flex">
            <Mail className="h-3 w-3" />
            <span>{EMAIL}</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" aria-label="Facebook" className="transition-colors hover:text-inferno-400"><Facebook className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-inferno-400"><Twitter className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-inferno-400"><Linkedin className="h-3.5 w-3.5" /></a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-inferno-400"><Instagram className="h-3.5 w-3.5" /></a>
        </div>
      </div>
    </div>
  )
}
