import type { BusinessInfo } from '@/lib/types';

type StorySectionProps = {
  businessInfo: BusinessInfo;
};

export function StorySection({ businessInfo }: StorySectionProps) {
  return (
    <section id="story" className="section-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">The Story</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ash sm:text-5xl">
            Built from place, not from generic restaurant trends.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[#dec6a7]">
          <p>{businessInfo.story}</p>
          <p>
            The direction for this site leans into the identity of Katahariya as a place people
            connect with katiya. That gives the brand a much stronger position than a normal
            food website because it can speak through locality, ritual, and texture.
          </p>
          <div className="glass-panel rounded-[2rem] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">Brand Notes</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {['Charcoal heat', 'Clay-pot memory', 'Madhesh identity'].map((note) => (
                <div key={note} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl text-turmeric">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
