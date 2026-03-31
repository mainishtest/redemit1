import type { Metadata } from 'next'
import { Video, Timer, MessageSquare, Eye, BarChart3, Wand2 } from 'lucide-react'
import { ResourceLandingLayout } from '@/components/shared/resource-landing-layout'

export const metadata: Metadata = {
  title: 'The Video Ad Cheat Code — Structure Winning Video Ads in 2025',
  description: 'The exact video ad structure, hook formulas, pacing frameworks, and CTA sequences behind the highest-performing video ads on Meta, TikTok, and YouTube.',
}

const benefits = [
  {
    icon: Eye,
    title: 'The 3-Second Hook Formula',
    text: 'The first 3 seconds determine 90% of your video\'s performance. This section breaks down the 7 hook archetypes that stop the scroll — with shot-by-shot examples.',
  },
  {
    icon: Timer,
    title: 'The Pacing Framework (15s / 30s / 60s)',
    text: 'Exact second-by-second structures for short, medium, and long-form video ads. Where to place the hook, proof, offer, and CTA for maximum retention.',
  },
  {
    icon: MessageSquare,
    title: 'Script Architecture Templates',
    text: '5 proven script structures you can fill in for any product or service: Problem-Solution, Testimonial Lead, Demo Stack, Contrarian, and Listicle.',
  },
  {
    icon: Video,
    title: 'Format Selection Matrix',
    text: 'UGC vs. designed vs. talking head vs. b-roll. A decision framework for which format performs best based on your product type, price point, and audience.',
  },
  {
    icon: BarChart3,
    title: 'Performance Benchmarks',
    text: 'What "good" looks like for hook rate, hold rate, CTR, and ThruPlay rate. Benchmarks by format, length, and platform so you can grade every video instantly.',
  },
  {
    icon: Wand2,
    title: 'The Production Shortcut System',
    text: 'How to produce 10-15 video ads per week without a production team. Modular filming, batch editing, and the "remix" method for multiplying assets.',
  },
]

const chapters = [
  { number: '01', title: 'Why Video Ads Outperform Everything Else in 2025' },
  { number: '02', title: 'The 3-Second Hook Formula (7 Archetypes)' },
  { number: '03', title: 'Second-by-Second Pacing Frameworks' },
  { number: '04', title: '5 Script Architecture Templates' },
  { number: '05', title: 'Format Selection Matrix (UGC, Designed, Hybrid)' },
  { number: '06', title: 'Performance Benchmarks by Platform & Length' },
  { number: '07', title: 'The Production Shortcut System (10+ Ads/Week)' },
  { number: '08', title: 'CTA Sequences That Drive Action' },
]

export default function VideoAdCheatCodePage() {
  return (
    <ResourceLandingLayout
      overline="New Release — 14 Pages"
      title="The Video Ad &ldquo;Cheat Code&rdquo; That Our Best-Performing Clients Use to Dominate Paid Social"
      subtitle="90% of video ad performance is determined in the first 3 seconds. This guide gives you the exact hook formulas, pacing structures, and script templates behind the highest-converting video ads we have ever produced."
      description="Video ads are the single highest-performing ad format on every major platform — Meta, TikTok, YouTube, and beyond. But most brands approach video the wrong way: they think production value is what matters. It is not. Structure is what matters. The hook, the pacing, the script architecture, and the CTA sequence determine whether your video converts or gets skipped. This cheat code is the distilled version of everything we have learned producing hundreds of video ads across 50+ brands. It includes the 7 hook archetypes that consistently stop the scroll, second-by-second pacing frameworks for 15s, 30s, and 60s formats, 5 fill-in-the-blank script templates, and the production shortcut system we use to create 10-15 video ads per week without a full production team."
      benefits={benefits}
      chapters={chapters}
      pullQuote="Production value is a myth. The ugliest UGC video with the right hook and structure will outperform a $50K brand video every single time. Structure beats production, always."
      pullQuoteAttribution="Redemit One Creative Team"
      resourceTitle="The Video Ad Cheat Code"
      downloadUrl="/downloads/video-ad-cheat-code.pdf"
      formTag="video-ad-cheat-code"
      pageCount="14 pages"
      ctaText="Get the Video Ad Cheat Code"
      urgencyText="Our most-requested resource — now available for free download"
      socialProofLine="Based on data from 500+ video ads across 50+ brand accounts"
      whoItsFor={['Video Editors', 'Creative Strategists', 'Brand Owners', 'UGC Creators']}
    />
  )
}
