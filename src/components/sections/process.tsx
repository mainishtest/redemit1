import { SectionHeader } from '@/components/ui/section-header'
import { PROCESS_STEPS } from '@/lib/constants'

export function Process() {
  return (
    <section className="section-spacing section-padding section-dark">
      <div className="section-container">
        <SectionHeader
          label="How It Works"
          title="From Audit to Leads in 30 Days"
          description="A simple, proven process — we find what's broken, fix it, and start driving real customers to your business."
        />

        <div className="mt-16 grid gap-0 md:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.step} className="relative flex flex-col">
              {/* Connector line */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-surface-300/60" />
              )}

              <div className="px-6 py-8 md:py-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-400 text-body-sm font-semibold text-txt-secondary">
                    {step.step}
                  </span>
                  <span className="text-overline uppercase text-txt-faint tracking-widest">
                    {step.duration}
                  </span>
                </div>
                <h3 className="text-heading-sm text-txt-primary">{step.title}</h3>
                <p className="mt-3 text-body-sm text-txt-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>

              {i < PROCESS_STEPS.length - 1 && (
                <div className="md:hidden h-px bg-surface-300/40 mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
