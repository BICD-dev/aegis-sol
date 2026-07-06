import {
  ShieldCheck,
  Handshake,
  Award,
  Clock3,
  Leaf,
} from 'lucide-react';
import SectionTitle from './SectionTitle';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Safety First',
    description:
      'We maintain a goal-zero approach to incidents, empowering every team member with stop-work authority whenever safety is at risk.',
  },
  {
    icon: Handshake,
    title: 'Integrity',
    description:
      'We do what we say and communicate transparently, building trust through honesty, accountability, and dependable service.',
  },
  {
    icon: Award,
    title: 'Technical Excellence',
    description:
      'Continuous investment in certified people, training, and equipment enables us to consistently deliver high-quality engineering solutions.',
  },
  {
    icon: Clock3,
    title: 'Reliability',
    description:
      'We arrive prepared, on schedule, with the right personnel and equipment to keep projects moving safely and efficiently.',
  },
  {
    icon: Leaf,
    title: 'Respect for People & Environment',
    description:
      'We protect our workforce, local communities, and the environments where we operate through responsible operational practices.',
  },
];

export default function CoreValues() {
  return (
    <section
      id="core-values"
      className="bg-white py-12 md:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Core Values"
          title="The Principles That Guide Every Project"
        />

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600">
          At Aegis Oilfield Services Limited, our values shape every decision,
          every operation, and every client relationship. They define how we
          deliver safe, dependable, and technically sound services across the
          Niger Delta.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => {
            const Icon = value.icon;

            return (
              <article
                key={value.title}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-steel-600/30 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-steel-600/10 text-steel-600">
                  <Icon
                    size={24}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-navy-900">
                  {value.title}
                </h3>

                <p className="mt-3 leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}