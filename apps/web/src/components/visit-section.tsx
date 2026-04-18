import type { BusinessInfo } from '@/lib/types';

type VisitSectionProps = {
  businessInfo: BusinessInfo;
};

export function VisitSection({ businessInfo }: VisitSectionProps) {
  const mapsUrl = businessInfo.mapsUrl ?? '#visit';
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappPhone.replace(/[^0-9]/g, '')}`;
  const checklist = businessInfo.launchChecklist ?? [];

  return (
    <section id="visit" className="section-shell py-24">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-panel rounded-[2rem] p-7 sm:p-8">
          <p className="section-kicker">Visit Us</p>
          <h2 className="mt-4 font-display text-4xl text-ash">Katahariya-5, Rautahat</h2>
          <div className="mt-8 space-y-4 text-base leading-8 text-[#ddc4a5]">
            <p>
              {businessInfo.addressLine}, {businessInfo.municipality}, {businessInfo.district},{' '}
              {businessInfo.country}
            </p>
            <p>Phone: {businessInfo.primaryPhone}</p>
            <p>WhatsApp: {businessInfo.whatsappPhone}</p>
            <p>Opening hours: {businessInfo.openingHours}</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-turmeric px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-soot"
            >
              Open map
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.24em] text-white/75"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div id="contact" className="glass-panel rounded-[2rem] p-7 sm:p-8">
          <p className="section-kicker">Before Launch</p>
          <h3 className="mt-4 font-display text-4xl text-ash">What we still need from the family</h3>
          <ul className="mt-8 space-y-4 text-base leading-7 text-[#ddc4a5]">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
