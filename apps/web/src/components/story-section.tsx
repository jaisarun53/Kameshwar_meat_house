import type { BusinessInfo } from '@/lib/types';

import { Reveal } from './reveal';

type StorySectionProps = {
  businessInfo: BusinessInfo;
};

const familyMembers = [
  {
    name: 'Amritlal Sah',
    role: 'Founder',
    note: 'Photo placeholder for the man who first turned evening handi gatherings into a remembered local taste.',
    initials: 'AS',
  },
  {
    name: 'Kameshwar Sah',
    role: 'Second Generation',
    note: 'Photo placeholder for the current family host carrying the restaurant from the home in Katahariya-5.',
    initials: 'KS',
  },
  {
    name: 'Sagar Kumar Jayswal',
    role: 'Next Generation',
    note: 'Photo placeholder for the family member helping guide the restaurant into its next chapter.',
    initials: 'SJ',
  },
];

export function StorySection({ businessInfo }: StorySectionProps) {
  const paragraphs = businessInfo.storyParagraphs ?? [businessInfo.story];

  return (
    <section id="story" className="section-light story-band">
      <div className="site-shell py-20 lg:py-28">
        <Reveal>
          <div className="section-heading-wrap">
            <p className="section-label text-[#ffdb58]">Our Story</p>
            <h2 className="section-title text-[#fff6ea]">
              Three generations, one kitchen, and a dish people still travel for.
            </h2>
            <p className="section-copy text-[#d7c6b7]">
              I simplified this section so it can be driven by the family faces first. Once you send
              the actual portraits, we can replace these placeholders and the whole section will feel
              far more personal and credible.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {familyMembers.map((member, index) => (
              <Reveal key={member.name} delay={0.08 * index}>
                <article className="portrait-card">
                  <div className="portrait-avatar">{member.initials}</div>
                  <div className="portrait-copy">
                    <p className="portrait-role">{member.role}</p>
                    <h3 className="portrait-name">{member.name}</h3>
                    <p className="portrait-note">{member.note}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="space-y-5">
            <Reveal>
              <div className="story-summary-card">
                <p className="section-label text-[#ffdb58]">Legacy</p>
                <h3 className="mt-4 font-display text-5xl leading-[0.95] text-[#fff6ea]">
                  {businessInfo.storyTitle}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#d7c6b7]">{businessInfo.story}</p>
              </div>
            </Reveal>

            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.08 * (index + 1)}>
                <article className="story-card story-card-refined">
                  <div className="story-card-index">0{index + 1}</div>
                  <p className="story-card-copy">{paragraph}</p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.28}>
              <div className="legal-note-card">
                <p className="section-label text-[#ffdb58]">Business Name</p>
                <p className="mt-4 font-display text-3xl leading-tight text-[#fff6ea]">
                  Legally registered as Purano Jayswal Meat House.
                </p>
                <p className="mt-4 text-sm leading-7 text-[#d7c6b7]">
                  The restaurant can still be presented publicly as Kameshwar Ji Ko Katiya Pasal,
                  while the legal business name stays visible where it matters.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
