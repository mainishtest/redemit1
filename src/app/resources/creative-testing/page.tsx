import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, PenTool, Repeat, FlaskConical, LineChart, Clapperboard, Rocket } from 'lucide-react'
import { ResourceGateForm } from '@/components/shared/resource-gate-form'

export const metadata: Metadata = {
  title: 'Creative Testing Framework Walkthrough — Free Download',
  description: 'A repeatable system for testing ad creatives, finding winners faster, and building a creative pipeline that sustains scale.',
}

const benefits = [
  { icon: FlaskConical, text: 'The Creative Testing Matrix: systematic approach to hooks, angles, and formats' },
  { icon: Clapperboard, text: 'Testing infrastructure setup: campaign structure that separates testing from scaling' },
  { icon: LineChart, text: 'Decision-making framework: how to read results and know exactly what to do next' },
  { icon: Repeat, text: 'The Iteration Protocol: turning one winner into 5-10 high-performing variations' },
  { icon: Rocket, text: 'Creative velocity benchmarks by spend level so you know how much to produce' },
  { icon: PenTool, text: 'Hook categories, angle frameworks, and format templates you can use immediately' },
]

export default function CreativeTestingPage() {
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
                Creative Testing Framework Walkthrough
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                In the age of algorithmic targeting, creative is targeting. The brands that test the most creative variations win — not because every test produces a winner, but because volume increases the probability of finding outlier performers.
              </p>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                This framework is the exact system our team uses to test 15-20 new concepts per week with a 15% hit rate — enough to continuously refresh and scale any ad account.
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
                  <span className="text-txt-primary font-medium">&ldquo;Volume is the strategy.&rdquo;</span>{' '}
                  Our top-performing account tests 15-20 new concepts per week. Their hit rate is about 15%. That means 2-3 winners per week — enough to continuously refresh and scale.
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
                  resourceTitle="Creative Testing Framework"
                  downloadUrl="/downloads/creative-testing-framework.pdf"
                  formTag="creative-testing-framework"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
