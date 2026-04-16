import type { BusinessInfo } from '@/lib/types';

import { HeroFireScene } from './hero-fire-scene';

type HeroSectionProps = {
  businessInfo: BusinessInfo;
};

export function HeroSection({ businessInfo }: HeroSectionProps) {
  const mapsUrl = businessInfo.mapsUrl ?? '#visit';
  const quickFacts = [
    { label: 'Known for', value: 'Mutton Katiya' },
    { label: 'Location', value: 'Katahariya-5' },
    { label: 'Contact', value: businessInfo.primaryPhone },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="hero-ring left-[8%] top-20 h-40 w-40" />
      <div className="hero-ring right-[12%] top-10 h-64 w-64" />
      <div className="section-shell flex min-h-[90vh] flex-col items-center justify-center gap-12 py-16 lg:py-24">
        <div className="relative flex max-w-5xl flex-col items-center text-center">
          <p className="section-kicker">Katahariya, Rautahat, Nepal</p>
          <h1 className="mt-6 max-w-5xl font-display text-5xl leading-[0.95] text-ash sm:text-6xl lg:text-8xl">
            Smoke. Clay. Fire. <span className="text-turmeric">Katiya.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#d8c9b7] sm:text-lg">
            {businessInfo.tagline} Designed as a cinematic brand experience rooted in the
            food memory of Madhesh and the heat of the coal bed.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#menu"
              className="rounded-full bg-turmeric px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-soot transition hover:bg-ash"
            >
              Explore the menu
            </a>
            <a
              href={mapsUrl}
              className="rounded-full border border-white/15 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.24em] text-white/80 transition hover:border-turmeric/50 hover:text-turmeric"
            >
              Find us in Katahariya
            </a>
          </div>
          <div className="mt-12 grid w-full max-w-3xl gap-4 sm:grid-cols-3">
            {quickFacts.map((item) => (
              <div key={item.label} className="glass-panel rounded-3xl p-5 text-center">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">{item.label}</p>
                <p className="mt-3 font-display text-2xl text-ash">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-5xl">
          <div className="glass-panel hero-scene-shell relative overflow-hidden rounded-[2.25rem] p-4 shadow-glow">
            <div className="absolute inset-0 bg-smoke-gradient opacity-70" />
            <HeroFireScene />
          </div>
        </div>
      </div>
    </section>
  );
}
