import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Target, DollarSign, ShieldCheck, Layers, Sparkles, ClipboardList } from 'lucide-react'
import { ResourceGateForm } from '@/components/shared/resource-gate-form'

export const metadata: Metadata = {
  title: 'The Offer Engineering Framework — Free Download',
  description: 'How to build, refine, and strengthen irresistible offers for paid traffic. Increase conversion rates 2-3x with better offer architecture.',
}

const benefits = [
  { icon: Layers, text: 'The 6 components of an irresistible offer and how to build each one from scratch' },
  { icon: DollarSign, text: 'Value stack architecture that creates 5-10x perceived value over your price' },
  { icon: Target, text: 'Pricing psychology principles engineered specifically for paid traffic environments' },
  { icon: Sparkles, text: '4 differentiation strategies for standing out in saturated markets' },
  { icon: ClipboardList, text: 'The Offer Scoring Rubric — rate your offer across 8 dimensions with clear benchmarks' },
  { icon: ShieldCheck, text: 'Quick-win conversion levers you can test this week for immediate impact' },
]

export default function OfferEngineeringPage() {
  return (
    <>
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-body-sm text-txt-muted hover:text-txt-primary transition-colors mb-10"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Resources
          </Link>

          <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
            <div className="lg:col-span-3">
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Free Framework — 10 Pages</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                The Offer Engineering Framework
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                We have audited hundreds of ad accounts. The pattern is always the same: brands say their ads are not working, but the real problem is their offer. Your offer is the single most powerful lever in your entire acquisition system.
              </p>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                This framework gives you the exact system for building offers that convert 2-3x higher — the same methodology we use with every client at Redemit One.
              </p>

              <div className="mt-10">
                <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">What You Will Learn</p>
                <div className="space-y-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon
                    return (
                      <div key={benefit.text} className="flex items-start gap-3.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-brand-400">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-body text-txt-secondary pt-1">{benefit.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="mt-10 p-5 rounded-lg bg-surface-0 border border-surface-300/30">
                <p className="text-body-sm text-txt-secondary leading-relaxed">
                  <span className="text-txt-primary font-medium">&ldquo;A strong offer can make mediocre ads profitable. A weak offer can make the best ads in the world fail.&rdquo;</span>{' '}
                  If your conversion rate is below 2%, your first move should be to re-engineer your offer — not your creative or targeting.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="surface-elevated p-6 md:p-8 sticky top-28">
                <h2 className="text-heading text-txt-primary text-center mb-2">
                  Download the Framework
                </h2>
                <p className="text-body-sm text-txt-muted text-center mb-6">
                  Enter your email to unlock the free PDF.
                </p>
                <ResourceGateForm
                  resourceTitle="The Offer Engineering Framework"
                  downloadUrl="/downloads/offer-engineering-framework.pdf"
                  formTag="offer-engineering-framework"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
