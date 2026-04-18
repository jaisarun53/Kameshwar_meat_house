import type { Testimonial } from '@/lib/types';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-shell py-24">
      <div className="glass-panel rounded-[2.8rem] p-7 sm:p-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-kicker">Public Impression</p>
            <h2 className="mt-4 font-display text-4xl text-ash sm:text-5xl">What the place already signals</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#d9c0a0]">
            Until you collect more customer reviews, this section can still establish reputation with
            verified public impressions and stronger presentation.
          </p>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.id}
              className={`rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-6 sm:p-8 ${index === 1 ? 'lg:translate-y-8' : ''}`}
            >
              <p className="font-display text-6xl leading-none text-turmeric/45">“</p>
              <p className="-mt-2 font-display text-3xl leading-tight text-ash">{testimonial.quote}</p>
              <footer className="mt-6 border-t border-white/10 pt-5 text-sm uppercase tracking-[0.2em] text-white/45">
                {testimonial.customerName}
                {testimonial.sourceLabel ? ` • ${testimonial.sourceLabel}` : ''}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
