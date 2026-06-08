import Link from 'next/link'
import { ArrowRight, BarChart3, Target, GitBranch, PenTool, Video } from 'lucide-react'
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
  'local-ads': MediaBuyingVisual,
  'websites': OfferCreationVisual,
  'lead-systems': FunnelStrategyVisual,
  'brand-content': CreativeCopyVisual,
}

export function ServicesOverview() {
  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <SectionHeader
          label="What We Do"
          title="Everything Your Business Needs to Grow"
          description="Most agencies sell you one thing. We build the entire system — website, ads, lead capture, and follow-up — so everything works together to fill your schedule."
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

        {/* Video Marketing Feature Banner */}
        <Link
          href="/video-marketing"
          className="group mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-xl bg-brand-500/8 border border-brand-500/20 p-8 md:p-10 transition-all duration-300 hover:bg-brand-500/12"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-500">
              <Video className="h-5 w-5" />
            </div>
            <div>
              <p className="text-overline uppercase text-brand-500 tracking-widest mb-1">New Service</p>
              <h3 className="text-heading-sm text-ink-primary">Video Marketing</h3>
              <p className="mt-1.5 text-body-sm text-ink-secondary leading-relaxed max-w-xl">
                We film, produce, and release professional marketing videos for your business — then distribute them across YouTube, Facebook, Instagram, TikTok, and more. Packages from $1k/video.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-body-sm font-medium text-brand-500 group-hover:text-brand-600 transition-colors duration-300">
            See pricing
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
    </section>
  )
}
