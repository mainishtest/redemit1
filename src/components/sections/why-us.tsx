import { Shield, Zap, TrendingUp, Users } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'

const differentiators = [
  {
    icon: Zap,
    title: 'Full-Stack, Not Fragmented',
    description: 'We don\'t just run your ads. We build your offer, design your funnel, write your copy, and manage your media — all under one roof.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue-Obsessed',
    description: 'We don\'t optimize for vanity metrics. Every decision we make is tied to revenue. If it doesn\'t drive growth, we don\'t do it.',
  },
  {
    icon: Shield,
    title: 'No Long-Term Contracts',
    description: '90-day engagement cycles. We earn your business every quarter through results — not legal lock-ins.',
  },
  {
    icon: Users,
    title: 'Operator-Led',
    description: 'Your account is managed by senior operators who\'ve scaled brands themselves — not junior account managers reading a playbook.',
  },
]

export function WhyUs() {
  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <SectionHeader
          label="Why Redemit One"
          title="Built Different"
          description="We built Redemit One because we were tired of agencies that overpromise and underdeliver. Here's how we're different."
        />

        <div className="mt-16 grid gap-px bg-surface-300/30 rounded-xl overflow-hidden sm:grid-cols-2">
          {differentiators.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="bg-surface-50 p-8 md:p-10 flex gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <h3 className="text-heading-sm text-txt-primary">{item.title}</h3>
                  <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
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
