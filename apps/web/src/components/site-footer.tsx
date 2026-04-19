export function SiteFooter() {
  return (
    <footer className="border-t border-[#d9c7b7] bg-[#f4eadf]">
      <div className="site-shell flex flex-col gap-5 py-10 text-[#5d5248] lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-display text-3xl text-[#2d2824]">Purano Jayswal Meat House</p>
          <p className="mt-2 text-sm leading-7">
            Public-facing identity: Kameshwar Ji Ko Katiya Pasal. A family kitchen from
            Katahariya-5, Rautahat, built around the clay-pot tradition of katiya.
          </p>
        </div>
        <div className="text-sm leading-7 text-[#6a5f55] lg:text-right">
          <p>Katahariya-5, Rautahat, Nepal</p>
          <p>Designed as a heritage-first digital home for the family business.</p>
        </div>
      </div>
    </footer>
  );
}
