import { SectionHeader } from '@/components/ui/section-header'
import { TESTIMONIALS } from '@/lib/constants'

export function Testimonials() {
  return (
    <section className="section-spacing section-padding bg-surface-0">
      <div className="section-container">
        <SectionHeader
          label="Client Results"
          title="What Our Clients Say"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="surface-card p-7 md:p-8 flex flex-col">
              {/* Quotation mark — decorative, using surface color not teal */}
              <span className="text-[48px] leading-none font-serif text-surface-300 select-none mb-2">&ldquo;</span>

              <blockquote className="flex-1 text-body text-txt-secondary leading-relaxed -mt-4">
                {testimonial.quote}
              </blockquote>

              <div className="mt-7 flex items-center gap-3 border-t border-surface-300/40 pt-5">
                <div className="h-9 w-9 rounded-full bg-surface-200 flex items-center justify-center text-txt-muted text-body-sm font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-body-sm font-medium text-txt-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-caption text-txt-muted">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
