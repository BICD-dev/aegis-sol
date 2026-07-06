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

          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Aegis Oilfield Services Limited is an independently owned oilfield services
            company headquartered in Port Harcourt, Nigeria. We support operators and
            EPC contractors across the Niger Delta with dependable well services,
            pipeline integrity solutions, and HSE advisory backed by internationally
            recognised standards.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
            Built on technical reliability and an uncompromising approach to safety, our
            certified teams combine deep local operating knowledge with disciplined
            processes that help clients execute projects confidently, efficiently, and
            safely.
            </p>

            <blockquote className="mt-8 border-l-4 border-steel-600 pl-4 italic text-slate-700">
            "To be the most trusted independent oilfield services partner in the Niger
            Delta, recognised as much for our safety record as for our technical
            performance."
            </blockquote>
        </div>
      </div>
    </section>
  );
}