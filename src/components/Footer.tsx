import { COMPANY } from '../lib/constants';

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Core Values', href: '#core-values' },
  ],
  Services: [
    { label: 'Well Engineering & Intervention', href: '#services' },
    { label: 'Asset Integrity Management', href: '#services' },
    { label: 'EPC Pipeline Services', href: '#services' },
  ],
  'Safety & Compliance': [
    { label: 'HSE Commitment', href: '#hse' },
    { label: 'ISO 9001:2015', href: '#' },
    { label: 'ISO 45001:2018', href: '#' },
  ],
  'Legal & Contact': [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 pb-8 pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{heading}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/70 hover:text-amber-500">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Registered and compliant under the NCDMB Nigerian Content Act.</p>
        </div>
      </div>
    </footer>
  );
}