import type { BusinessInfo } from '@/lib/types';

import { Reveal } from './reveal';

type StorySectionProps = {
  businessInfo: BusinessInfo;
};

const familyMembers = [
  {
    name: 'Amritlal Sah',
    role: 'Founder',
    note: 'The family story began with his clay-pot cooking gatherings and the bold taste that drew local demand.',
  },
  {
    name: 'Kameshwar Sah',
    role: 'Second Generation',
    note: 'He carried the restaurant forward and kept the food rooted in home-style fire-cooked tradition.',
  },
  {
    name: 'Sagar Kumar Jayswal',
    role: 'Next Generation',
    note: 'He supports the restaurant today while helping carry the family identity into a new generation.',
  },
];

export function StorySection({ businessInfo }: StorySectionProps) {
  const storyParagraphs =
    businessInfo.storyParagraphs && businessInfo.storyParagraphs.length > 0
      ? businessInfo.storyParagraphs
      : businessInfo.story
        ? [businessInfo.story]
        : [];

  return (
    <section
      id="story"
      className="border-t border-white/10 bg-[#130f0c] px-6 py-20 text-stone-100 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-300/80">
                Our Story
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-stone-50 sm:text-5xl">
                {businessInfo.storyTitle}
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-300/85">
                What began as a local gathering around slow-cooked clay-pot meat
                became a family-run restaurant known for fire-cooked flavor,
                rooted hospitality, and a story carried across generations in
                Katahariya.
              </p>

              <div className="mt-8 space-y-5">
                {storyParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-8 text-stone-300/80 sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.32)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/75">
                Family Legacy
              </p>

              <div className="mt-6 space-y-4">
                {familyMembers.map((member) => (
                  <article
                    key={member.name}
                    className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl text-stone-50">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200/70">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-stone-300/85">
                      {member.note}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-amber-300/20 bg-[#1a130f] px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-300/75">
                  Legal Name
                </p>
                <p className="mt-3 font-serif text-2xl text-stone-50">
                  Purano Jayswal Meat House
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-300/85">
                  Publicly known as Kameshwar Ji Ko Katiya Pasal, the restaurant
                  carries both the family identity and the food tradition people
                  remember.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
