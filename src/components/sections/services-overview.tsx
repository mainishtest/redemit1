import Link from 'next/link'
import { ArrowRight, BarChart3, Target, GitBranch, PenTool } from 'lucide-react'
import { SectionHeader } from '@/components/ui/section-header'
import { MediaBuyingVisual, OfferCreationVisual, FunnelStrategyVisual, CreativeCopyVisual } from '@/components/illustrations/service-visuals'
import { SERVICES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Target,
  GitBranch,
  PenTool,
}

const visualMap: Record<string, React.ElementType> = {
  'media-buying': MediaBuyingVisual,
  'offer-creation': OfferCreationVisual,
  'funnel-strategy': FunnelStrategyVisual,
  'creative-copy': CreativeCopyVisual,
}

export function ServicesOverview() {
  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <SectionHeader
          label="What We Do"
          title="A Full-Stack Growth Engine"
          description="Most agencies manage your ads. We engineer your entire acquisition system — the offer, the funnel, the creative, and the media buy."
        />

        <div className="mt-16 grid gap-px bg-light-300/60 rounded-xl overflow-hidden sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            const Visual = visualMap[service.slug]
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="group bg-light-50 p-8 md:p-10 transition-all duration-300 hover:bg-light-0"
              >
                {/* Service illustration */}
                {Visual && (
                  <div className="mb-6 -mx-2 -mt-2">
                    <Visual className="w-full h-auto max-h-[140px] opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-light-100 text-ink-muted group-hover:text-ink-secondary transition-colors">
                    {Icon && <Icon className="h-[18px] w-[18px]" />}
                  </div>
                  <span className="text-overline uppercase text-ink-faint tracking-widest">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="text-heading-sm text-ink-primary group-hover:text-ink-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-body-sm text-ink-secondary leading-relaxed">
                  {service.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-body-sm font-medium text-ink-muted group-hover:text-brand-500 transition-colors duration-300">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
