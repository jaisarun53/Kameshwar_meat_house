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
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel overflow-hidden rounded-[2.5rem] p-0">
          <div className="grid gap-px bg-white/10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="bg-[linear-gradient(180deg,rgba(94,48,25,0.48),rgba(18,13,11,0.82))] p-7 sm:p-8">
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
            <div className="flex min-h-[320px] flex-col justify-end bg-[radial-gradient(circle_at_50%_35%,rgba(255,162,78,0.16),transparent_18%),linear-gradient(180deg,#15100e_0%,#0b0908_100%)] p-7 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white/45">Why visit</p>
              <p className="mt-4 font-display text-4xl leading-tight text-ash">
                A place where the dish, the family, and the town still feel connected.
              </p>
            </div>
          </div>
        </div>
        <div id="contact" className="glass-panel rounded-[2.5rem] p-7 sm:p-8">
          <p className="section-kicker">Before Launch</p>
          <h3 className="mt-4 font-display text-4xl leading-tight text-ash">
            What we still need from the family
          </h3>
          <div className="mt-8 space-y-4">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-turmeric/25 bg-[#1a1310] font-display text-lg text-turmeric">
                  {index + 1}
                </div>
                <p className="pt-1 text-base leading-7 text-[#ddc4a5]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
