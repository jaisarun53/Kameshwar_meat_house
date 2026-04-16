import type { Testimonial } from '@/lib/types';

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-shell py-24">
      <div className="glass-panel rounded-[2.5rem] p-7 sm:p-10">
        <p className="section-kicker">Public Impression</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="font-display text-3xl leading-tight text-ash">"{testimonial.quote}"</p>
              <footer className="mt-5 text-sm uppercase tracking-[0.2em] text-white/45">
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
