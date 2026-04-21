import Image from 'next/image';

const quickLinks = [
  { href: '#menu', label: 'Our Menu' },
  { href: '#story', label: 'About Us' },
  { href: '#featured', label: 'Featured' },
  { href: '#visit', label: 'Visit Us' },
  { href: '#visit', label: 'Reserve a Table' },
  { href: '#visit', label: 'Contact' },
];

const footerGallery = [
  { src: '/images/hero-katiya.jpg', alt: 'Clay-pot mutton katiya' },
  { src: '/images/hero-katiya-alt.jpg', alt: 'Katiya served in earthen pot' },
  { src: '/images/hero-katiya.jpg', alt: 'Signature handi close-up' },
  { src: '/images/hero-katiya-alt.jpg', alt: 'Slow-cooked mutton presentation' },
  { src: '/images/hero-katiya.jpg', alt: 'Fire-cooked katiya detail' },
  { src: '/images/hero-katiya-alt.jpg', alt: 'Restaurant signature dish' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#120d0a] px-6 py-14 text-stone-200 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(198,118,62,0.12),transparent_38%),linear-gradient(180deg,#1a130f_0%,#120d0a_100%)] px-8 py-10 shadow-[0_24px_70px_rgba(0,0,0,0.32)] sm:px-10 lg:px-14 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr_1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/70">
              Quick Links
            </p>
            <div className="mt-3 h-px w-16 bg-amber-300/20" />

            <nav className="mt-7 flex flex-col gap-4 text-sm text-stone-300/90">
              {quickLinks.map((link) => (
                <a
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="transition hover:text-amber-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="text-center lg:px-6">
            <div className="mx-auto relative h-20 w-20">
              <Image
                src="/brand/logo.png"
                alt="Purano Jayswal Meat House logo"
                fill
                className="object-contain"
                sizes="80px"
              />
            </div>

            <h3 className="mt-4 font-serif text-4xl text-stone-50">
              Purano Jayswal
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.36em] text-amber-200/70">
              Kameshwar Ji Ko Katiya Pasal
            </p>

            <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-stone-300/80">
              Fire-cooked clay-pot mutton, family hospitality, and a food
              legacy rooted in Katahariya-5, Rautahat, Nepal.
            </p>

            <div className="mt-8">
              <p className="font-serif text-2xl text-stone-100">
                Reserve Your Table
              </p>
              <a
                href="tel:9807255399"
                className="mt-2 inline-block text-4xl text-amber-200 transition hover:text-amber-100"
              >
                9807255399
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-200/70">
              Food Gallery
            </p>
            <div className="mt-3 h-px w-16 bg-amber-300/20" />

            <div className="mt-7 grid grid-cols-3 gap-3">
              {footerGallery.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative aspect-square overflow-hidden rounded-[18px] border border-white/10 bg-[#201713]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © 2026 Purano Jayswal Meat House. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:sagarkumarjayswal98072@gmail.com"
              className="transition hover:text-amber-200"
            >
              sagarkumarjayswal98072@gmail.com
            </a>
            <span className="text-stone-700">•</span>
            <p>Katahariya-5, Rautahat</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
