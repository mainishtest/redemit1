import type { Metadata } from 'next'
import { TrendingUp, Zap, BarChart3, Shield, Target, Layers } from 'lucide-react'
import { ResourceLandingLayout } from '@/components/shared/resource-landing-layout'

export const metadata: Metadata = {
  title: 'Scale Facebook Ads from $1K to $10K/Day Without Killing ROAS — Free Playbook',
  description: 'The exact budget expansion protocol, creative rotation system, and KPI framework behind $12M+ in managed Meta ad spend across 50+ brands.',
}

const benefits = [
  {
    icon: TrendingUp,
    title: 'Budget Expansion Protocol',
    text: 'The stage-gated system for scaling spend 15-20% every 3 days without triggering the learning phase or destabilizing your ROAS.',
  },
  {
    icon: Zap,
    title: 'Creative Fatigue Early Warning',
    text: 'Know exactly when to rotate creative BEFORE performance drops — using frequency × CTR thresholds, not gut feeling.',
  },
  {
    icon: BarChart3,
    title: 'KPI Action Triggers',
    text: 'Pre-built monitoring framework with exact metrics, check frequencies, and if/then decision rules for every spend tier.',
  },
  {
    icon: Shield,
    title: '7 Scaling Mistakes (With Fixes)',
    text: 'The errors we see in 80% of ad account audits — each one with a specific countermeasure you can implement today.',
  },
  {
    icon: Target,
    title: 'Horizontal vs. Vertical Framework',
    text: 'A decision matrix for when to expand audiences vs. increase budget — so you never waste spend guessing which lever to pull.',
  },
  {
    icon: Layers,
    title: '30-Day Implementation Roadmap',
    text: 'Week-by-week action plan with milestones. Not theory — a specific sequence you can start executing Monday morning.',
  },
]

const chapters = [
  { number: '01', title: 'Why Most Scaling Fails — The Structural Problem' },
  { number: '02', title: 'The Budget Expansion Protocol (Stage-Gated)' },
  { number: '03', title: 'Audience Architecture at Scale' },
  { number: '04', title: 'Creative Rotation & Fatigue Management' },
  { number: '05', title: 'KPI Monitoring & If/Then Action Triggers' },
  { number: '06', title: 'Horizontal vs. Vertical Scaling Decision Matrix' },
  { number: '07', title: 'The 7 Scaling Mistakes (And How to Fix Each)' },
  { number: '08', title: 'Your 30-Day Scaling Action Plan' },
]

export default function FacebookAdsPlaybookPage() {
  return (
    <ResourceLandingLayout
      overline="Free Playbook — 12 Pages"
      title="Scale Meta Ads from $1K/Day to $10K/Day — Without Killing Your ROAS"
      subtitle="The exact budget expansion protocol behind $12M+ in managed ad spend. Not theory — the specific system we use with every client at Redemit One."
      description="Most brands hit a wall between $1K-3K/day because they treat scaling like a volume dial. Increase budget → get more results. That mental model is broken. When you increase budget without changing creative, audiences, and campaign structure simultaneously, three things break at once: frequency spikes, creative fatigues, and audience pools dilute. This playbook is the structural fix. It is the same stage-gated protocol we have used to scale 50+ brands past $10K/day — and it works because it coordinates every moving piece instead of just turning up spend."
      benefits={benefits}
      chapters={chapters}
      pullQuote="Every strategy in this playbook has been battle-tested with real budgets on real campaigns. We spent years and millions of dollars refining what works. This is the distilled, implementation-ready version."
      pullQuoteAttribution="Redemit One Growth Team"
      resourceTitle="Facebook Ads Scaling Playbook"
      downloadUrl="/downloads/facebook-ads-scaling-playbook.pdf"
      formTag="facebook-ads-scaling-playbook"
      pageCount="12 pages"
      ctaText="Download the Scaling Playbook"
      socialProofLine="Used by 50+ brands managing $1K-$50K/day in ad spend"
      whoItsFor={['Media Buyers', 'DTC Brands', 'Performance Marketers', 'Growth Teams']}
    />
  )
}
