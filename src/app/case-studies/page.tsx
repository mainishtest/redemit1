import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { EcommerceScaleVisual, SaasAcquisitionVisual, InfoProductLaunchVisual } from '@/components/illustrations/case-study-visuals'
import { CASE_STUDIES } from '@/lib/constants'

const caseStudyVisuals: Record<string, React.ReactNode> = {
  'roofing-lead-gen': <EcommerceScaleVisual className="w-full h-full" />,
  'landscaping-growth': <SaasAcquisitionVisual className="w-full h-full" />,
  'baseball-training': <InfoProductLaunchVisual className="w-full h-full" />,
}

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Real results for real local businesses. See how we\'ve helped roofers, landscapers, and more get more leads and customers.',
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">Case Studies</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Proof Over Promises
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              We let the numbers do the talking. Here&apos;s what happens when your website, ads, and lead systems actually work together.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Case Studies Grid */}
      <section className="section-padding py-20">
        <div className="section-container">
          <div className="space-y-6">
            {CASE_STUDIES.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group block surface-card-hover overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Visual */}
                  <div className="md:col-span-2 aspect-[16/10] md:aspect-auto min-h-[200px] bg-gradient-to-br from-surface-150 to-surface-200 relative flex items-center justify-center">
                    <div className="absolute inset-0 group-hover:bg-surface-300/10 transition-colors duration-300" />
                    {caseStudyVisuals[study.slug] && (
                      <div className="relative w-full h-full p-4 opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                        {caseStudyVisuals[study.slug]}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="text-overline uppercase text-txt-muted bg-surface-100/80 backdrop-blur-sm px-2 py-0.5 rounded">
                        {study.industry}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-3 p-7 md:p-9 lg:p-10 flex flex-col justify-center">
                    <p className="text-overline uppercase text-txt-faint tracking-widest">
                      {study.client}
                    </p>
                    <h2 className="mt-2 text-heading-lg text-txt-primary lg:text-display-sm">
                      {study.title}
                    </h2>
                    <p className="mt-3 text-body text-txt-secondary leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline">{tag}</Badge>
                      ))}
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 border-t border-surface-300/40 pt-6">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-heading-lg text-brand-400">
                            {metric.value}
                          </div>
                          <div className="text-caption text-txt-muted mt-0.5">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-txt-muted group-hover:text-brand-400 transition-colors">
                        Read the full case study
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
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
              Every engagement starts with a free audit. We&apos;ll show you exactly where you&apos;re losing leads and how to fix it.
            </p>
            <div className="mt-10">
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
