import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { TeamNetworkVisual } from '@/components/illustrations/about-visual'
import { RESULTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Redemit One helps local businesses get more customers through websites, ads, and lead systems that actually work. Based in Idaho, serving businesses everywhere.',
}

const values = [
  {
    icon: Target,
    title: 'Results Over Activity',
    description: 'We don\'t measure success by how many posts we make or reports we send. We measure it by how many customers walk through your door.',
  },
  {
    icon: Users,
    title: 'We Know Local Business',
    description: 'We specialize in helping service businesses grow — roofers, landscapers, contractors, and more. We understand your market because we work in it every day.',
  },
  {
    icon: TrendingUp,
    title: 'Systems That Compound',
    description: 'We don\'t chase quick wins that fade. We build marketing systems that get stronger over time — so month 6 is always better than month 1.',
  },
]

const team = [
  {
    name: 'David',
    role: 'Founder & CEO',
    bio: 'Former performance marketer who\'s helped local businesses generate millions in revenue. Built Redemit One to be the marketing partner he wished existed for small businesses.',
  },
  {
    name: 'Marketing Team',
    role: 'Ads & Strategy',
    bio: 'Hands-on marketers with deep expertise in Facebook, Google, and local advertising. No juniors on your account — only people who know how to drive leads.',
  },
  {
    name: 'Build Team',
    role: 'Web & Systems',
    bio: 'Designers and developers who build fast, conversion-focused websites and lead capture systems. Everything is built to get your phone ringing.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-28 pb-10 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">About Us</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              We Help Local Businesses Get More Customers
            </h1>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
              Redemit One exists because most marketing agencies don&apos;t understand local business. They sell vanity metrics and generic packages. We build systems that actually fill your schedule.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Story */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container max-w-[680px]">
          <h2 className="text-heading-lg text-txt-primary">The Short Version</h2>
          <div className="mt-6 space-y-5 text-body-lg text-txt-secondary leading-relaxed">
            <p>
              We started by helping a few local businesses in Idaho get more customers — building their websites, running their ads, and setting up systems to capture and follow up with every lead. Not theory. Real results with real money on the line.
            </p>
            <p>
              The same problems kept showing up everywhere: websites that don&apos;t convert, ads that waste money, and no system to follow up with leads before they go cold. Most agencies only fix one piece. The rest falls through the cracks.
            </p>
            <p>
              So we built Redemit One to solve that. One team handles everything — your website, your ads, your lead capture, and your follow-up. It all works together because we build it all together.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-12 bg-surface-0">
        <div className="section-container">
          <div className="accent-line mb-10" />
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
      </section>

      {/* Values */}
      <section className="section-spacing section-padding">
        <div className="section-container">
          <SectionHeader
            label="Our Principles"
            title="What We Believe"
            align="left"
            className="max-w-lg mb-8"
          />

          <div className="mt-14 grid gap-px bg-surface-300/30 rounded-xl overflow-hidden md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="bg-surface-50 p-8 md:p-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted mb-5">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="text-heading-sm text-txt-primary">{value.title}</h3>
                  <p className="mt-3 text-body-sm text-txt-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <SectionHeader
            label="The Team"
            title="Real Marketers. Not Junior Account Managers."
            description="Your business is never handed off to someone learning on the job. Every person at Redemit One has hands-on experience driving leads for local businesses."
            className="mb-8"
          />

          {/* Team network visual */}
          <div className="mt-12 mb-16 mx-auto max-w-[520px]">
            <TeamNetworkVisual className="w-full h-auto" />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="surface-card p-7 text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-surface-200 border border-surface-300/40 flex items-center justify-center text-heading text-txt-muted mb-5">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-heading-sm text-txt-primary">{member.name}</h3>
                <p className="text-body-sm text-txt-muted mt-1">{member.role}</p>
                <p className="mt-4 text-body-sm text-txt-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Ready to Get More Customers?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Get a free audit of your website and marketing. No fluff, no sales pitch — just a clear look at where you&apos;re leaving money on the table.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get Your Free Audit
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
