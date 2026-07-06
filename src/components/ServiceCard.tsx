import type { Service } from '../types/service';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* Top accent bar — turns Steel Blue on hover */}
      <div className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors duration-300 group-hover:bg-steel-600" />

      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-steel-600/10 text-steel-600 transition-colors duration-300 group-hover:bg-steel-600 group-hover:text-white">
        <Icon size={24} strokeWidth={2} aria-hidden="true" />
      </div>

      <h3 className="text-xl font-semibold text-navy-900">{service.title}</h3>
      <p className="mt-3 text-base font-normal leading-relaxed text-slate-600">
        {service.description}
      </p>
    </div>
  );
}