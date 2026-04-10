import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, Target, GitBranch, PenTool, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MediaBuyingVisual, OfferCreationVisual, FunnelStrategyVisual, CreativeCopyVisual } from '@/components/illustrations/service-visuals'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Websites, local ads, lead systems, and brand strategy — everything your local business needs to get more customers and stay booked.',
}

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Target,
  GitBranch,
  PenTool,
}

const serviceVisualMap: Record<string, React.ElementType> = {
  'local-ads': MediaBuyingVisual,
  'websites': OfferCreationVisual,
  'lead-systems': FunnelStrategyVisual,
  'brand-content': CreativeCopyVisual,
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-28 pb-10 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">Our Services</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Everything Your Business Needs to Grow
            </h1>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
              We don&apos;t do one thing. We build your entire marketing system — website, ads, lead capture, and follow-up — so customers keep coming in.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Services Detail */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container space-y-24 md:space-y-32">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon]
            const ServiceVisual = serviceVisualMap[service.slug]
            const isEven = i % 2 === 0

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="scroll-mt-24"
              >
                <div className={`grid gap-12 lg:grid-cols-2 lg:gap-20 items-start ${isEven ? '' : 'lg:[direction:rtl]'}`}>
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:[direction:ltr]'}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                        {Icon && <Icon className="h-[18px] w-[18px]" />}
                      </div>
                      <span className="text-overline uppercase text-txt-faint tracking-widest">
                        0{i + 1}
                      </span>
                    </div>

                    <h2 className="text-display-sm text-txt-primary">
                      {service.title}
                    </h2>

                    <p className="mt-3 text-body-lg text-txt-secondary leading-relaxed">
                      {service.longDescription}
                    </p>

                    <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                          <span className="text-body-sm text-txt-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {service.platforms.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {service.platforms.map((platform) => (
                          <Badge key={platform} variant="outline">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Service visual */}
                  <div className={isEven ? '' : 'lg:[direction:ltr]'}>
                    <div className="aspect-[4/3] rounded-xl bg-surface-100 border border-surface-300/40 flex items-center justify-center p-6">
                      {ServiceVisual ? (
                        <ServiceVisual className="w-full h-full" />
                      ) : (
                        Icon && <Icon className="h-12 w-12 text-surface-300" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Not Sure Where to Start?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Get a free audit of your website and marketing. We&apos;ll show you exactly where you&apos;re losing leads and how to fix it.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
