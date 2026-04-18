import type { BusinessInfo } from '@/lib/types';

type StorySectionProps = {
  businessInfo: BusinessInfo;
};

export function StorySection({ businessInfo }: StorySectionProps) {
  const paragraphs = businessInfo.storyParagraphs?.length
    ? businessInfo.storyParagraphs
    : [businessInfo.story];
  const highlights = businessInfo.storyHighlights ?? [];

  return (
    <section id="story" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-panel rounded-[2.5rem] p-7 sm:p-8 lg:sticky lg:top-28 lg:h-fit">
          <p className="section-kicker">The Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ash sm:text-5xl">
            {businessInfo.storyTitle ?? 'Built from place, memory, and family continuity.'}
          </h2>
          <p className="mt-6 text-base leading-8 text-[#d9c0a0]">
            The brand is strongest when it speaks like a family legacy, not a generic restaurant.
            So this section now reads like an origin story, a handover, and a living food tradition.
          </p>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Legacy Line</p>
            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-turmeric" />
                <div>
                  <p className="font-display text-2xl text-ash">Amrililal Sah</p>
                  <p className="mt-1 text-sm leading-6 text-[#d9c0a0]">Originator of the evening-fire cooking culture behind the dish.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#d9c0a0]" />
                <div>
                  <p className="font-display text-2xl text-ash">Kameshwar Sah</p>
                  <p className="mt-1 text-sm leading-6 text-[#d9c0a0]">Built the restaurant around that local demand and family reputation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#a8653d]" />
                <div>
                  <p className="font-display text-2xl text-ash">Sagar Kumar Jayswal</p>
                  <p className="mt-1 text-sm leading-6 text-[#d9c0a0]">Helping carry the restaurant into the next generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {paragraphs.map((paragraph, index) => (
            <article key={paragraph} className="glass-panel rounded-[2.5rem] p-7 sm:p-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-turmeric/30 bg-[#1a1310] font-display text-xl text-turmeric">
                  0{index + 1}
                </div>
                <p className="text-lg leading-8 text-[#dec6a7]">{paragraph}</p>
              </div>
            </article>
          ))}
          <div className="grid gap-4 md:grid-cols-3">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
                <p className="text-xs uppercase tracking-[0.26em] text-white/40">{highlight.title}</p>
                <p className="mt-4 font-display text-3xl leading-tight text-ash">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
