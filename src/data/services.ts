export const INSTALLATION_TIMELINE = [
  'Site Assessment & Measurement',
  'Engineering Review',
  'Custom Fabrication',
  'Delivery & Prep',
] as const

export const INSTALLATION_INCLUDED = [
  'Certified installation crew, site cleanup',
  'Complete system briefing',
  'Warranty registration',
  'Final quality check',
] as const

export const INSTALLATION_TRUST_BADGES = [
  'Certified Installation Crew',
  'Structural Performance Guarantee',
  'Warranty-Backed Workmanship',
] as const

export const REPAIR_SERVICE_CARDS = [
  {
    title: 'Emergency Repairs',
    description:
      'Fast-response service for storm damage, motor failure, and stuck shutters when protection cannot wait.',
    price: 'Starting at $150',
    tone: 'brown' as const,
    iconSrc: '/images/services/repair-emergency.png',
  },
  {
    title: 'Annual Maintenance Plans',
    description:
      'Scheduled tune-ups, lubrication, and system checks to keep shutters operating smoothly year-round.',
    price: 'Starting at $300',
    tone: 'blue' as const,
    iconSrc: '/images/services/repair-annual.png',
  },
  {
    title: 'Preventive Inspections',
    description:
      'Detailed inspections before fire and storm season to catch wear, corrosion, or alignment issues early.',
    price: 'Starting at $200',
    tone: 'olive' as const,
    iconSrc: '/images/services/repair-prevention.png',
  },
] as const

export const FABRICATION_FEATURES = [
  {
    title: 'Site Assessment',
    description: 'On-site evaluation of openings, structure, and exposure requirements.',
    icon: 'user' as const,
  },
  {
    title: 'Custom Engineering',
    description: 'Tailored shutter profiles, motorization, and mounting solutions.',
    icon: 'cog' as const,
  },
  {
    title: 'Precision Fitment',
    description: 'Exact measurements for non-standard openings and retrofits.',
    icon: 'ruler' as const,
  },
  {
    title: 'Compliance & Reinforcement',
    description: 'Code-aligned installs with reinforced guides and structural support.',
    icon: 'shield' as const,
  },
] as const

export const COMMERCIAL_CARDS = [
  {
    title: 'Multi-Site Programs',
    description:
      'Coordinated roll shutter deployment across retail, industrial, and portfolio properties.',
    iconSrc: '/images/services/commercial-multi-site.png',
    tone: 'blue' as const,
  },
  {
    title: 'Contractor Partnerships',
    description:
      'Builder and GC programs with dedicated specs, pricing, and installation support.',
    iconSrc: '/images/services/commercial-contractor.png',
    tone: 'brown' as const,
  },
] as const

export const COMMERCIAL_PROPERTY_FEATURES = [
  {
    title: 'Volume Pricing',
    description: 'Scaled pricing for property managers and multi-unit portfolios.',
    icon: 'file' as const,
  },
  {
    title: 'Dedicated Account Support',
    description: 'Single point of contact for scheduling, service, and documentation.',
    icon: 'briefcase' as const,
  },
] as const