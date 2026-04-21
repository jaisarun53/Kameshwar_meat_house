import type { MediaMention } from '@/lib/types';

import { Reveal } from './reveal';

type MentionsSectionProps = {
  mentions: MediaMention[];
};

type MentionMeta = {
  title: string;
  source: string;
  credit: string;
  reference: string;
  note: string;
};

function getText(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function getMentionMeta(mention: MediaMention): MentionMeta {
  const record = mention as Record<string, unknown>;

  return {
    title:
      getText(record.title) ||
      getText(record.name) ||
      'Featured coverage',
    source:
      getText(record.sourceName) ||
      getText(record.source) ||
      getText(record.platform) ||
      'External feature',
    credit:
      getText(record.creditLine) ||
      getText(record.credit) ||
      'Original creator credited on the website.',
    reference:
      getText(record.url) ||
      getText(record.referenceUrl) ||
      getText(record.reference) ||
      '#',
    note:
      getText(record.featuredTiming) ||
      getText(record.summary) ||
      getText(record.note) ||
      'Original feature referenced with creator credit.',
  };
}

const featuredMedia = [
  {
    key: 'facebook',
    label: 'Facebook Reel',
    title: 'Featured reel',
    embedUrl:
      'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F995647378584539%2F&show_text=false&width=560',
  },
  {
    key: 'youtube',
    label: 'YouTube Feature',
    title: 'Watch us in action',
    embedUrl:
      'https://www.youtube.com/embed/H4YIGbr_Fa0?start=313&end=400&rel=0',
  },
] as const;

export function MentionsSection({ mentions }: MentionsSectionProps) {
  return (
    <section
      id="featured"
      className="relative border-t border-white/10 bg-[#110d0b] px-6 py-20 text-stone-100 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-300/85">
              Featured
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
              Seen, shared, and remembered beyond Katahariya.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-300/85 sm:text-lg">
              The restaurant has drawn attention from food creators and local
              viewers who came to document the fire-cooked clay-pot experience.
              The original source and creator credit now sit directly below each
              featured video for clarity.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredMedia.map((media, index) => {
            const mention = mentions[index];
            const meta = mention ? getMentionMeta(mention) : null;

            return (
              <Reveal key={media.key}>
                <article className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] shadow-[0_28px_90px_rgba(0,0,0,0.35)] backdrop-blur">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300/80">
                      {media.label}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-stone-50">
                      {meta?.title || media.title}
                    </h3>
                  </div>

                  <div className="aspect-video bg-black">
                    <iframe
                      src={media.embedUrl}
                      title={media.title}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  <div className="space-y-4 px-6 py-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300/75">
                          Source
                        </p>
                        <p className="mt-2 text-sm leading-6 text-stone-100">
                          {meta?.source || media.label}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300/75">
                          Credit
                        </p>
                        <p className="mt-2 text-sm leading-6 text-stone-100">
                          {meta?.credit || 'Creator credited on the website.'}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300/75">
                          Reference
                        </p>
                        <a
                          href={meta?.reference || '#'}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-2 inline-flex text-sm leading-6 text-amber-200 transition hover:text-amber-100"
                        >
                          Open original source
                        </a>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-[#1a130f] px-4 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-amber-300/75">
                        Note
                      </p>
                      <p className="mt-2 text-sm leading-7 text-stone-300">
                        {meta?.note ||
                          'Reference and creator credit are shown here so the feature stays properly attributed.'}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
