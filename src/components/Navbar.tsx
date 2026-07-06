import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { COMPANY, NAV_LINKS } from '../lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center text-xl font-bold tracking-wider text-navy-900">
          {COMPANY.shortName}
          <span className="mx-1.5 font-normal text-gray-300">|</span>
          <span className="text-steel-600">{COMPANY.suffix}</span>
        </a>

        {/* Desktop anchor links */}
        <div className="hidden space-x-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-steel-600"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden lg:block">
          <Button variant="dark" className="px-4 py-2 text-sm min-h-0">
            Contact
          </Button>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-lg text-navy-900 lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile overlay sheet */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 lg:hidden">
          <div className="flex flex-col space-y-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center text-base font-medium text-slate-700 hover:text-steel-600"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="pt-2">
              <Button variant="dark" className="w-full">
                Contact
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}