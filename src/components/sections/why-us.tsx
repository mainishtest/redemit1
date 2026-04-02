import { Shield, Zap, TrendingUp, Users } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

const differentiators = [
  {
    icon: Zap,
    title: 'Everything Under One Roof',
    description: 'Website, ads, follow-up, content — we build your entire marketing system so everything works together. No juggling five different vendors.',
  },
  {
    icon: TrendingUp,
    title: 'Built for Leads, Not Likes',
    description: 'We don\'t care about vanity metrics. Every decision we make is tied to getting your phone to ring and your schedule filled.',
  },
  {
    icon: Shield,
    title: 'No Long-Term Contracts',
    description: 'Month-to-month or 90-day cycles. We keep your business by delivering results — not by locking you into a contract you can\'t escape.',
  },
  {
    icon: Users,
    title: 'We Know Local Business',
    description: 'We specialize in helping service businesses grow — roofers, landscapers, contractors, and more. We understand your market because we work in it every day.',
  },
]

export function WhyUs() {
  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <SectionHeader
          label="Why Redemit One"
          title="Marketing That Actually Works for Local Businesses"
          description="Most agencies sell you fluff. We build systems that put customers in your pipeline — and keep them coming."
        />

        <div className="mt-16 grid gap-px bg-light-300/60 rounded-xl overflow-hidden sm:grid-cols-2">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-light-0 p-8 md:p-10 flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-light-100 border border-light-300 text-ink-muted">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <h3 className="text-heading-sm text-ink-primary">{item.title}</h3>
                  <p className="mt-2.5 text-body-sm text-ink-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
