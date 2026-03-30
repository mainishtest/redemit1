import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeader } from '@/components/ui/section-header'
import { TeamNetworkVisual } from '@/components/illustrations/about-visual'
import { RESULTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: 'Redemit One is a growth marketing agency built by operators, not account managers. We build acquisition systems that scale revenue.',
}

const values = [
  {
    icon: Target,
    title: 'Results Over Activity',
    description: 'We don\'t measure success by how busy we are. We measure it by how much revenue we generate for our clients.',
  },
  {
    icon: Users,
    title: 'Operators, Not Managers',
    description: 'Every person on our team has built and scaled brands themselves. We don\'t read playbooks — we write them.',
  },
  {
    icon: TrendingUp,
    title: 'Compound Growth',
    description: 'We don\'t chase quick wins that fade. We build systems that compound — so month 6 is always better than month 1.',
  },
]

const team = [
  {
    name: 'David',
    role: 'Founder & CEO',
    bio: 'Former performance marketer who\'s managed $12M+ in ad spend. Built Redemit One to be the agency he wished existed.',
  },
  {
    name: 'Growth Team',
    role: 'Media Buyers & Strategists',
    bio: 'Senior operators with deep platform expertise across Meta, Google, TikTok, and YouTube. No juniors on your account.',
  },
  {
    name: 'Creative Team',
    role: 'Creatives & Copywriters',
    bio: 'Direct-response specialists who understand that creative is a growth lever, not a branding exercise.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">About Us</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Built by Operators. Driven by Results.
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              Redemit One exists because most agencies are broken. They overpromise, underdeliver, and hide behind vanity metrics. We built the agency we wished existed.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Story */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container max-w-[680px]">
          <h2 className="text-heading-lg text-txt-primary">The Short Version</h2>
          <div className="mt-6 space-y-5 text-body-lg text-txt-secondary leading-relaxed">
            <p>
              We started as brand operators — spending our own money on ads, building our own funnels, and learning what actually drives revenue. Not theory. Not frameworks. Actual results with real dollars on the line.
            </p>
            <p>
              When we started consulting for other brands, we realized the same problems kept showing up: fragmented strategies, agencies that only manage ads without touching the offer or funnel, and a total disconnect between creative and media buying.
            </p>
            <p>
              So we built Redemit One to solve that. One team. Full stack. Every piece of the acquisition engine working together — because that&apos;s the only way it actually scales.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding py-20 bg-surface-0">
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
            className="max-w-lg"
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
            title="Senior Operators. Not Junior Account Managers."
            description="Your account is never handed off to someone learning on the job. Every person at Redemit One has real scaling experience."
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
              Ready to Work With a Team That Delivers?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Let&apos;s talk about your growth goals. No fluff, no sales pitch — just a real conversation about what&apos;s possible.
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
