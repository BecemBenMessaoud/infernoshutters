export const FORMSPREE_QUOTE_ENDPOINT = 'https://formspree.io/f/mwvgqbbk'

export const QUOTE_TYPE_OPTIONS = [
  { value: 'commercial', label: 'Commercial' },
  { value: 'residential', label: 'Residential' },
] as const

export const QUOTE_INSTALLATION_TYPE_OPTIONS = [
  { value: 'self-install', label: 'Self Install' },
  { value: 'own-contractor', label: 'Have Own Contractor' },
  { value: 'need-dealer', label: 'Need a Dealer' },
] as const

export const QUOTE_PRODUCT_INTEREST_OPTIONS = [
  { value: 'fire-resistant-shutter', label: 'Fire-Resistant Shutter' },
  { value: 'standard-security-shutter', label: 'Standard Security Shutter' },
  { value: 'hurricane-storm-shutter', label: 'Hurricane & Storm Shutter' },
  { value: 'heavy-duty-shutter', label: 'Heavy-Duty Shutter' },
] as const

export const QUOTE_REFERRAL_SOURCE_OPTIONS = [
  { value: 'google-search', label: 'Google Search Result' },
  { value: 'youtube', label: 'Youtube' },
  { value: 'facebook-ads', label: 'Facebook Ads' },
  { value: 'referral', label: 'Referral' },
  { value: 'previous-client', label: 'Previous Client' },
  { value: 'online-ad', label: 'Online Ad' },
  { value: 'other', label: 'Other' },
] as const
