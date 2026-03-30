import type { Metadata } from 'next'
import { Mail, Phone, Clock, Check } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/constants'
import { ContactForm } from '@/components/shared/contact-form'

export const metadata: Metadata = {
  title: 'Book a Strategy Call',
  description: 'Get a free growth audit and strategy call. We\'ll show you exactly where the opportunities are in your acquisition system.',
}

const benefits = [
  'Full audit of your current acquisition system',
  'Identification of your biggest revenue opportunities',
  'Custom growth roadmap for your business',
  'No commitment required — just clarity',
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">Get Started</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Let&apos;s Build Your Growth Engine
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              Book a free strategy call. We&apos;ll audit your current setup and show you exactly where the biggest opportunities are.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Form + Info */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
            {/* Info Side */}
            <div className="lg:col-span-2">
              <h2 className="text-heading-lg text-txt-primary">
                What You&apos;ll Get on the Call
              </h2>

              <ul className="mt-7 space-y-3.5">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-body text-txt-secondary">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-caption text-txt-muted uppercase tracking-wider">Email</p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-body-sm text-txt-primary hover:text-brand-400 transition-colors">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-caption text-txt-muted uppercase tracking-wider">Phone</p>
                    <a href={`tel:${SITE_CONFIG.phone}`} className="text-body-sm text-txt-primary hover:text-brand-400 transition-colors">
                      {SITE_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-caption text-txt-muted uppercase tracking-wider">Response Time</p>
                    <p className="text-body-sm text-txt-primary">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <div className="surface-elevated p-7 md:p-9">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
