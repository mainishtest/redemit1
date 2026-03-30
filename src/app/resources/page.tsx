import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Download, BookOpen, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Free guides, frameworks, and insights on media buying, offer creation, and scaling paid acquisition profitably.',
}

const resources = [
  {
    icon: Download,
    title: 'The Facebook Ads Scaling Playbook',
    description: 'Our complete framework for scaling Meta ad campaigns from $1K/day to $10K/day without killing ROAS.',
    tag: 'Guide',
    href: '/resources/facebook-ads-playbook',
  },
  {
    icon: BookOpen,
    title: 'The Offer Engineering Framework',
    description: 'How to build offers that convert 2-3x higher than your competitors — pricing, positioning, and packaging.',
    tag: 'Guide',
    href: '/resources/offer-engineering',
  },
  {
    icon: BookOpen,
    title: 'Funnel Architecture for Paid Traffic',
    description: 'The exact funnel structures we use to turn cold traffic into profitable customers across every major platform.',
    tag: 'Guide',
    href: '/resources/funnel-architecture',
  },
  {
    icon: Video,
    title: 'Creative Testing Framework Walkthrough',
    description: 'A deep-dive into how we test and iterate on ad creative to find winners faster and scale them profitably.',
    tag: 'Video',
    href: '/resources/creative-testing',
  },
]

const articles = [
  {
    title: 'Why Your ROAS Is Lying to You (And What to Track Instead)',
    description: 'Most brands optimize for the wrong metric. Here\'s what actually matters for profitable scaling.',
    date: '2024-03-15',
    readTime: '6 min read',
    href: '/resources/roas-truth',
  },
  {
    title: 'The 3 Offer Mistakes Killing Your Conversion Rate',
    description: 'If your ads are getting clicks but your funnel isn\'t converting, the problem is almost always your offer.',
    date: '2024-03-01',
    readTime: '8 min read',
    href: '/resources/offer-mistakes',
  },
  {
    title: 'How We Scaled a DTC Brand from $40K to $280K/mo',
    description: 'A behind-the-scenes look at the strategy, timeline, and exact changes that drove a 7x revenue increase.',
    date: '2024-02-15',
    readTime: '10 min read',
    href: '/resources/dtc-scale-story',
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">Resources</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Free Growth Playbooks & Insights
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              The same frameworks and strategies we use with our clients — shared for free. No fluff, no gated webinars. Just actionable knowledge.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Guides */}
      <section className="section-padding py-20">
        <div className="section-container">
          <h2 className="text-heading-lg text-txt-primary mb-8">Guides & Frameworks</h2>
          <div className="grid gap-px bg-surface-300/30 rounded-xl overflow-hidden md:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group bg-surface-50 p-7 md:p-8 transition-colors duration-300 hover:bg-surface-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted group-hover:text-txt-secondary transition-colors">
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div>
                      <span className="text-overline uppercase text-txt-faint tracking-widest">{resource.tag}</span>
                      <h3 className="mt-1.5 text-heading-sm text-txt-primary">
                        {resource.title}
                      </h3>
                      <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
                        {resource.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-body-sm font-medium text-txt-muted group-hover:text-brand-400 transition-colors">
                        Download free
                        <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <h2 className="text-heading-lg text-txt-primary mb-8">Latest Articles</h2>
          <div className="space-y-0 divide-y divide-surface-300/40">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group flex items-start justify-between gap-6 py-7 transition-colors"
              >
                <div>
                  <h3 className="text-heading-sm text-txt-primary group-hover:text-brand-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-txt-secondary leading-relaxed">
                    {article.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-caption text-txt-muted">
                    <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    <span className="text-surface-400">&middot;</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-txt-faint group-hover:text-brand-400 group-hover:translate-x-0.5 transition-all mt-1.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want Personalized Growth Advice?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Our resources will get you started, but a strategy call will get you there faster.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="xl">
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
