import Image from 'next/image';

import type { GalleryImage } from '@/lib/types';

type GallerySectionProps = {
  images: GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-shell py-24">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="section-kicker">Gallery</p>
          <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">Planned like a visual campaign</h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
          The section now behaves more like an art-directed photo wall. The current images are still
          placeholders, but the layout is ready for real dish close-ups, family portraits, and
          kitchen-fire atmosphere.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        {images.map((image, index) => {
          const imageHeight = index === 0 ? 'min-h-[560px]' : 'min-h-[270px] lg:min-h-[272px]';

          return (
            <article key={image.id} className={`glass-panel overflow-hidden rounded-[2rem] ${imageHeight}`}>
              <div className={`relative h-full ${imageHeight}`}>
                <Image
                  src={image.imageUrl}
                  alt={image.altText}
                  fill
                  className="object-cover opacity-90 transition duration-700 hover:scale-[1.04]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute left-0 top-0 p-6 sm:p-8">
                  {image.isPlaceholder ? (
                    <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/65">
                      Dummy image
                    </span>
                  ) : null}
                </div>
                <div className="absolute bottom-0 p-6 sm:p-8">
                  <p className="section-kicker">{image.title}</p>
                  <p className="mt-3 max-w-lg font-display text-3xl leading-tight text-ash">{image.caption}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
