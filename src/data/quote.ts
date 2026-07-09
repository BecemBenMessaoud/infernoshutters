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
  { value: 'rolling-shutter', label: 'Rolling Shutter' },
  { value: 'retractable-screens', label: 'Retractable Screens' },
  { value: 'security-screens', label: 'Security Screens' },
  { value: 'combination', label: 'Combination' },
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
