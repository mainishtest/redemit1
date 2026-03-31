import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, GitBranch, MousePointerClick, Gauge, Smartphone, BarChart3, Workflow } from 'lucide-react'
import { ResourceGateForm } from '@/components/shared/resource-gate-form'

export const metadata: Metadata = {
  title: 'Funnel Architecture for Paid Traffic — Free Download',
  description: 'How to structure funnels that convert cold traffic into paying customers. Page sequence design, friction reduction, and funnel analytics.',
}

const benefits = [
  { icon: GitBranch, text: 'The 3 funnel archetypes for paid traffic: which one fits your business and price point' },
  { icon: Workflow, text: 'Page sequence design: what goes where and why, with exact page-by-page breakdowns' },
  { icon: MousePointerClick, text: '5 friction reduction techniques that eliminate drop-off at every stage' },
  { icon: Gauge, text: 'The handoff framework: converting funnel visitors into sales or completed checkouts' },
  { icon: BarChart3, text: 'Stage-by-stage analytics with benchmarks so you know where your funnel is leaking' },
  { icon: Smartphone, text: 'Mobile optimization checklist for the 70-80% of traffic coming from phones' },
]

export default function FunnelArchitecturePage() {
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
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Free Guide — 10 Pages</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                Funnel Architecture for Paid Traffic
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                Cold traffic does not buy the way warm traffic does. Sending paid visitors to a generic product page or homepage is the most expensive mistake in acquisition. A well-built funnel converts 3-5x better than a standard website experience.
              </p>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                This guide covers the exact funnel structures we deploy across 50+ brand engagements — from page sequence to friction reduction to analytics.
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
                  <span className="text-txt-primary font-medium">&ldquo;Never send paid traffic to your homepage.&rdquo;</span>{' '}
                  Your homepage serves multiple audiences. A funnel serves one audience with one message leading to one action. That singularity of purpose is what drives conversion.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="surface-elevated p-6 md:p-8 sticky top-28">
                <h2 className="text-heading text-txt-primary text-center mb-2">
                  Download the Guide
                </h2>
                <p className="text-body-sm text-txt-muted text-center mb-6">
                  Enter your email to unlock the free PDF.
                </p>
                <ResourceGateForm
                  resourceTitle="Funnel Architecture for Paid Traffic"
                  downloadUrl="/downloads/funnel-architecture-paid-traffic.pdf"
                  formTag="funnel-architecture-paid-traffic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
