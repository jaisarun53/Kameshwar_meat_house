import type { Category } from '@/lib/types';

import { Reveal } from './reveal';

type MenuSectionProps = {
  categories: Category[];
};

export function MenuSection({ categories }: MenuSectionProps) {
  const items = categories.flatMap((category) =>
    category.menuItems.map((item) => ({ ...item, category: category.name })),
  );

  return (
    <section id="menu" className="section-light menu-band">
      <div className="site-shell py-20 lg:py-28">
        <Reveal>
          <div className="section-heading-wrap">
            <p className="section-label text-[#ffdb58]">The Menu</p>
            <h2 className="section-title text-[#fff6ea]">Signature dishes with a darker, richer table-side presence.</h2>
            <p className="section-copy text-[#d7c6b7]">
              The menu now follows the same warm paper palette as the rest of the website. Dish titles
              have been resized for better readability and visual balance.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 menu-grid">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={0.05 * index}>
              <article className="menu-card menu-card-refined">
                <div className={`menu-card-visual menu-visual-${(index % 4) + 1}`}>
                  <div className="menu-card-overlay">
                    <span>{item.category}</span>
                    {item.isFeatured ? <span>Signature</span> : <span>House plate</span>}
                  </div>
                  <div className="menu-card-placeholder">
                    <div className="menu-card-badge">Photo coming soon</div>
                  </div>
                </div>
                <div className="menu-card-copy">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="menu-card-title">{item.name}</h3>
                      <span className="menu-price-pill menu-price-pill-refined">
                        {item.price > 0 ? `${item.currency} ${item.price}` : 'Price soon'}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-[#d7c6b7]">{item.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
