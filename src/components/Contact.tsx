import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';
import SectionTitle from './SectionTitle';
import { OFFICES, CONTACT_DETAILS, SERVICE_AREAS } from '../lib/constants';

const inputStyles =
  'w-full min-h-[48px] rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-steel-600 focus:outline-none focus:ring-1 focus:ring-steel-600';

const labelStyles = 'mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-700';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form endpoint / CRM of choice.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Get In Touch" title="Request a Technical Consultation" />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: office info */}
          <div className="space-y-8">
            {OFFICES.map((office) => (
              <div key={office.city} className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-steel-600" aria-hidden="true" />
                <div>
                  <h3 className="text-base font-semibold text-navy-900">{office.city}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{office.address}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-steel-600" aria-hidden="true" />
              <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-sm text-slate-600 hover:text-steel-600">
                {CONTACT_DETAILS.email}
              </a>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-steel-600" aria-hidden="true" />
              <a href={`tel:${CONTACT_DETAILS.phone.replace(/\s/g, '')}`} className="text-sm text-slate-600 hover:text-steel-600">
                {CONTACT_DETAILS.phone}
              </a>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 bg-[#F2F2F2] p-8 shadow-sm">
            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-navy-900">Request received.</h3>
                <p className="mt-2 text-sm text-slate-600">
                  A member of our technical sales team will respond within one business day.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className={labelStyles}>Full Name</label>
                  <input id="name" name="name" type="text" required className={inputStyles} />
                </div>

                <div>
                  <label htmlFor="company" className={labelStyles}>Company</label>
                  <input id="company" name="company" type="text" required className={inputStyles} />
                </div>

                <div>
                  <label htmlFor="email" className={labelStyles}>Work Email</label>
                  <input id="email" name="email" type="email" required className={inputStyles} />
                </div>

                <div>
                  <label htmlFor="serviceArea" className={labelStyles}>Service Area of Interest</label>
                  <select id="serviceArea" name="serviceArea" required defaultValue="" className={inputStyles}>
                    <option value="" disabled>
                      Select a service area
                    </option>
                    {SERVICE_AREAS.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelStyles}>Message</label>
                  <textarea id="message" name="message" rows={4} required className={inputStyles} />
                </div>

                <Button type="submit" variant="dark" className="w-full">
                  Submit Request
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}