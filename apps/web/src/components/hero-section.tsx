import type { BusinessInfo } from '@/lib/types';

import { HeroVideoBackground } from './hero-video-background';
import { Reveal } from './reveal';

type HeroSectionProps = {
  businessInfo: BusinessInfo;
};

export function HeroSection({ businessInfo }: HeroSectionProps) {
  return (
    <section id="top" className="hero-stage">
      <HeroVideoBackground />
      <div className="hero-stage-pattern" aria-hidden="true" />
      <div className="hero-stage-embers" aria-hidden="true">
        <span className="ember ember-one" />
        <span className="ember ember-two" />
        <span className="ember ember-three" />
        <span className="ember ember-four" />
      </div>

      <div className="site-shell min-h-[calc(100vh-5rem)] py-14 lg:py-20">
        <Reveal className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="hero-kicker-chip">The original taste of Katahariya</div>
          <p className="section-label mt-8 text-[#ffdb58]">Katahariya-5, Rautahat, Nepal</p>
          <h1 className="hero-title mx-auto mt-5 max-w-4xl font-display text-[#fff7ee]">
            The Authentic <span className="text-[#ffdb58]">Birthplace</span> Of Katiya.
          </h1>
          <p className="hero-copy mx-auto mt-7 max-w-3xl text-[#eadbcb]">
            Slow-cooked in clay pots over burning coals. A family legacy carried from the era of
            Amritlal Sah to Kameshwar Sah and Sagar Kumar Jayswal.
          </p>

          <div className="hero-actions mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#story"
              className="hero-primary-button"
            >
              Read our story
            </a>
            <a
              href="#featured"
              className="hero-primary-button"
            >
              Watch features
            </a>
          </div>
          <p className="hero-video-note mx-auto mt-6 max-w-2xl">
            Background video from the featured YouTube coverage, played muted.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
          {[
            ['Legacy', '30+ years'],
            ['Craft', 'Clay-pot fire'],
            ['Host', 'Family home'],
          ].map(([label, value], index) => (
            <Reveal key={label} delay={0.08 * (index + 1)}>
              <div className="hero-stat-card text-center">
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">{label}</p>
                <p className="mt-3 font-display text-3xl text-[#fff6ea]">{value}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="site-shell pb-10 lg:pb-16">
        <div className="heritage-strip">
          <span>Birthplace narrative rooted in Katahariya</span>
          <span>Mustard oil, clay handi, wood fire</span>
          <span>Amritlal Sah to Kameshwar Sah to Sagar Kumar Jayswal</span>
        </div>
      </div>
    </section>
  );
}
