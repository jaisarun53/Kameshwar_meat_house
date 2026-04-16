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
        <h2 className="font-display text-4xl text-ash sm:text-5xl">An atmosphere first</h2>
        <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
          These are placeholder art-direction images to shape the frontend right away. We should
          replace them with real photos from the restaurant before launch.
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
                <p className="section-kicker">{image.title}</p>
                <p className="mt-3 max-w-lg font-display text-3xl text-ash">{image.caption}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
