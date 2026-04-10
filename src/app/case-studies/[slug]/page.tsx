import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { EcommerceScaleVisual, SaasAcquisitionVisual, InfoProductLaunchVisual } from '@/components/illustrations/case-study-visuals'
import { CASE_STUDIES } from '@/lib/constants'

const caseStudyVisuals: Record<string, React.ElementType> = {
  'roofing-lead-gen': EcommerceScaleVisual,
  'landscaping-growth': SaasAcquisitionVisual,
  'baseball-training': InfoProductLaunchVisual,
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug)
  if (!study) return { title: 'Case Study Not Found' }

  return {
    title: `${study.title} — ${study.client}`,
    description: study.description,
  }
}

export default function CaseStudyPage({ params }: Props) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug)
  if (!study) notFound()

  const CaseVisual = caseStudyVisuals[study.slug]

  return (
    <>
      {/* Header */}
      <section className="section-padding">
        <div className="section-container pt-28 pb-8 md:pt-36 md:pb-12">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-body-sm text-txt-muted hover:text-txt-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Case Studies
          </Link>

          <div className="flex flex-wrap gap-2 mb-3">
            {study.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>

          <p className="text-overline uppercase text-txt-faint tracking-widest">
            {study.client} &middot; {study.industry}
          </p>
          <h1 className="mt-3 text-display-sm text-txt-primary text-balance md:text-display-lg">
            {study.title}
          </h1>
          <p className="mt-4 text-body-lg text-txt-secondary max-w-[680px]">
            {study.description}
          </p>
        </div>
      </section>

      {/* Case study visual */}
      {CaseVisual && (
        <section className="section-padding pb-8">
          <div className="section-container max-w-[680px]">
            <div className="rounded-xl bg-surface-100 border border-surface-300/40 p-6 overflow-hidden">
              <CaseVisual className="w-full h-auto" />
            </div>
          </div>
        </section>
      )}

      {/* Metrics */}
      <section className="section-padding pb-16">
        <div className="section-container">
          <div className="accent-line mb-8 max-w-[680px]" />
          <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-[680px]">
            {study.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-display-sm text-brand-400 md:text-display">
                  {metric.value}
                </div>
                <div className="mt-1.5 text-caption text-txt-muted uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding pb-24">
        <div className="section-container max-w-[680px]">
          <h2 className="text-heading-lg text-txt-primary">The Challenge</h2>
          <p className="text-body-lg text-txt-secondary leading-relaxed mt-5">
            This business came to us with a strong service but almost no online presence. Their website wasn&apos;t converting, they had no system to capture and follow up with leads, and they were relying on word-of-mouth to fill their schedule. They needed a complete marketing system.
          </p>

          <h2 className="text-heading-lg text-txt-primary mt-14">Our Approach</h2>
          <div className="mt-5 space-y-3">
            {['Audited their website, ads, and online presence', 'Built a conversion-focused website and landing pages', 'Launched targeted local ads on Facebook and Google', 'Set up automated lead capture and follow-up system', 'Implemented review requests and reputation management'].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <Check className="h-4 w-4 text-brand-400 mt-1 shrink-0" />
                <span className="text-body-lg text-txt-secondary">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-heading-lg text-txt-primary mt-14">The Results</h2>
          <p className="text-body-lg text-txt-secondary leading-relaxed mt-5">
            Within 60 days, leads were flowing consistently. The new website converted visitors into calls, the ad campaigns drove a steady stream of local customers, and the follow-up system made sure no lead fell through the cracks. Their schedule went from empty to fully booked.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want Results Like These?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Let&apos;s talk about what&apos;s possible for your business.
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
