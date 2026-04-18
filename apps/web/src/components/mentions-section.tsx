import type { MediaMention } from '@/lib/types';

type MentionsSectionProps = {
  mentions: MediaMention[];
};

export function MentionsSection({ mentions }: MentionsSectionProps) {
  return (
    <section id="mentions" className="section-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="glass-panel rounded-[2.5rem] p-7 sm:p-8">
          <p className="section-kicker">Featured Media</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ash sm:text-5xl">
            Creator-led proof, not empty self-promotion.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#d9c0a0]">
            This section is now designed like a media wall. Once permission is granted, we can
            replace these cards with an embedded YouTube feature, a Facebook reel preview, and a
            dedicated credit line for each creator.
          </p>
          <div className="mt-8 rounded-[2rem] border border-white/10 bg-black/25 p-5">
            <p className="text-xs uppercase tracking-[0.26em] text-white/45">How we should present it</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#ddc4a5]">
              <li>Use the original source link or approved edited clip</li>
              <li>Keep the creator name visible near the media player</li>
              <li>Mention that the feature is used with permission</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-6">
          {mentions.map((mention, index) => (
            <a
              key={mention.id}
              href={mention.url}
              target="_blank"
              rel="noreferrer"
              className={`glass-panel overflow-hidden rounded-[2.5rem] p-0 transition hover:border-turmeric/30 hover:bg-[#2a1c17] ${index === 1 ? 'lg:ml-10' : ''}`}
            >
              <div className="grid gap-px bg-white/10 lg:grid-cols-[0.78fr_1.22fr]">
                <div className="flex min-h-[220px] items-end bg-[radial-gradient(circle_at_50%_38%,rgba(255,154,73,0.28),transparent_20%),linear-gradient(180deg,rgba(33,24,20,0.95),rgba(10,8,8,0.98))] p-6 sm:p-8">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{mention.sourceName}</p>
                    <div className="mt-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-black/30 text-2xl text-turmeric">
                      ▶
                    </div>
                    <p className="mt-5 text-sm uppercase tracking-[0.24em] text-turmeric">
                      {mention.sourceType ?? 'Feature'}
                    </p>
                  </div>
                </div>
                <div className="bg-[#140f0d] p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    {mention.status ? (
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/55">
                        {mention.status}
                      </span>
                    ) : null}
                    {mention.timingNote ? (
                      <span className="rounded-full border border-turmeric/20 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-turmeric">
                        {mention.timingNote}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 font-display text-4xl leading-tight text-ash">{mention.title}</h3>
                  {mention.summary ? (
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-[#d9c0a0]">{mention.summary}</p>
                  ) : null}
                  {mention.creditLine ? (
                    <p className="mt-6 text-sm leading-6 text-white/60">Credit: {mention.creditLine}</p>
                  ) : null}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
