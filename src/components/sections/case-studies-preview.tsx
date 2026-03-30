import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { EcommerceScaleVisual, SaasAcquisitionVisual, InfoProductLaunchVisual } from '@/components/illustrations/case-study-visuals'
import { CASE_STUDIES } from '@/lib/constants'

const caseStudyVisuals: Record<string, React.ReactNode> = {
  'ecommerce-scale': <EcommerceScaleVisual className="w-full h-full" />,
  'saas-acquisition': <SaasAcquisitionVisual className="w-full h-full" />,
  'info-product-launch': <InfoProductLaunchVisual className="w-full h-full" />,
}

export function CaseStudiesPreview() {
  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <SectionHeader
          label="Proof"
          title="Results That Speak for Themselves"
          description="We don't just talk about growth — we deliver it. Here are some of the brands we've scaled."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group surface-card-hover overflow-hidden"
            >
              {/* Visual — case study illustration */}
              <div className="aspect-[16/10] bg-gradient-to-br from-surface-150 to-surface-200 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 group-hover:bg-surface-300/10 transition-colors duration-300" />
                {caseStudyVisuals[study.slug] && (
                  <div className="relative w-full h-full p-3 opacity-70 group-hover:opacity-90 transition-opacity duration-300">
                    {caseStudyVisuals[study.slug]}
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <span className="text-overline uppercase text-txt-muted bg-surface-100/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-overline uppercase text-txt-faint tracking-widest">
                  {study.client}
                </p>
                <h3 className="mt-2 text-heading-sm text-txt-primary group-hover:text-txt-primary transition-colors text-balance">
                  {study.title}
                </h3>
                <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
                  {study.description}
                </p>

                {/* Metrics — teal ONLY on the values */}
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-surface-300/40 pt-5">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-heading-sm text-brand-400">
                        {metric.value}
                      </div>
                      <div className="text-caption text-txt-muted leading-tight mt-0.5">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ArrowRight className="h-3.5 w-3.5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
