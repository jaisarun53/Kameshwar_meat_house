import type { MediaMention } from '@/lib/types';

type MentionsSectionProps = {
  mentions: MediaMention[];
};

export function MentionsSection({ mentions }: MentionsSectionProps) {
  return (
    <section id="mentions" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Featured Media</p>
          <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">
            Built to feature creators with proper credit.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#d9c0a0]">
            Once permission is granted, these cards can turn into real embedded videos or edited
            promo clips. The site is now structured to keep creator attribution visible instead of
            hiding the source behind generic marketing.
          </p>
        </div>
        <div className="grid gap-5">
          {mentions.map((mention) => (
            <a
              key={mention.id}
              href={mention.url}
              target="_blank"
              rel="noreferrer"
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
                {mention.status ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
                    {mention.status}
                  </span>
                ) : null}
              </div>
              <h3 className="mt-5 font-display text-3xl text-ash">{mention.title}</h3>
              {mention.summary ? (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#d9c0a0]">{mention.summary}</p>
              ) : null}
              {mention.timingNote ? (
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-turmeric">
                  {mention.timingNote}
                </p>
              ) : null}
              {mention.creditLine ? (
                <p className="mt-4 text-sm leading-6 text-white/60">Credit: {mention.creditLine}</p>
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
