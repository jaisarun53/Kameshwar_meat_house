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
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">The Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ash sm:text-5xl">
            {businessInfo.storyTitle ?? 'Built from place, memory, and family continuity.'}
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#dec6a7]">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Identity Pillars</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl text-turmeric">{highlight.title}</p>
                  <p className="mt-3 text-sm leading-6 text-[#d9c0a0]">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
