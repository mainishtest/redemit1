import type { Metadata } from 'next'
import { Layers, DollarSign, Target, Sparkles, ClipboardList, ShieldCheck } from 'lucide-react'
import { ResourceLandingLayout } from '@/components/shared/resource-landing-layout'

export const metadata: Metadata = {
  title: 'The Offer Engineering Framework — Double Your Conversion Rate Without More Traffic',
  description: 'Build offers that convert 2-3x higher using value stack architecture, pricing psychology, and a proprietary 8-point scoring rubric.',
}

const benefits = [
  {
    icon: Layers,
    title: 'The 6-Part Offer Anatomy',
    text: 'Most brands have 2-3 of the 6 critical components. This section shows you which ones you are missing — and exactly how to build each from scratch.',
  },
  {
    icon: DollarSign,
    title: 'Value Stack Architecture',
    text: 'Engineer perceived value that is 5-10x your price point using strategic bundling, bonuses, and framing that makes your price feel like a no-brainer.',
  },
  {
    icon: Target,
    title: 'Paid Traffic Pricing Psychology',
    text: 'Pricing for cold traffic is fundamentally different. These principles are built for environments where you have 3 seconds to justify the number.',
  },
  {
    icon: Sparkles,
    title: '4 Differentiation Strategies',
    text: 'Escape the comparison trap. Four proven approaches for standing out in saturated markets — none of which involve lowering your price.',
  },
  {
    icon: ClipboardList,
    title: '8-Point Offer Scoring Rubric',
    text: 'Rate your offer across 8 dimensions with benchmarks. Score below 6 on any dimension? That is your biggest conversion leak.',
  },
  {
    icon: ShieldCheck,
    title: 'Quick-Win Conversion Levers',
    text: '6 specific changes you can test THIS WEEK for immediate lift — no redesign, no dev work, no new creative needed.',
  },
]

const chapters = [
  { number: '01', title: 'Why Your Ads Are Not the Problem — Your Offer Is' },
  { number: '02', title: 'The 6 Components of an Irresistible Offer' },
  { number: '03', title: 'Value Stack Architecture (5-10x Perceived Value)' },
  { number: '04', title: 'Pricing Psychology for Cold Traffic' },
  { number: '05', title: '4 Differentiation Strategies for Saturated Markets' },
  { number: '06', title: 'The 8-Point Offer Scoring Rubric' },
  { number: '07', title: '6 Quick-Win Conversion Levers (This Week)' },
]

export default function OfferEngineeringPage() {
  return (
    <ResourceLandingLayout
      overline="Free Framework — 10 Pages"
      title="Double Your Conversion Rate by Fixing the One Thing Most Brands Ignore"
      subtitle="8 out of 10 brands we audit have the same problem: their ads are fine, but their offer is weak. This framework fixes that — and the results compound across everything you run."
      description="We have audited hundreds of ad accounts. The pattern is always the same: brands say their ads are not working, but the real problem is their offer. A strong offer makes mediocre ads profitable. A weak offer makes the best ads in the world fail. Your offer is the single most powerful lever in your entire acquisition system because it multiplies the effectiveness of everything else — creative, targeting, funnels, email. This framework is the exact system for building offers that convert 2-3x higher, from value stack architecture to pricing psychology to the 8-point scoring rubric we use to diagnose every client's offer in the first week."
      benefits={benefits}
      chapters={chapters}
      pullQuote="If your conversion rate is below 2%, your first move should be to re-engineer your offer — not your creative or targeting. The offer is the foundation everything else is built on."
      pullQuoteAttribution="Redemit One Growth Team"
      resourceTitle="Offer Engineering Framework"
      downloadUrl="/downloads/offer-engineering-framework.pdf"
      formTag="offer-engineering-framework"
      pageCount="10 pages"
      ctaText="Download the Offer Framework"
      socialProofLine="The methodology behind 2-3x conversion lifts across 50+ brand engagements"
      whoItsFor={['Ecommerce Brands', 'SaaS Companies', 'Course Creators', 'Service Businesses']}
    />
  )
}
