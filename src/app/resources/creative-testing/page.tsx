import type { Metadata } from 'next'
import { FlaskConical, Clapperboard, LineChart, Repeat, Rocket, PenTool } from 'lucide-react'
import { ResourceLandingLayout } from '@/components/shared/resource-landing-layout'

export const metadata: Metadata = {
  title: 'Find Winning Ads 3x Faster — The Creative Testing Framework',
  description: 'The systematic creative testing system behind 15-20 new concepts per week with a 15% hit rate. Hooks, angles, formats, decision thresholds, and iteration protocols.',
}

const benefits = [
  {
    icon: FlaskConical,
    title: 'The Creative Testing Matrix',
    text: 'Stop testing randomly. This matrix systematically varies hooks, angles, and formats — so every single test generates usable learnings, not just noise.',
  },
  {
    icon: Clapperboard,
    title: 'Testing vs. Scaling Structure',
    text: 'Campaign architecture that cleanly separates R&D spend from scaling spend. Your winners never get polluted by unproven creative.',
  },
  {
    icon: LineChart,
    title: 'Kill / Iterate / Scale Framework',
    text: 'Exact thresholds for what to do with every test result. No more second-guessing — you will know within 72 hours what deserves more budget.',
  },
  {
    icon: Repeat,
    title: 'The Winner Iteration Protocol',
    text: 'Turn 1 winning ad into 5-10 high-performing variations. Extend the lifespan of every winner by 3-5x before fatigue sets in.',
  },
  {
    icon: Rocket,
    title: 'Velocity Benchmarks by Spend',
    text: 'Exactly how many new concepts to test per week at $1K, $3K, $5K, and $10K+/day — so your pipeline never bottlenecks your growth.',
  },
  {
    icon: PenTool,
    title: '8 Hook Categories + Templates',
    text: 'Proven hook archetypes you can adapt to any product or industry. Start your next creative batch in minutes, not days.',
  },
]

const chapters = [
  { number: '01', title: 'Why Creative Is Targeting (The Algorithm Shift)' },
  { number: '02', title: 'The Creative Testing Matrix (Hooks × Angles × Formats)' },
  { number: '03', title: 'Testing Infrastructure Setup' },
  { number: '04', title: 'Kill / Iterate / Scale — Decision Framework' },
  { number: '05', title: 'The Winner Iteration Protocol (1 → 10)' },
  { number: '06', title: 'Creative Velocity Benchmarks by Spend Level' },
  { number: '07', title: '8 Hook Categories + Angle Templates' },
]

export default function CreativeTestingPage() {
  return (
    <ResourceLandingLayout
      overline="Free Framework — 10 Pages"
      title="The System That Produces 2-3 Winning Ads Per Week — On Repeat"
      subtitle="Our top accounts test 15-20 new concepts per week with a 15% hit rate. This framework is the complete system — from test design to winner iteration."
      description="In the age of algorithmic targeting, creative IS targeting. Meta's algorithm uses your ad creative to find the right audience — meaning your images, hooks, and copy determine who sees your ads as much as any audience setting. The brands that win are the ones testing the most creative at the highest velocity. Not because every test produces a winner, but because volume increases the probability of finding the outlier performers that drive 80% of results. This framework is the complete system: matrix-based test design, campaign structure that separates R&D from scaling, kill/iterate/scale decision thresholds, and the iteration protocol that turns one winning ad into an entire family of high-performers."
      benefits={benefits}
      chapters={chapters}
      pullQuote="Volume is the strategy. 15-20 new concepts per week, 15% hit rate, 2-3 winners per week. That is enough to continuously refresh any ad account and sustain scale indefinitely."
      pullQuoteAttribution="Redemit One Creative Team"
      resourceTitle="Creative Testing Framework"
      downloadUrl="/downloads/creative-testing-framework.pdf"
      formTag="creative-testing-framework"
      pageCount="10 pages"
      ctaText="Download the Testing Framework"
      socialProofLine="The exact system our team uses to produce 2-3 winners per week"
      whoItsFor={['Creative Strategists', 'Media Buyers', 'Brand Owners', 'Performance Teams']}
    />
  )
}
