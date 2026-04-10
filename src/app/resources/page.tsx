import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, BarChart3, Target, GitBranch, PenTool, FileText, Video, Sparkles, Phone, CheckCircle2, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Free Marketing Resources — Guides, Playbooks & Frameworks',
  description: 'Free resources on running ads, building websites that convert, and getting more leads for your local business. The same systems we use for our clients.',
}

const featuredResource = {
  icon: Code2,
  title: 'The VIBE Coding Cheat Code',
  subtitle: 'The system smart founders are using to build faster than everyone else.',
  description: 'Turn ideas into live funnels, offers, and revenue-generating assets using AI — without developers, delays, or overthinking. The complete VIBE framework: Validate, Implement, Build, Execute. Includes checklists, tool stack, and real-world examples.',
  pageCount: '16 pages',
  tag: 'New — Featured',
  href: '/resources/vibe-coding-cheat-code',
}

const resources = [
  {
    icon: Video,
    number: '01',
    title: 'The Video Ad "Cheat Code"',
    description: 'The exact video ad structures behind the highest-performing campaigns we have ever run. 7 hook archetypes, second-by-second pacing frameworks, and a production shortcut system for 10+ ads per week.',
    pageCount: '14 pages',
    tag: 'Creative',
    href: '/resources/video-ad-cheat-code',
  },
  {
    icon: BarChart3,
    number: '02',
    title: 'Facebook Ads Scaling Playbook',
    description: 'Scale from $1K to $10K/day with the stage-gated budget expansion protocol, creative fatigue management, and KPI action triggers behind $12M+ in managed spend.',
    pageCount: '12 pages',
    tag: 'Media Buying',
    href: '/resources/facebook-ads-playbook',
  },
  {
    icon: Target,
    number: '03',
    title: 'Offer Engineering Framework',
    description: 'Build offers that convert 2-3x higher. Value stack architecture, pricing psychology for cold traffic, 4 differentiation strategies, and an 8-point scoring rubric.',
    pageCount: '10 pages',
    tag: 'Offer Strategy',
    href: '/resources/offer-engineering',
  },
  {
    icon: GitBranch,
    number: '04',
    title: 'Funnel Architecture for Paid Traffic',
    description: 'Convert cold traffic 3-5x better with the exact funnel structures deployed across 50+ brands. Page sequence logic, friction reduction, and stage-by-stage benchmarks.',
    pageCount: '10 pages',
    tag: 'Funnels',
    href: '/resources/funnel-architecture',
  },
  {
    icon: PenTool,
    number: '05',
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
          <div className="section-container pt-28 pb-8 md:pt-36 md:pb-12">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">Free Resources — No Fluff</p>
              <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                The Same Playbooks We Use for Our Clients
              </h1>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                Practical guides on running ads, building landing pages, and generating leads. Not theory — the exact systems we use to help local businesses get more customers. Free.
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
                    Get the VIBE Cheat Code — Free
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="shrink-0 flex items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-400/10 border border-brand-400/20 text-brand-400 group-hover:scale-105 transition-transform duration-300">
                  <Code2 className="h-10 w-10" />
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
      <section className="section-padding py-12 md:py-16 bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-medium mb-6">
              <Phone className="h-3.5 w-3.5" />
              For Business Owners Who Want Results
            </div>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want a Custom Marketing Plan — Not Just Guides?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary max-w-xl mx-auto">
              Our resources give you the knowledge. A free audit gives you the <strong className="text-txt-primary">specific plan for YOUR business</strong> — website review, ad account audit, and a clear roadmap to get more customers.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Full website audit</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Custom marketing plan</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-body-sm text-txt-secondary">Actionable next steps</span>
              </div>
            </div>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-caption text-txt-faint">
              Best for local businesses that want more customers and a clear plan to get them
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
