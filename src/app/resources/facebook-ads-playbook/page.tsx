import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BarChart3, TrendingUp, Zap, Shield, Target, Layers } from 'lucide-react'
import { ResourceGateForm } from '@/components/shared/resource-gate-form'

export const metadata: Metadata = {
  title: 'Facebook Ads Scaling Playbook — Free Download',
  description: 'The complete framework for scaling Meta ad campaigns from $1K/day to $10K/day without killing ROAS. Free PDF download.',
}

const benefits = [
  { icon: TrendingUp, text: 'The Budget Expansion Protocol for controlled scaling from $1K to $10K/day' },
  { icon: Zap, text: 'Creative rotation frameworks to combat fatigue before it tanks your campaigns' },
  { icon: BarChart3, text: 'KPI monitoring dashboard with exact metrics, frequencies, and action triggers' },
  { icon: Shield, text: 'The 7 most common scaling mistakes and how to avoid every one of them' },
  { icon: Target, text: 'Horizontal vs. vertical scaling comparison with decision framework' },
  { icon: Layers, text: 'A 30-day action plan you can implement starting this week' },
]

export default function FacebookAdsPlaybookPage() {
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
            {/* Content side */}
            <div className="lg:col-span-3">
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Free Guide — 12 Pages</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                The Facebook Ads Scaling Playbook
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                Most brands fail at scaling because they treat it like turning up a volume dial. It is not. Scaling is a structural challenge that requires changes to creative, audience architecture, and attribution.
              </p>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                This playbook is the exact framework we use to scale ad accounts from $1K/day to $10K/day and beyond — the same system behind $12M+ in managed ad spend at Redemit One.
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
                  <span className="text-txt-primary font-medium">&ldquo;This is not theory.&rdquo;</span>{' '}
                  Every strategy in this playbook has been tested with real budgets on real campaigns. We have spent years and millions of dollars refining what works. This is the distilled version.
                </p>
              </div>
            </div>

            {/* Form side */}
            <div className="lg:col-span-2">
              <div className="surface-elevated p-6 md:p-8 sticky top-28">
                <h2 className="text-heading text-txt-primary text-center mb-2">
                  Download the Playbook
                </h2>
                <p className="text-body-sm text-txt-muted text-center mb-6">
                  Enter your email to unlock the free PDF.
                </p>
                <ResourceGateForm
                  resourceTitle="Facebook Ads Scaling Playbook"
                  downloadUrl="/downloads/facebook-ads-scaling-playbook.pdf"
                  formTag="facebook-ads-scaling-playbook"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
