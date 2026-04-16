import type { MediaMention } from '@/lib/types';

type MentionsSectionProps = {
  mentions: MediaMention[];
};

export function MentionsSection({ mentions }: MentionsSectionProps) {
  return (
    <section id="mentions" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Media and Reviews</p>
          <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">
            Ready for blogs, vlogs, and local press.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#d9c0a0]">
            The content model is already prepared for YouTube food bloggers, local articles, and
            customer video mentions. We only need the verified links from the business.
          </p>
        </div>
        <div className="grid gap-5">
          {mentions.map((mention) => (
            <a
              key={mention.id}
              href={mention.url}
              className="glass-panel rounded-[2rem] p-6 transition hover:border-turmeric/30 hover:bg-[#2a1c17]"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
                  {mention.sourceName}
                </span>
                {mention.sourceType ? (
                  <span className="rounded-full border border-turmeric/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-turmeric">
                    {mention.sourceType}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-3xl text-ash">{mention.title}</h3>
              {mention.summary ? (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d9c0a0]">{mention.summary}</p>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
