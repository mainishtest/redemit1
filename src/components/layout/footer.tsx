import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG, NAV_ITEMS, SERVICES } from '@/lib/constants'

export function Footer() {
  return (
    <footer>
      {/* CTA Band — DARK for impact */}
      <div className="section-dark">
        <div className="section-padding">
          <div className="section-container py-24 md:py-32">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
                Next Step
              </p>
              <h2 className="text-display-sm text-txt-primary text-balance md:text-display">
                Ready to scale your growth?
              </h2>
              <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed">
                Book a free strategy call. We&apos;ll audit your current acquisition system and show you exactly where the opportunities are.
              </p>
              <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                <Link href="/contact">
                  <Button variant="primary" size="xl">
                    Book Your Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-caption text-txt-faint">
                No commitment. No pressure. Just clarity.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-padding">
          <div className="section-container">
            <div className="section-divider" />
          </div>
        </div>

        {/* Footer Links — stays dark */}
        <div className="section-padding">
          <div className="section-container py-14 md:py-18">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-0.5 text-lg tracking-tight">
                  <span className="font-semibold text-txt-primary">Redemit</span>
                  <span className="font-semibold text-brand-400">1</span>
                </Link>
                <p className="mt-4 text-body-sm text-txt-muted leading-relaxed max-w-xs">
                  Growth marketing that scales revenue. Media buying, offer creation, and funnel strategy — engineered for ROI.
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h3 className="text-overline uppercase text-txt-muted tracking-widest mb-4">Company</h3>
                <ul className="space-y-2.5">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-body-sm text-txt-secondary hover:text-txt-primary transition-colors duration-200"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/contact" className="text-body-sm text-txt-secondary hover:text-txt-primary transition-colors duration-200">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-overline uppercase text-txt-muted tracking-widest mb-4">Services</h3>
                <ul className="space-y-2.5">
                  {SERVICES.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services#${service.slug}`}
                        className="text-body-sm text-txt-secondary hover:text-txt-primary transition-colors duration-200"
                      >
                        {service.shortTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="text-overline uppercase text-txt-muted tracking-widest mb-4">Get in Touch</h3>
                <ul className="space-y-2.5">
                  <li>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="text-body-sm text-txt-secondary hover:text-txt-primary transition-colors duration-200">
                      {SITE_CONFIG.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-surface-300/40 pt-8 sm:flex-row">
              <p className="text-caption text-txt-faint">
                &copy; {new Date().getFullYear()} Redemit One. All rights reserved.
              </p>
              <div className="flex gap-6 text-caption text-txt-faint">
                <Link href="/privacy" className="hover:text-txt-muted transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-txt-muted transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
