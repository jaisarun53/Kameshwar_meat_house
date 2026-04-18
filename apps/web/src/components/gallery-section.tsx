import Image from 'next/image';

import type { GalleryImage } from '@/lib/types';

type GallerySectionProps = {
  images: GalleryImage[];
};

export function GallerySection({ images }: GallerySectionProps) {
  return (
    <section id="gallery" className="section-shell py-24">
      <p className="section-kicker">Gallery</p>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display text-4xl text-ash sm:text-5xl">Real photos can drop in later</h2>
        <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
          These are dummy images only. When you send the actual dish photos, family portraits, and
          fire-kitchen shots, this section can switch over without changing the layout.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {images.map((image, index) => (
          <article
            key={image.id}
            className={`glass-panel overflow-hidden rounded-[2rem] ${
              index === 0 ? 'lg:row-span-2' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'min-h-[520px]' : 'min-h-[250px]'}`}>
              <Image
                src={image.imageUrl}
                alt={image.altText}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              <div className="absolute bottom-0 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="section-kicker">{image.title}</p>
                  {image.isPlaceholder ? (
                    <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/65">
                      Dummy image
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 max-w-lg font-display text-3xl text-ash">{image.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
