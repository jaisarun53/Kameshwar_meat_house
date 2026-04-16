import type { Category } from '@/lib/types';

type MenuSectionProps = {
  categories: Category[];
};

export function MenuSection({ categories }: MenuSectionProps) {
  return (
    <section id="menu" className="section-shell py-24">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="section-kicker">The Menu</p>
          <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">Signature flavors</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
          These items use the research-based starter menu for now. Once the owner confirms the
          exact menu and prices, this section can switch to live backend data without changing the
          design.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {categories.map((category) => (
          <article key={category.id} className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <p className="section-kicker">{category.name}</p>
            <div className="mt-6 space-y-5">
              {category.menuItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 border-b border-white/10 pb-5 last:border-none last:pb-0 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div className="max-w-md">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display text-3xl text-ash">{item.name}</h3>
                      {item.isFeatured ? (
                        <span className="rounded-full border border-turmeric/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-turmeric">
                          Featured
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-sm leading-7 text-[#ddc4a5]">{item.description}</p>
                  </div>
                  <p className="text-xl font-semibold tracking-[0.12em] text-turmeric">
                    {item.currency} {item.price}
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
