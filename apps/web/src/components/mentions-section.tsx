import type { MediaMention } from '@/lib/types';

import { Reveal } from './reveal';

type MentionsSectionProps = {
  mentions: MediaMention[];
};

const FACEBOOK_REEL_URL =
  'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F995647378584539%2F&show_text=false&width=800';

export function MentionsSection({ mentions }: MentionsSectionProps) {
  return (
    <section id="featured" className="section-light featured-band">
      <div className="site-shell py-20 lg:py-28">
        <Reveal>
          <div className="section-heading-wrap">
            <p className="section-label text-[#ffdb58]">Featured</p>
            <h2 className="section-title text-[#fff6ea]">
              Press, creators, and the voices helping carry the story.
            </h2>
            <p className="section-copy text-[#d7c6b7]">
              The featured area now keeps both major videos side by side so the social proof feels
              intentional. Creator credit remains visible and easy to understand.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 xl:grid-cols-2">
          <Reveal>
            <div className="video-feature-card mithila-panel">
              <div className="feature-meta-row">
                <span>Facebook reel</span>
                <span>Featured by food creators</span>
              </div>
              <div className="responsive-video-shell mt-6">
                <iframe
                  title="Kameshwar Meat House Facebook reel"
                  src={FACEBOOK_REEL_URL}
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#d7c6b7]">
                This reel is positioned here instead of the hero so the landing page can stay focused
                on brand identity while the feature media stays together in one dedicated section.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="video-feature-card mithila-panel">
              <div className="feature-meta-row">
                <span>YouTube feature</span>
                <span>Watch us in action</span>
              </div>
              <div className="responsive-video-shell mt-6">
                <iframe
                  title="Kameshwar Meat House feature video"
                  src="https://www.youtube.com/embed/H4YIGbr_Fa0?start=313&end=400"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-[#d7c6b7]">
                This embed starts at 5:13 and ends at 6:40, focusing on the restaurant feature and
                keeping the original platform visible.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {mentions.map((mention, index) => (
            <Reveal key={mention.id} delay={0.08 * (index + 1)}>
              <a href={mention.url} target="_blank" rel="noreferrer" className="media-credit-card">
                <div className="feature-meta-row">
                  <span>{mention.sourceName}</span>
                  <span>{mention.sourceType ?? 'Feature'}</span>
                </div>
                <h3 className="mt-5 font-display text-4xl leading-tight text-[#fff6ea]">
                  {mention.title}
                </h3>
                {mention.summary ? (
                  <p className="mt-4 text-sm leading-7 text-[#d7c6b7]">{mention.summary}</p>
                ) : null}
                {mention.timingNote ? (
                  <p className="mt-5 text-[11px] uppercase tracking-[0.28em] text-[#ffdb58]">
                    {mention.timingNote}
                  </p>
                ) : null}
                {mention.creditLine ? (
                  <p className="mt-3 text-sm leading-6 text-[#c4b2a3]">Credit: {mention.creditLine}</p>
                ) : null}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
