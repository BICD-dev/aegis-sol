import { BadgeCheck, Truck, MapPinned, ShieldCheck } from 'lucide-react';
import SectionTitle from './SectionTitle';

const INDICATORS = [
  {
    icon: ShieldCheck,
    title: 'Safety-First Culture',
    description:
      'Every project follows our Zero Compromise HSE philosophy with stop-work authority and disciplined safety procedures.',
  },
  {
    icon: BadgeCheck,
    title: 'ISO Certified',
    description:
      'Operating under ISO 9001 and ISO 45001 certified management systems for quality and occupational safety.',
  },
  {
    icon: MapPinned,
    title: 'Local Operating Expertise',
    description:
      'Extensive experience supporting operators and EPC contractors across the Niger Delta.',
  },
  {
    icon: Truck,
    title: 'Scalable Field Support',
    description:
      'Flexible teams, equipment, and logistics tailored to projects of varying sizes and complexity.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#F2F2F2] py-12 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: fixed value prop column */}
        <div>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="The Partner Procurement and HSE Teams Can Rely On"
          />
          <p className="mt-6 text-base font-normal leading-relaxed text-slate-600">
            Aegis OSL is built for teams who cannot afford surprises &mdash;
            technically, contractually, or on the safety record. Every
            engagement is backed by certified expertise, auditable compliance,
            and field experience specific to Nigeria&rsquo;s operating
            environment.
          </p>
        </div>

        {/* Right: indicator grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {INDICATORS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-gray-200 p-8 shadow-sm sm:border-none sm:p-0 sm:shadow-none"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-steel-600/10 text-steel-600">
                  <Icon size={24} strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900">{item.title}</h3>
                <p className="mt-2 text-base font-normal leading-relaxed text-slate-600">
                  {item.description}
                </p>
            </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}