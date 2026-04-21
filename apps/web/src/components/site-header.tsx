import Image from 'next/image';

const navItems = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Featured', href: '#featured' },
  { label: 'Visit Us', href: '#visit' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1b1613]/85 backdrop-blur-xl">
      <div className="site-shell flex items-center justify-between gap-4 py-1.5">
        <a href="#top" className="flex items-center gap-3">
          <div className="relative h-[3.75rem] w-[3.75rem] shrink-0 overflow-visible bg-transparent">
            <Image
              src="/brand/logo.png"
              alt="Purano Jayswal Meat House logo"
              fill
              className="object-contain scale-[1.03]"
              sizes="60px"
              priority
            />
          </div>
          <div>
            <p className="font-display text-[1.85rem] leading-none text-[#fff6ea]">Purano Jayswal Meat House</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-white/55">
              Kameshwar Ji Ko Katiya Pasal
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.92rem] uppercase tracking-[0.18em] text-[#fff3e3] transition hover:text-[#ffdb58]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#visit"
          className="rounded-full border border-[#ffdb58]/40 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#ffdb58] transition hover:bg-[#ffdb58] hover:text-[#2c2621]"
        >
          Find Us
        </a>
      </div>
    </header>
  );
}
