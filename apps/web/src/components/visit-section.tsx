import type { BusinessInfo } from '@/lib/types';

import { Reveal } from './reveal';

type VisitSectionProps = {
  businessInfo: BusinessInfo;
};

export function VisitSection({ businessInfo }: VisitSectionProps) {
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
    `${businessInfo.name}, ${businessInfo.addressLine}, ${businessInfo.district}, Nepal`,
  )}&output=embed`;
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappPhone.replace(/[^0-9]/g, '')}`;

  return (
    <section id="visit" className="section-light visit-band">
      <div className="site-shell py-20 lg:py-28">
        <Reveal>
          <div className="section-heading-wrap">
            <p className="section-label text-[#a3472f]">Visit Us</p>
            <h2 className="section-title text-[#2d2824]">Come to the family home where the handi still matters.</h2>
            <p className="section-copy text-[#5c5147]">
              This final block now combines directions, contact, reservation, and collaboration into
              one cleaner closing section instead of scattering important information around the site.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <div className="visit-card mithila-panel">
              <div className="feature-meta-row">
                <span>Location</span>
                <span>Katahariya-5, Rautahat</span>
              </div>
              <div className="responsive-video-shell mt-6 overflow-hidden rounded-[1.6rem] border border-[#d9c7b7]">
                <iframe
                  title="Google map for Kameshwar Meat House"
                  src={mapEmbed}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#a3472f]">Address</p>
                  <p className="mt-3 text-base leading-7 text-[#5c5147]">
                    {businessInfo.addressLine}, {businessInfo.municipality}, {businessInfo.district}, Nepal
                  </p>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#a3472f]">Contact</p>
                  <p className="mt-3 text-base leading-7 text-[#5c5147]">
                    {businessInfo.primaryPhone}
                    <br />
                    {businessInfo.whatsappPhone}
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href={businessInfo.mapsUrl} className="visit-cta-primary" target="_blank" rel="noreferrer">
                  Open Google Maps
                </a>
                <a href={whatsappUrl} className="visit-cta-secondary" target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.08}>
              <div className="visit-card visit-card-dark">
                <p className="section-label text-[#ffdb58]">Reserve Your Table</p>
                <h3 className="mt-4 font-display text-5xl leading-[0.95] text-[#fff7ee]">
                  Call to reserve before you arrive.
                </h3>
                <p className="mt-5 text-base leading-8 text-[#e0d3c6]">
                  For table reservation, call directly and the family can help you plan your visit.
                </p>
                <a href="tel:9807255399" className="reserve-call-link mt-8 inline-flex">
                  Call 9807255399
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="visit-card">
                <p className="section-label text-[#a3472f]">Collaborate With Us</p>
                <h3 className="mt-4 font-display text-4xl leading-tight text-[#2d2824]">
                  For creators, partnerships, and media opportunities.
                </h3>
                <p className="mt-5 text-base leading-8 text-[#5c5147]">
                  If you want to feature the restaurant, collaborate on campaigns, or discuss
                  approved media use, reach out directly by email.
                </p>
                <a
                  href="mailto:sagarkumarjayswal98072@gmail.com"
                  className="collab-email-link mt-6 inline-flex"
                >
                  sagarkumarjayswal98072@gmail.com
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
