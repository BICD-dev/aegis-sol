export default function Safety() {
  return (
    <section id="hse" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-navy-900 p-8 text-white md:p-12">
          {/* Diagonal amber chevron pattern, mimicking industrial safety striping */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-[0.12] md:w-1/3"
            style={{
              backgroundImage:
                'repeating-linear-gradient(135deg, var(--color-amber-500) 0px, var(--color-amber-500) 14px, transparent 14px, transparent 28px)',
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-2xl">
            <span className="mb-4 inline-block rounded bg-amber-500 px-3 py-1 text-xs font-black uppercase tracking-widest text-navy-900">
              Safety First Philosophy
            </span>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Our Target is Simple: Zero Incidents. Every Day.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/80">
              At Aegis OSL, safety is not a metric; it is our operational
              culture. Our activities are executed under strict alignment with
              ISO 45001 management protocols, ensuring every asset maintains
              structural integrity and every field worker returns home safely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}