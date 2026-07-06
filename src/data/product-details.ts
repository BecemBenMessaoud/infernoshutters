import type { ProductModelData } from '../components/products/ProductModelCard'

export type ProductFeatureIconId =
  | 'home'
  | 'volume'
  | 'dollar'
  | 'cost'
  | 'wind'
  | 'impact'
  | 'storm'
  | 'lock'
  | 'shield'
  | 'building'
  | 'tag'
  | 'flame'
  | 'wildfire'
  | 'security'

export type ProductDetailContent = {
  heroTitle: string
  features: Array<{
    icon: ProductFeatureIconId
    title: string
    description: string
  }>
  bannerLabel: string
  description: string
  models: ProductModelData[]
}

const standardModels: ProductModelData[] = [
  {
    model: 'I 4000',
    subtitle: 'ROLL-FORMED ALUMINUM WITH REGULAR DENSITY FOAM FILLING',
    sheetImage: '/images/products/models/i4000.png',
  },
  {
    model: 'I 4500',
    subtitle: 'DOUBLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/i4500.png',
  },
  {
    model: 'I 5000',
    subtitle: 'ROLL-FORMED ALUMINUM WITH REGULAR DENSITY FOAM FILLING',
    sheetImage: '/images/products/models/i5000.png',
  },
  {
    model: 'I 5300',
    subtitle: 'CLEAR POLYCARBONATE WITH CURVED DESIGN',
    sheetImage: '/images/products/models/i5300.png',
  },
  {
    model: 'I 5400',
    subtitle: 'ROLL-FORMED ALUMINUM WITH ULTRA HARD RESIN CORE',
    sheetImage: '/images/products/models/i5400.png',
  },
  {
    model: 'I 5500',
    subtitle: 'DOUBLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/i5500.png',
  },
  {
    model: 'I 5600',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/i5600.png',
  },
]

const stormModels: ProductModelData[] = [
  {
    model: 'I 4500',
    subtitle: 'DOUBLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/hurricane-i4500.png',
  },
  {
    model: 'I 5600',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/hurricane-i5600.png',
  },
]

const heavyDutyModels: ProductModelData[] = [
  {
    model: 'I 4500',
    subtitle: 'DOUBLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/heavy-duty-i4500.png',
  },
  {
    model: 'I 5600',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/heavy-duty-i5600.png',
  },
  {
    model: 'I 5610',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM SMALL PERFORATIONS',
    sheetImage: '/images/products/models/heavy-duty-i5610.png',
  },
  {
    model: 'I 5620',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM LARGE PERFORATIONS',
    sheetImage: '/images/products/models/heavy-duty-i5620.png',
  },
]

const fireResistantModels: ProductModelData[] = [
  {
    model: 'I 4000',
    subtitle: 'ROLL-FORMED ALUMINUM WITH REGULAR DENSITY FOAM FILLING',
    sheetImage: '/images/products/models/fire-resistant-i4000.png',
  },
  {
    model: 'I 4400',
    subtitle: 'ROLL-FORMED ALUMINUM WITH ULTRA HARD RESIN CORE',
    sheetImage: '/images/products/models/fire-resistant-i4400.png',
  },
  {
    model: 'I 4500',
    subtitle: 'DOUBLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/fire-resistant-i4500.png',
  },
  {
    model: 'I 5600',
    subtitle: 'SINGLE WALL EXTRUDED ALUMINUM',
    sheetImage: '/images/products/models/fire-resistant-i5600.png',
  },
]

export const PRODUCT_DETAIL_CONTENT: Record<string, ProductDetailContent> = {
  'standard-security': {
    heroTitle: 'Standard Security Shutter',
    features: [
      { icon: 'home', title: 'Everyday Security', description: 'Helps protect windows and doors.' },
      { icon: 'volume', title: 'Noise Reduction', description: 'Reduces outside noise for added comfort.' },
      { icon: 'dollar', title: 'Energy Efficiency', description: 'Helps lower utility costs.' },
      { icon: 'cost', title: 'Cost-Effective', description: 'Practical protection at a lower cost.' },
    ],
    bannerLabel: 'Standard Security Shutter',
    description:
      'Standard security shutters are a practical option for everyday protection, privacy, and comfort. They help reduce noise, improve insulation, and provide reliable security at a cost-effective price point for homes, storefronts, and light commercial spaces.',
    models: standardModels,
  },
  'hurricane-storm': {
    heroTitle: 'Hurricane / Storm Shutter',
    features: [
      { icon: 'storm', title: 'Storm Protection', description: 'Built for severe weather conditions.' },
      { icon: 'impact', title: 'Impact Resistance', description: 'Helps protect against flying debris.' },
      { icon: 'wind', title: 'Wind Protection', description: 'Designed for high-wind areas.' },
      { icon: 'lock', title: 'Added Security', description: 'Provides protection when closed.' },
    ],
    bannerLabel: 'Hurricane/ Storm Shutter',
    description:
      'Hurricane and storm shutters are engineered to protect your property against high winds, heavy rain, hail, and flying debris. Ideal for coastal and storm-prone areas, these systems provide reliable defense when severe weather threatens your home or business.',
    models: stormModels,
  },
  'heavy-duty': {
    heroTitle: 'Heavy-Duty Security Shutter',
    features: [
      { icon: 'lock', title: 'Maximum Security', description: 'Designed for strong protection.' },
      { icon: 'shield', title: 'Forced-Entry Resistance', description: 'Reinforced against break-ins.' },
      { icon: 'building', title: 'Commercial Strength', description: 'Ideal for high-risk locations.' },
      { icon: 'tag', title: 'Durable Build', description: 'Made for heavy use and reliability.' },
    ],
    bannerLabel: 'Heavy-Duty Security Shutter',
    description:
      'Heavy-duty security shutters deliver maximum protection against forced entry, vandalism, and break-ins. Built for storefronts, dispensaries, warehouses, and other high-risk locations where strength and durability are essential.',
    models: heavyDutyModels,
  },
  'fire-resistant': {
    heroTitle: 'Fire-Resistant Shutter',
    features: [
      { icon: 'flame', title: 'Fire Protection', description: 'Proven ember and heat resistance.' },
      { icon: 'wildfire', title: 'Wildfire Defense', description: 'Helps protect vulnerable openings.' },
      { icon: 'security', title: 'Advanced Security', description: 'Reinforced against intruders.' },
      { icon: 'shield', title: 'Durable & Reliable', description: 'Built for long-term performance.' },
    ],
    bannerLabel: 'Fire-Resistant Shutter',
    description:
      'Fire-resistant shutters are designed to help protect your property against wildfire exposure, radiant heat, flames, and ember intrusion. They support home hardening strategies in wildfire-prone communities while providing security and peace of mind.',
    models: fireResistantModels,
  },
}
