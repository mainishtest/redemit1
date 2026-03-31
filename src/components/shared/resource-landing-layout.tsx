import Link from 'next/link'
import { ArrowLeft, ArrowRight, CheckCircle2, Users, Clock, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ResourceGateForm } from '@/components/shared/resource-gate-form'

interface Benefit {
  icon: React.ElementType
  title: string
  text: string
}

interface Chapter {
  number: string
  title: string
}

interface ResourceLandingLayoutProps {
  overline: string
  title: string
  subtitle: string
  description: string
  benefits: Benefit[]
  chapters: Chapter[]
  pullQuote: string
  pullQuoteAttribution?: string
  resourceTitle: string
  downloadUrl: string
  formTag: string
  pageCount: string
  ctaText?: string
  urgencyText?: string
  socialProofLine?: string
  whoItsFor?: string[]
}

export function ResourceLandingLayout({
  overline,
  title,
  subtitle,
  description,
  benefits,
  chapters,
  pullQuote,
  pullQuoteAttribution,
  resourceTitle,
  downloadUrl,
  formTag,
  pageCount,
  ctaText,
  urgencyText,
  socialProofLine,
  whoItsFor,
}: ResourceLandingLayoutProps) {
  return (
    <>
      {/* ═══ HERO: Above the Fold — What + Who + Why ═══ */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute top-0 right-1/4 h-[500px] w-[600px] bg-brand-400/[0.02] rounded-full blur-[120px]" />

        <div className="relative section-padding">
          <div className="section-container pt-32 pb-8 md:pt-40 md:pb-12">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-body-sm text-txt-muted hover:text-txt-primary transition-colors mb-10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Resources
            </Link>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Content — 7 cols */}
              <div className="lg:col-span-7">
                <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
                  {overline}
                </p>
                <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg lg:text-display">
                  {title}
                </h1>
                <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed max-w-[600px]">
                  {subtitle}
                </p>

                {/* Social Proof Line */}
                {socialProofLine && (
                  <div className="mt-6 flex items-center gap-2.5">
                    <Users className="h-4 w-4 text-brand-400 shrink-0" />
                    <p className="text-body-sm text-txt-muted font-medium">{socialProofLine}</p>
                  </div>
                )}

                {/* Who It's For — Quick Qualifier */}
                {whoItsFor && whoItsFor.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {whoItsFor.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-caption font-medium bg-surface-100 border border-surface-300/40 text-txt-secondary"
                      >
                        <CheckCircle2 className="h-3 w-3 text-brand-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Form — 5 cols (sticky) */}
              <div className="lg:col-span-5">
                <div className="surface-elevated p-6 md:p-7 lg:sticky lg:top-24">
                  <ResourceGateForm
                    resourceTitle={resourceTitle}
                    downloadUrl={downloadUrl}
                    formTag={formTag}
                    pageCount={pageCount}
                    ctaText={ctaText}
                    urgencyText={urgencyText}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* ═══ DESCRIPTION + TABLE OF CONTENTS ═══ */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
            <div className="lg:col-span-7">
              <p className="text-body-lg text-txt-secondary leading-relaxed">
                {description}
              </p>

              {/* Pull Quote */}
              <div className="mt-10 relative pl-6 border-l-2 border-brand-400/40">
                <p className="text-heading-sm text-txt-primary leading-relaxed italic">
                  &ldquo;{pullQuote}&rdquo;
                </p>
                {pullQuoteAttribution && (
                  <p className="mt-3 text-body-sm text-txt-muted">
                    — {pullQuoteAttribution}
                  </p>
                )}
              </div>
            </div>

            {/* Table of Contents */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-xl bg-surface-0 border border-surface-300/30">
                <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">
                  Inside This Guide
                </p>
                <div className="space-y-0 divide-y divide-surface-300/30">
                  {chapters.map((ch) => (
                    <div key={ch.number} className="flex items-baseline gap-4 py-3">
                      <span className="text-body-sm font-semibold text-brand-400 tabular-nums shrink-0">
                        {ch.number}
                      </span>
                      <span className="text-body-sm text-txt-secondary">
                        {ch.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BENEFITS GRID ═══ */}
      <section className="section-padding py-16 md:py-24 bg-surface-0">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
              What You Will Walk Away With
            </p>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              Actionable Frameworks You Can Use This Week
            </h2>
          </div>

          <div className="grid gap-px bg-surface-300/30 rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="bg-surface-50 p-7 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-brand-400 mb-5">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="text-heading-sm text-txt-primary">{benefit.title}</h3>
                  <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA — Pattern Interrupt ═══ */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">
              Free Download — {pageCount}
            </p>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Stop Guessing. Start Scaling.
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Enter your email above and get the complete framework in your inbox within 60 seconds.
            </p>
            <div className="mt-8">
              <a href="#top">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  {ctaText || 'Get Instant Access'}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STRATEGY CALL CTA — Conversion Point ═══ */}
      <section className="section-padding py-20 md:py-28 bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-medium mb-6">
              <Phone className="h-3.5 w-3.5" />
              For Serious Growth Teams Only
            </div>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              Want a Custom Scaling Plan<br className="hidden md:block" /> Built for Your Business?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary max-w-xl mx-auto">
              The frameworks in this guide have driven results for 50+ brands. On a strategy call, we will show you <strong className="text-txt-primary">exactly</strong> how to apply them to your specific situation — and identify the 2-3 moves that will have the biggest impact on your growth in the next 90 days.
            </p>

            {/* Call Benefits */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Full ad account + funnel audit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Custom 90-day growth roadmap</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Actionable next steps you own</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Book Your Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-caption text-txt-faint">
              Best for brands spending $3K+/mo on paid acquisition or preparing to scale
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
