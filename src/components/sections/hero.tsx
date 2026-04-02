import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroVisual } from '@/components/illustrations/hero-visual'
import { RESULTS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Radial gradient ambient glow — soft teal hint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(20,184,166,0.08), transparent 60%)',
        }}
      />

      <div className="relative section-padding">
        <div className="section-container pt-[120px] pb-20 md:pt-[140px] md:pb-28 lg:pb-36">
          <div className="mx-auto max-w-[820px] text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-6">
              Local Business Marketing
            </p>

            <h1 className="text-display-sm text-txt-primary text-balance sm:text-display-lg lg:text-display-xl">
              More Customers. More Calls. More Revenue.
            </h1>

            <p className="mx-auto mt-7 max-w-[580px] text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We build websites, run ads, and create marketing systems that help local businesses get found, get leads, and stay booked.
            </p>

            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/case-studies">
                <Button variant="outline" size="xl">
                  See Our Work
                </Button>
              </Link>
            </div>

            <p className="mt-5 text-caption text-txt-faint">
              Free audit included &middot; No contracts &middot; Real results
            </p>
          </div>

          {/* Hero visual */}
          <div className="mt-16 md:mt-20 mx-auto max-w-[700px]">
            <HeroVisual className="w-full h-auto" />
          </div>

          {/* Stats Bar */}
          <div className="mt-20 md:mt-24">
            <div className="accent-line mb-8" />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {RESULTS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-display-sm text-txt-primary md:text-display">
                    {stat.metric}
                  </div>
                  <div className="mt-1.5 text-caption text-txt-muted uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
