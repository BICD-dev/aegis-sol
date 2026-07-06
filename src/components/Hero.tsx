import Button from './Button';
import { TRUST_STATS } from '../lib/constants';
import heroBg from '../assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-950">
      {/* Subtle technical grid vector pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-20 lg:pt-24">
        {/* Left: text hierarchy (7 cols) */}
        <div className="lg:col-span-7">
          <span className="mb-4 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-500">
            ISO 9001:2015 &amp; ISO 45001:2018 Certified
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Engineered for Precision. Delivered with Absolute Safety.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Aegis Oilfield Services Limited delivers world-class well engineering,
            asset integrity management, and technical support services to
            Nigeria&rsquo;s energy sector.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a href="#contact">
              <Button variant="primary" className="w-full sm:w-auto">
                Request Technical Consultation
              </Button>
            </a>
            <a href="#services">
              <Button variant="secondary" className="w-full sm:ml-4 sm:w-auto">
                View Capabilities
              </Button>
            </a>
          </div>
        </div>

        {/* Right: industrial imagery (5 cols) */}
        <div className="relative mt-12 lg:col-span-5 lg:mt-0">
          <div className="relative h-64 overflow-hidden rounded-xl lg:h-full lg:min-h-[380px]">
            <img
              src={heroBg}
              alt="Aegis OSL field engineers at an onshore operations site in the Niger Delta"
              className="h-full w-full object-cover"
            />
            {/* Cold blue grade overlay for WCAG AAA text contrast */}
            <div className="absolute inset-0 bg-navy-900/40" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Trust banner */}
      <div className="relative mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10 pt-8 sm:flex-row sm:divide-x sm:divide-y-0">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="py-4 first:pt-0 sm:px-8 sm:py-0 sm:first:pl-0">
              <div className={`text-2xl font-bold ${stat.accent ? 'text-amber-500' : 'text-white'}`}>
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}