import type { Category } from '@/lib/types';

type MenuSectionProps = {
  categories: Category[];
};

export function MenuSection({ categories }: MenuSectionProps) {
  const featuredItems = categories.flatMap((category) => category.menuItems).filter((item) => item.isFeatured);

  return (
    <section id="menu" className="section-shell py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">The Menu</p>
          <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">Family menu, led by katiya</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
          Instead of looking like a normal restaurant list, the menu now highlights house signatures
          first and lets the supporting categories feel more curated.
        </p>
      </div>

      <div className="glass-panel mb-8 overflow-hidden rounded-[2.5rem] p-0">
        <div className="grid gap-0 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="border-b border-white/10 bg-[linear-gradient(180deg,rgba(86,44,23,0.55),rgba(22,16,13,0.72))] p-7 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="section-kicker">House Signatures</p>
            <h3 className="mt-4 font-display text-4xl leading-tight text-ash">What people should remember first</h3>
            <p className="mt-5 text-base leading-7 text-[#e0c8aa]">
              These are the dishes that should lead the brand story, homepage banners, and future photo shoots.
            </p>
          </div>
          <div className="grid gap-px bg-white/10 md:grid-cols-2">
            {featuredItems.map((item) => (
              <article key={item.id} className="bg-[#140f0d] p-7 sm:p-8">
                <p className="text-xs uppercase tracking-[0.28em] text-turmeric">Signature</p>
                <h4 className="mt-4 font-display text-4xl leading-tight text-ash">{item.name}</h4>
                <p className="mt-4 text-sm leading-7 text-[#ddc4a5]">{item.description}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                  {item.price > 0 ? `${item.currency} ${item.price}` : 'Price soon'}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {categories.map((category, index) => (
          <article
            key={category.id}
            className={`glass-panel rounded-[2rem] p-6 sm:p-8 ${index === 1 ? 'xl:translate-y-8' : ''}`}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="section-kicker">{category.name}</p>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/55">
                {category.menuItems.length} items
              </span>
            </div>
            <div className="mt-6 space-y-5">
              {category.menuItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-3xl text-ash">{item.name}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#ddc4a5]">{item.description}</p>
                    </div>
                    {item.isFeatured ? (
                      <span className="rounded-full border border-turmeric/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-turmeric">
                        Lead
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-turmeric">
                    {item.price > 0 ? `${item.currency} ${item.price}` : 'Price soon'}
                  </p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
