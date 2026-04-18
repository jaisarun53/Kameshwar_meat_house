const navItems = [
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Mentions', href: '#mentions' },
  { label: 'Visit', href: '#visit' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#100c0bdd]/95 backdrop-blur-2xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-turmeric/30 bg-[#1d1411] font-display text-lg text-turmeric shadow-[0_0_24px_rgba(255,154,73,0.14)]">
            KS
          </div>
          <div>
            <p className="font-display text-lg tracking-[0.18em] text-ash">KAMESHWAR JI</p>
            <p className="text-xs uppercase tracking-[0.32em] text-white/55">Katiya Pasal</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.22em] text-white/70 transition hover:text-turmeric"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-white/50 md:block">
            Katahariya-5 • Since family legacy
          </div>
          <a
            href="#contact"
            className="rounded-full border border-turmeric/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-turmeric transition hover:bg-turmeric hover:text-soot"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
