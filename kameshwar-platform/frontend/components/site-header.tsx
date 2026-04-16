const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Mentions', href: '#mentions' },
  { label: 'Visit', href: '#visit' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#120f0dcf] backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between py-4">
        <div>
          <p className="font-display text-lg tracking-[0.18em] text-ash">KAMESHWAR</p>
          <p className="text-xs uppercase tracking-[0.32em] text-white/55">Meat House</p>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-turmeric"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-turmeric/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-turmeric transition hover:bg-turmeric hover:text-soot"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
