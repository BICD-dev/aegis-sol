export const COMPANY = {
  name: 'Aegis Oilfield Services Limited',
  shortName: 'AEGIS',
  suffix: 'OSL',
  tagline: 'Upstream Excellence. Zero Compromise.',
} as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Core Values', href: '#core-values' },
  { label: 'HSE', href: '#hse' },
] as const;

export const TRUST_STATS = [
  { value: '1,200+', label: 'LTI-Free Field Operational Days', accent: true },
  { value: '98.7%', label: 'Asset Operational Uptime', accent: false },
  { value: '100%', label: 'Nigerian Content (NOGICD) Compliant', accent: false },
] as const;

export const CERTIFICATIONS = [
  'ISO 9001 Certified',
  'ISO 45001 Certified',
  '1,200+ Incident-Free Days',
] as const;

export const OFFICES = [
  {
    city: 'Port Harcourt (Operations Base)',
    address: 'Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria',
  },
] as const;

export const CONTACT_DETAILS = {
  email: ' info@aegisosl.example',
  phone: '+234 800 000 0000',
} as const;

export const SERVICE_AREAS = [
  'Well Engineering',
  'Asset Integrity',
  'Procurement',
  'General Inquiry',
] as const;