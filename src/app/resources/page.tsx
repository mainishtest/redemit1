import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, BarChart3, Target, GitBranch, PenTool, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides, frameworks, and insights on media buying, offer creation, and scaling paid acquisition profitably.',
}

const resources = [
  {
    icon: BarChart3,
    number: '01',
    title: 'The Facebook Ads Scaling Playbook',
    description: 'Our complete framework for scaling Meta ad campaigns from $1K/day to $10K/day without killing ROAS. Budget expansion protocols, creative fatigue management, and KPI monitoring.',
    pageCount: '12 pages',
    tag: 'Media Buying',
    href: '/resources/facebook-ads-playbook',
  },
  {
    icon: Target,
    number: '02',
    title: 'The Offer Engineering Framework',
    description: 'How to build offers that convert 2-3x higher than your competitors. Value stack architecture, pricing psychology, differentiation strategies, and a scoring rubric.',
    pageCount: '10 pages',
    tag: 'Offer Strategy',
    href: '/resources/offer-engineering',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'Funnel Architecture for Paid Traffic',
    description: 'The exact funnel structures we use to turn cold traffic into profitable customers. Page sequence design, friction reduction, and stage-by-stage analytics.',
    pageCount: '10 pages',
    tag: 'Funnels',
    href: '/resources/funnel-architecture',
  },
  {
    icon: PenTool,
    number: '04',
    title: 'Creative Testing Framework Walkthrough',
    description: 'A repeatable system for testing ad creatives — hooks, angles, formats, iteration cycles, and decision-making from performance data. Build a pipeline that never runs dry.',
    pageCount: '10 pages',
    tag: 'Creative',
    href: '/resources/creative-testing',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/3 h-[400px] w-[500px] bg-brand-400/[0.02] rounded-full blur-[120px]" />

        <div className="relative section-padding">
          <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">Free Resources</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                Growth Playbooks &amp; Frameworks
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                The same frameworks and strategies we use with our clients — shared for free. Expert-level resources on media buying, offers, funnels, and creative strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Resources Grid */}
      <section className="section-padding py-20">
        <div className="section-container">
          <div className="space-y-5">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group block surface-card-hover overflow-hidden"
                >
                  <div className="grid md:grid-cols-12 gap-0">
                    {/* Left accent */}
                    <div className="md:col-span-1 bg-surface-0 flex items-center justify-center py-6 md:py-0">
                      <span className="text-display-sm text-surface-300 font-bold md:text-display group-hover:text-brand-400/30 transition-colors duration-300">
                        {resource.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-11 p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted group-hover:text-brand-400 group-hover:border-brand-400/30 transition-all duration-300">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-overline uppercase text-txt-faint tracking-widest">{resource.tag}</span>
                          <span className="text-overline text-txt-faint">&middot;</span>
                          <span className="flex items-center gap-1 text-overline text-txt-faint">
                            <FileText className="h-3 w-3" />
                            {resource.pageCount}
                          </span>
                        </div>

                        <h3 className="text-heading-lg text-txt-primary group-hover:text-txt-primary transition-colors">
                          {resource.title}
                        </h3>
                        <p className="mt-2.5 text-body text-txt-secondary leading-relaxed max-w-xl">
                          {resource.description}
                        </p>
                      </div>

                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-2 text-body font-medium text-txt-muted group-hover:text-brand-400 transition-colors duration-300">
                          <Download className="h-4 w-4" />
                          Download Free
                          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">
              Beyond the Playbooks
            </p>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want Personalized Growth Advice?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Our resources will get you started, but a strategy call will get you there faster. We will audit your current setup and show you exactly where the opportunities are.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Book a Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
