import type { Metadata } from 'next'
import { GitBranch, Workflow, MousePointerClick, Gauge, BarChart3, Smartphone } from 'lucide-react'
import { ResourceLandingLayout } from '@/components/shared/resource-landing-layout'

export const metadata: Metadata = {
  title: 'Convert Cold Traffic 3-5x Better — Funnel Architecture for Paid Traffic',
  description: 'The exact funnel structures deployed across 50+ brands. Page sequence design, friction reduction, stage-by-stage benchmarks, and mobile optimization.',
}

const benefits = [
  {
    icon: GitBranch,
    title: '3 Proven Funnel Archetypes',
    text: 'Direct response, lead magnet, and application funnels — with a decision framework for choosing the right one based on your price point and sales cycle.',
  },
  {
    icon: Workflow,
    title: 'Page-by-Page Sequence Logic',
    text: 'What goes where and WHY. Exact breakdowns showing the psychology behind every step in the flow — so you build with intention, not guesswork.',
  },
  {
    icon: MousePointerClick,
    title: '5 Friction Killers',
    text: 'The 5 highest-impact techniques for eliminating drop-off at every stage. Each one is based on real funnel analytics across 50+ deployments.',
  },
  {
    icon: Gauge,
    title: 'The Handoff Framework',
    text: 'Micro-commitment sequences that bridge the gap between "interested" and "purchased." This is where most funnels leak — and most brands never test.',
  },
  {
    icon: BarChart3,
    title: 'Stage-by-Stage Benchmarks',
    text: 'Know if your CTR, opt-in rate, add-to-cart, and checkout completion are above or below average — with specific fixes for each scenario.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimization Checklist',
    text: '70-80% of your paid traffic is on phones. This checklist catches the 8 most common mobile conversion killers we see in audits.',
  },
]

const chapters = [
  { number: '01', title: 'Why Cold Traffic Needs a Dedicated Funnel' },
  { number: '02', title: 'The 3 Funnel Archetypes (With Decision Framework)' },
  { number: '03', title: 'Page Sequence Design — What Goes Where & Why' },
  { number: '04', title: '5 Friction Reduction Techniques' },
  { number: '05', title: 'The Handoff Framework (Micro-Commitments)' },
  { number: '06', title: 'Stage-by-Stage Analytics & Benchmarks' },
  { number: '07', title: 'Mobile Optimization Checklist (8 Points)' },
]

export default function FunnelArchitecturePage() {
  return (
    <ResourceLandingLayout
      overline="Free Guide — 10 Pages"
      title="Why Your Paid Traffic Isn&apos;t Converting — and the Funnel Fix That Changes Everything"
      subtitle="Sending cold traffic to your homepage is the most expensive mistake in acquisition. A properly architected funnel converts 3-5x better. Here is how to build one."
      description="Cold traffic does not buy the way warm traffic does. A visitor from a paid ad has no relationship with your brand, no trust, and no context. Sending them to a generic homepage or product page is like asking someone to marry you on the first date. A well-built funnel converts 3-5x better because it serves one audience with one message leading to one action. That singularity of purpose is what drives conversion. This guide covers the exact funnel structures we have deployed across 50+ brand engagements — from page sequence design to friction reduction to the analytics benchmarks that tell you exactly where your funnel is leaking and how to fix it."
      benefits={benefits}
      chapters={chapters}
      pullQuote="Never send paid traffic to your homepage. A funnel serves one audience with one message leading to one action. That singularity of purpose is the entire reason it outperforms by 3-5x."
      pullQuoteAttribution="Redemit One Growth Team"
      resourceTitle="Funnel Architecture for Paid Traffic"
      downloadUrl="/downloads/funnel-architecture-paid-traffic.pdf"
      formTag="funnel-architecture-paid-traffic"
      pageCount="10 pages"
      ctaText="Download the Funnel Blueprint"
      socialProofLine="The exact structures behind 50+ successful funnel deployments"
      whoItsFor={['Paid Traffic Teams', 'Ecommerce Brands', 'Lead Gen Businesses', 'Funnel Builders']}
    />
  )
}
