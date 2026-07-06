export const PRODUCT_OVERVIEW_CARDS = [
  {
    id: 'standard-security',
    title: 'Standard Security Shutter',
    description:
      'A durable, application-style retractable shutter designed for reliable everyday protection. Ideal for residential windows, doors, and small commercial openings.',
    image: '/images/products/overview-standard.png',
    illustration: '/images/products/standard-security.png',
    detailHref: '/products/standard-security',
  },
  {
    id: 'hurricane-storm',
    title: 'Hurricane/ Storm Shutter',
    description:
      'Built to withstand powerful winds and flying debris. A code-ready solution for severe weather, coastal environments, and storm-prone regions.',
    image: '/images/products/overview-hurricane-storm.png',
    illustration: '/images/products/hurricane-storm.png',
    detailHref: '/products/hurricane-storm',
  },
  {
    id: 'heavy-duty',
    title: 'Heavy-Duty Security Shutter',
    description:
      'Premium-grade shutters with reinforced construction for maximum security, theft deterrence, and peace of mind in high-risk areas.',
    image: '/images/products/overview-heavy-duty.png',
    illustration: '/images/products/heavy-duty-security.png',
    detailHref: '/products/heavy-duty',
  },
  {
    id: 'fire-resistant',
    title: 'Fire-Resistant Shutter',
    description:
      'Engineered for fire resistance and ember protection, helping create a defensible perimeter while offering security and insulation benefits.',
    image: '/images/products/overview-fire-resistant.png',
    illustration: '/images/products/fire-resistant.png',
    detailHref: '/products/fire-resistant',
  },
] as const


export type ProductDetailSlug =
  | 'standard-security'
  | 'hurricane-storm'
  | 'heavy-duty'
  | 'fire-resistant'

export const PRODUCT_IMAGES: Record<ProductDetailSlug, string> = {
  'standard-security': PRODUCT_OVERVIEW_CARDS[0].image,
  'hurricane-storm': PRODUCT_OVERVIEW_CARDS[1].image,
  'heavy-duty': PRODUCT_OVERVIEW_CARDS[2].image,
  'fire-resistant': PRODUCT_OVERVIEW_CARDS[3].image,
}

export const PRODUCT_COMPARISON_ROWS = [
  {
    shutterType: 'Hurricane / Storm Shutter',
    slatType: 'End-retention / hurricane-rated slat I4500, I5500, I5600',
    mainPurpose:
      'Protects openings from hurricane-force winds, flying debris, hail, monsoon conditions, and severe weather',
    bestFor:
      'Residential and commercial properties in areas exposed to hurricanes, high winds, hail, monsoons, heavy rain, and severe storm conditions',
    keyFeatures:
      'Impact-rated options, strong wind resistance, reinforced slats/end retention, weather protection, added security, and reduced damage risk',
    notes:
      'Depending on the model and application, the shutter may need to meet specific hurricane, impact, or local code requirements',
  },
  {
    shutterType: 'Fire-Resistant Shutter',
    slatType: 'Fire-rated slat I4400, I4000, I4500, I5500, I5600',
    mainPurpose: 'Helps protect glass from breaking, fire exposure and radiant heat',
    bestFor: 'Wildfire-prone homes, commercial buildings, exterior openings',
    keyFeatures:
      'Fire-rated materials, heat resistance, motorized options, emergency/manual override available',
    notes: 'Rating depends on the product and testing standards',
  },
  {
    shutterType: 'Standard Security Shutter',
    slatType: 'Standard aluminum slat I4000, I4400, I4500, I5000, I5300, I5400, I5610, I5620',
    mainPurpose:
      'Everyday security, comfort, and energy efficiency in a general-purpose shutter designed for reliable protection.',
    bestFor: 'Retail stores, offices, residential openings, and lower-risk areas',
    keyFeatures:
      'Security protection, noise reduction, improved insulation, helps lower utility costs, clean appearance, cost-effective',
    notes:
      'A great option for customers who want added protection while also improving comfort and reducing energy usage',
  },
  {
    shutterType: 'Heavy-Duty Security Shutter',
    slatType: 'Heavy-duty security slat I4500, I5500, I5600, I5620, I5610',
    mainPurpose: 'Strong security protection against break-ins and forced entry and deterrent',
    bestFor: 'Storefronts, dispensaries, high-risk areas, commercial properties',
    keyFeatures: 'Stronger slats, reinforced tracks, high durability, motorized or manual options',
    notes: 'Best choice when maximum security is the priority',
  },
] as const