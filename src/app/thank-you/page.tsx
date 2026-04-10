import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Thank You — Book Your Strategy Call',
  description: 'Your application has been received. Book your strategy call now.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <>
      {/* Confirmation */}
      <section className="section-padding">
        <div className="section-container pt-28 pb-8 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-400/10 text-brand-400 mb-6">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              You&apos;re In. Now Book Your Call.
            </h1>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed max-w-lg mx-auto">
              Your application has been received. Pick a time below that works for you and we&apos;ll be ready to dive into your growth strategy.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Calendly Embed */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">Next Step</p>
              <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
                Book Your Strategy Call
              </h2>
              <p className="mt-3 text-body text-txt-secondary">
                Pick a time that works for you. Calls are typically 30 minutes.
              </p>
            </div>

            <div className="rounded-xl bg-surface-100 border border-surface-300/40 overflow-hidden">
              <iframe
                src="https://calendly.com/redemit?hide_gdpr_banner=1&background_color=F4F6F8&text_color=0F1419&primary_color=14B8A6"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a Strategy Call"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fallback */}
      <section className="section-padding pb-12">
        <div className="section-container">
          <div className="mx-auto max-w-lg text-center">
            <p className="text-body-sm text-txt-muted">
              Having trouble with the calendar?{' '}
              <a
                href="https://calendly.com/redemit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 transition-colors"
              >
                Open it directly
              </a>
              {' '}or email us at{' '}
              <a
                href="mailto:david@redemit1.com"
                className="text-brand-400 hover:text-brand-300 transition-colors"
              >
                david@redemit1.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
