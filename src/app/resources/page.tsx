import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, BarChart3, Target, GitBranch, PenTool, FileText, Video, Sparkles, Phone, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Free Growth Resources — Playbooks, Frameworks & Guides',
  description: 'Free expert-level resources on scaling ads, building offers, architecting funnels, and producing winning creative. The same systems used across 50+ brand engagements.',
}

const featuredResource = {
  icon: Video,
  title: 'The Video Ad "Cheat Code"',
  subtitle: 'Hook formulas, pacing structures, and script templates for winning video ads.',
  description: 'The exact video ad structures behind the highest-performing campaigns we have ever run. 7 hook archetypes, second-by-second pacing frameworks, 5 fill-in-the-blank script templates, and a production shortcut system for creating 10+ ads per week.',
  pageCount: '14 pages',
  tag: 'New Release',
  href: '/resources/video-ad-cheat-code',
}

const resources = [
  {
    icon: BarChart3,
    number: '01',
    title: 'Facebook Ads Scaling Playbook',
    description: 'Scale from $1K to $10K/day with the stage-gated budget expansion protocol, creative fatigue management, and KPI action triggers behind $12M+ in managed spend.',
    pageCount: '12 pages',
    tag: 'Media Buying',
    href: '/resources/facebook-ads-playbook',
  },
  {
    icon: Target,
    number: '02',
    title: 'Offer Engineering Framework',
    description: 'Build offers that convert 2-3x higher. Value stack architecture, pricing psychology for cold traffic, 4 differentiation strategies, and an 8-point scoring rubric.',
    pageCount: '10 pages',
    tag: 'Offer Strategy',
    href: '/resources/offer-engineering',
  },
  {
    icon: GitBranch,
    number: '03',
    title: 'Funnel Architecture for Paid Traffic',
    description: 'Convert cold traffic 3-5x better with the exact funnel structures deployed across 50+ brands. Page sequence logic, friction reduction, and stage-by-stage benchmarks.',
    pageCount: '10 pages',
    tag: 'Funnels',
    href: '/resources/funnel-architecture',
  },
  {
    icon: PenTool,
    number: '04',
    title: 'Creative Testing Framework',
    description: 'Find 2-3 winning ads per week using systematic testing. The creative matrix, kill/iterate/scale thresholds, the iteration protocol, and 8 hook category templates.',
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
          <div className="section-container pt-36 pb-12 md:pt-44 md:pb-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">Free Resources — No Fluff</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                The Same Playbooks We Use to Scale 50+ Brands
              </h1>
              <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
                Expert-level frameworks on media buying, offer creation, funnels, and creative strategy. Not theory — the exact systems behind $12M+ in managed ad spend. Free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resource — Video Ad Cheat Code */}
      <section className="section-padding pb-8">
        <div className="section-container">
          <Link
            href={featuredResource.href}
            className="group block relative overflow-hidden rounded-2xl border border-brand-400/20 bg-gradient-to-br from-surface-100 to-surface-50 hover:border-brand-400/40 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 h-[300px] w-[400px] bg-brand-400/[0.03] rounded-full blur-[100px]" />
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-semibold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    {featuredResource.tag}
                  </span>
                  <span className="flex items-center gap-1 text-overline text-txt-faint">
                    <FileText className="h-3 w-3" />
                    {featuredResource.pageCount}
                  </span>
                </div>
                <h2 className="text-display-sm text-txt-primary md:text-heading-lg lg:text-display-sm">
                  {featuredResource.title}
                </h2>
                <p className="mt-3 text-body-lg text-txt-secondary leading-relaxed max-w-xl">
                  {featuredResource.description}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-body font-semibold text-brand-400 group-hover:gap-3 transition-all duration-300">
                    Get the Cheat Code — Free
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-400/10 border border-brand-400/20 text-brand-400 group-hover:scale-105 transition-transform duration-300">
                  <Video className="h-10 w-10" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <div className="section-padding py-4"><div className="section-container section-divider" /></div>

      {/* All Resources */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container">
          <p className="text-overline uppercase text-txt-muted tracking-widest mb-8">All Frameworks</p>
          <div className="space-y-4">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group block surface-card-hover overflow-hidden"
                >
                  <div className="grid md:grid-cols-12 gap-0">
                    <div className="md:col-span-1 bg-surface-0 flex items-center justify-center py-6 md:py-0">
                      <span className="text-display-sm text-surface-300 font-bold md:text-display group-hover:text-brand-400/30 transition-colors duration-300">
                        {resource.number}
                      </span>
                    </div>

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
                          Get Free Access
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

      {/* Strategy Call CTA */}
      <section className="section-padding py-20 md:py-28 bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-medium mb-6">
              <Phone className="h-3.5 w-3.5" />
              For Serious Growth Teams Only
            </div>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want a Custom Growth Plan — Not Just Frameworks?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary max-w-xl mx-auto">
              Our resources give you the systems. A strategy call gives you the <strong className="text-txt-primary">specific moves for YOUR business</strong> — ad account audit, funnel review, and a 90-day scaling roadmap tailored to your goals.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Full account audit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">90-day growth roadmap</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Actionable next steps</span>
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
