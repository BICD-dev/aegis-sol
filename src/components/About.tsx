import SectionTitle from './SectionTitle';
import teamImg from '../assets/team.jpg';

export default function About() {
  return (
    <section id="about" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left: corporate image */}
        <div className="order-2 lg:order-1">
          <img
            src={teamImg}
            alt="Certified Aegis OSL engineers reviewing technical schematics"
            className="aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
          />
        </div>

        {/* Right: editorial copy */}
        <div className="order-1 lg:order-2">
          <SectionTitle eyebrow="About Aegis OSL" title="Built on Nigerian Ground. Held to Global Standards." />

          <p className="mt-6 text-base font-normal leading-relaxed text-slate-600">
            For over a decade, Aegis Oilfield Services Limited has partnered with
            IOCs, indigenous operators, and EPC contractors across the Niger
            Delta to keep critical infrastructure running safely and efficiently.
            Our engineers hold the same certifications demanded on any major
            international asset &mdash; applied with the local regulatory
            fluency that only an indigenous partner can offer.
          </p>

          <p className="mt-4 text-base font-normal leading-relaxed text-slate-600">
            From wellhead to pipeline, we combine hands-on field discipline with
            rigorous documentation, giving procurement and HSE teams a partner
            they can audit with confidence.
          </p>

          <blockquote className="mt-8 border-l-4 border-steel-600 pl-4 italic text-slate-700">
            &ldquo;Driving energy transition and structural optimization across
            sub-Saharan Africa through indigenous technical excellence.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}