import type { Metadata } from 'next'
import {
  ArrowRight,
  Search,
  Globe,
  TrendingUp,
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  ClipboardList,
  BarChart3,
  MessageSquare,
  Target,
  Shield,
  Star,
  ChevronDown,
  Shovel,
  TreePine,
  Home,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { InlineAuditForm } from './audit-form'

export const metadata: Metadata = {
  title: 'Landscaping Marketing — Meridian, Boise & Nampa | Redemit One',
  description:
    'Get more landscaping leads in the Treasure Valley. Free website & marketing audit for landscaping and hardscaping businesses in Meridian, Boise, and Nampa, Idaho.',
  openGraph: {
    title: 'Landscaping Marketing — Meridian, Boise & Nampa',
    description:
      'Get more landscaping leads in the Treasure Valley. Free website & marketing audit for landscaping and hardscaping businesses.',
  },
}

/* ═══════════════════════════════════════════════════
   SECTION 1: HERO
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 30%, rgba(20,184,166,0.06), transparent 60%)',
        }}
      />

      <div className="relative section-padding">
        <div className="section-container pt-[120px] pb-16 md:pt-[140px] md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/5 px-4 py-1.5 mb-6">
                <MapPin className="h-3.5 w-3.5 text-brand-400" />
                <span className="text-caption font-medium text-brand-400">
                  Meridian &middot; Boise &middot; Nampa
                </span>
              </div>

              <h1 className="text-display-sm text-txt-primary text-balance sm:text-display-lg lg:text-display">
                Get More Landscaping Jobs Without Chasing Referrals
              </h1>

              <p className="mt-6 max-w-[520px] text-body-lg text-txt-secondary leading-relaxed text-pretty">
                We help landscaping and hardscaping companies across the Treasure Valley get found online, generate consistent leads, and book more jobs — month after month.
              </p>

              <div className="mt-8">
                <Link href="#audit">
                  <Button variant="primary" size="xl">
                    Get Your Free Growth Audit
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <p className="mt-3 text-caption text-txt-faint">
                  100% free &middot; No contracts &middot; Takes 2 minutes
                </p>
              </div>
            </div>

            {/* Right: Trust indicators + visual */}
            <div className="relative">
              <div className="rounded-2xl border border-surface-300 bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10">
                    <BarChart3 className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-heading-sm text-txt-primary">Local Growth Audit</p>
                    <p className="text-caption text-txt-muted">Free — No obligation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: Globe, text: 'Website conversion review' },
                    { icon: Search, text: 'Local SEO ranking analysis' },
                    { icon: TrendingUp, text: 'Lead generation opportunities' },
                    { icon: Target, text: 'Competitor comparison' },
                    { icon: MessageSquare, text: 'Actionable recommendations' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-100">
                        <item.icon className="h-4 w-4 text-brand-400" />
                      </div>
                      <span className="text-body text-txt-secondary">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-surface-300">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1.5">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-7 w-7 rounded-full bg-surface-200 border-2 border-white flex items-center justify-center"
                        >
                          <Users className="h-3 w-3 text-txt-muted" />
                        </div>
                      ))}
                    </div>
                    <p className="text-caption text-txt-muted">
                      Trusted by Treasure Valley businesses
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 2: PROBLEM
   ═══════════════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    {
      icon: Globe,
      title: 'Your website looks fine — but doesn\'t bring leads',
      description:
        'You paid someone to build it. It looks decent. But nobody fills out the form. Nobody calls. It\'s just sitting there.',
    },
    {
      icon: Users,
      title: 'You\'re relying on referrals and word of mouth',
      description:
        'Referrals are great until they slow down. Then you\'re scrambling. You need a system that generates leads whether or not someone refers you.',
    },
    {
      icon: Search,
      title: 'Competitors show up on Google — you don\'t',
      description:
        'When homeowners search "landscaping near me" or "patio installers Meridian," your competitors are there. You\'re invisible.',
    },
    {
      icon: TrendingUp,
      title: 'You get busy, then slow, then busy again',
      description:
        'No consistency. No pipeline. You go from booked out to wondering where the next job is coming from. It doesn\'t have to be like that.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            Sound Familiar?
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Good Work Doesn&apos;t Sell Itself
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            You do great landscaping. Your customers love you. But you shouldn&apos;t have to wait by the phone hoping the next job shows up.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="surface-card p-7 hover:shadow-soft-lg transition-shadow duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 mb-4">
                <XCircle className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-heading-sm text-txt-primary mb-2">
                {problem.title}
              </h3>
              <p className="text-body text-txt-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 3: SOLUTION
   ═══════════════════════════════════════════════════ */
function SolutionSection() {
  const solutions = [
    {
      icon: Globe,
      title: 'Website That Converts',
      description:
        'We turn your website into a lead-generating machine. Clear messaging, strong calls to action, mobile-friendly, fast-loading — built to convert visitors into calls and form fills.',
      points: ['Conversion-focused design', 'Mobile-first performance', 'Clear calls to action'],
    },
    {
      icon: Search,
      title: 'Local SEO That Ranks',
      description:
        'Show up when local homeowners search for what you do. Google Business Profile optimization, local keyword targeting, and review strategy — so you show up first, not your competitor.',
      points: ['Google Business Profile setup', 'Local keyword targeting', '"Near me" search visibility'],
    },
    {
      icon: TrendingUp,
      title: 'Lead System That Runs',
      description:
        'A repeatable system that brings you leads every month. No more feast-or-famine. Paid ads, retargeting, and follow-up sequences that keep your pipeline full year-round.',
      points: ['Consistent monthly leads', 'Automated follow-up', 'Measurable ROI tracking'],
    },
  ]

  return (
    <section className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            How We Fix It
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            A Marketing System Built for Landscapers
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Not generic templates. Not cookie-cutter SEO packages. A tailored system designed for how landscaping businesses actually get customers in the Treasure Valley.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="surface-card p-7"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 mb-5">
                <solution.icon className="h-6 w-6 text-brand-400" />
              </div>
              <h3 className="text-heading text-txt-primary mb-3">
                {solution.title}
              </h3>
              <p className="text-body text-txt-secondary leading-relaxed mb-5">
                {solution.description}
              </p>
              <ul className="space-y-2.5">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-body-sm text-txt-secondary">
                    <CheckCircle2 className="h-4 w-4 text-brand-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 4: WHAT YOU GET (Bullets)
   ═══════════════════════════════════════════════════ */
function WhatYouGetSection() {
  const outcomes = [
    {
      icon: Phone,
      title: 'More calls from homeowners in your area',
      description: 'People searching for landscaping, hardscaping, patios, and lawn care in Meridian, Boise, and Nampa — calling you instead of your competitor.',
    },
    {
      icon: Search,
      title: 'Show up on Google when people search landscaping',
      description: 'Rank in local search results and Google Maps. When someone types "landscaping near me," you\'re what they find.',
    },
    {
      icon: Globe,
      title: 'Turn your website into a lead machine',
      description: 'A website that actually works — drives form fills, phone calls, and quote requests. Not just a digital brochure.',
    },
    {
      icon: TrendingUp,
      title: 'A steady stream of jobs — not feast or famine',
      description: 'Predictable lead flow so you can plan crews, buy materials, and stop guessing where the next project is coming from.',
    },
    {
      icon: Target,
      title: 'Marketing that pays for itself',
      description: 'Every dollar tracked. Every lead measured. You\'ll know exactly what\'s working and what your cost per lead is.',
    },
    {
      icon: Star,
      title: 'Stand out from every other landscaper in town',
      description: 'Professional online presence that makes you look like the obvious choice — not just another name in a list.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            What You Get
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Real Results, Not Marketing Fluff
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Here&apos;s what working with us actually looks like for your landscaping business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="flex gap-4 p-6 rounded-xl border border-surface-300 bg-white hover:shadow-soft transition-shadow duration-300"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10 shrink-0">
                <outcome.icon className="h-5 w-5 text-brand-400" />
              </div>
              <div>
                <h3 className="text-heading-sm text-txt-primary mb-1.5">
                  {outcome.title}
                </h3>
                <p className="text-body-sm text-txt-secondary leading-relaxed">
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 5: LOCAL AUTHORITY
   ═══════════════════════════════════════════════════ */
function LocalAuthoritySection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
              Why Local Matters
            </p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              We Know the Treasure Valley
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We&apos;re not a big agency out of New York or LA trying to sell you a one-size-fits-all package. We focus on the Boise metro — Meridian, Nampa, Eagle, Caldwell, Star — and we understand what works here.
            </p>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We know the seasonal patterns. We know the neighborhoods. We know what homeowners in Ada and Canyon County are searching for. That local knowledge is what makes the difference between marketing that works and money down the drain.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Treasure Valley Focus', icon: MapPin },
                { label: 'Local Market Data', icon: BarChart3 },
                { label: 'Contractor-Friendly', icon: Shovel },
                { label: 'No Cookie-Cutter', icon: Shield },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body-sm text-txt-primary font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Local proof card */}
          <div className="rounded-2xl border border-surface-300 bg-white p-8 shadow-soft">
            <h3 className="text-heading text-txt-primary mb-6">
              Services We Help Market
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: TreePine, label: 'Landscaping' },
                { icon: Home, label: 'Hardscaping' },
                { icon: Shovel, label: 'Patio & Pavers' },
                { icon: TreePine, label: 'Lawn Care' },
                { icon: Home, label: 'Outdoor Kitchens' },
                { icon: Shovel, label: 'Retaining Walls' },
                { icon: Globe, label: 'Irrigation' },
                { icon: Star, label: 'Snow Removal' },
              ].map((service) => (
                <div
                  key={service.label}
                  className="flex items-center gap-2.5 rounded-lg border border-surface-300 bg-surface-100 px-3.5 py-3"
                >
                  <service.icon className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body-sm text-txt-primary">{service.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-surface-300">
              <p className="text-body-sm text-txt-muted">
                Whether you do residential, commercial, or both — we tailor your marketing to the services you want to sell most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 6: PROCESS (4 Steps)
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Request Your Audit',
      description: 'Fill out the quick form below. Tell us about your business and drop your website URL. Takes about 2 minutes.',
    },
    {
      number: '02',
      title: 'We Review Everything',
      description: 'Our team reviews your website, Google presence, competitors, and local rankings. We identify exactly what\'s holding you back.',
    },
    {
      number: '03',
      title: 'Get Your Breakdown',
      description: 'Within 24 hours, you get a clear, actionable breakdown of what\'s wrong, what to fix, and how to start getting more leads.',
    },
    {
      number: '04',
      title: 'Decide Your Next Step',
      description: 'No pressure. If the audit gives you what you need, great. If you want us to implement it, we\'ll lay out a plan and pricing.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Simple. Straightforward. No BS.
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-[23px] top-12 bottom-0 w-px bg-surface-300" />
                )}
                {/* Step number */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-400/10 text-brand-400 font-bold text-body shrink-0 relative z-10">
                  {step.number}
                </div>
                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-heading text-txt-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-body text-txt-secondary leading-relaxed max-w-[560px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 7: TESTIMONIAL PLACEHOLDERS
   ═══════════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'We went from maybe one or two leads a month to consistent calls every week. They actually understand what landscaping businesses need.',
      name: 'Landscaping Business Owner',
      location: 'Meridian, ID',
      placeholder: true,
    },
    {
      quote: 'Finally, a marketing company that speaks my language. No fluff, no jargon — just results. Our Google ranking went from page 3 to the top of page 1.',
      name: 'Hardscaping Company Owner',
      location: 'Boise, ID',
      placeholder: true,
    },
    {
      quote: 'Before working with them, our website was basically a business card. Now it actually generates leads. Wish I\'d done this two years ago.',
      name: 'Lawn Care Business Owner',
      location: 'Nampa, ID',
      placeholder: true,
    },
  ]

  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            What Clients Say
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Results Speak for Themselves
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="surface-card p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-brand-400 text-brand-400" />
                ))}
              </div>
              <p className="text-body text-txt-secondary leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-surface-300">
                <div className="h-9 w-9 rounded-full bg-surface-200 flex items-center justify-center">
                  <Users className="h-4 w-4 text-txt-muted" />
                </div>
                <div>
                  <p className="text-body-sm text-txt-primary font-medium">
                    {t.name}
                    {t.placeholder && <span className="text-txt-faint"> *</span>}
                  </p>
                  <p className="text-caption text-txt-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-caption text-txt-faint">
          * Placeholder testimonials — real client reviews coming soon.
        </p>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 8: CTA — AUDIT FORM
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="audit" className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Copy */}
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
              Free — No Obligation
            </p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              Get Your Free Local Growth Audit
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We&apos;ll review your website, check your Google rankings, analyze your competition, and give you a clear breakdown of what&apos;s working, what&apos;s not, and exactly what to fix.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Complete website conversion review',
                'Local SEO and Google Maps analysis',
                'Competitor comparison for your area',
                'Specific, actionable recommendations',
                'No commitment — it\'s yours to keep',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body text-txt-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand-400/20 bg-brand-400/5 p-4">
              <ClipboardList className="h-5 w-5 text-brand-400 shrink-0" />
              <p className="text-body-sm text-txt-secondary">
                <span className="text-txt-primary font-medium">Response time:</span> We review your audit within 24 hours and follow up personally. No bots. No runaround.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl border border-[#1C2432] bg-[#0D1117] p-8">
            <h3 className="text-heading text-[#E8ECF4] mb-2">
              Request Your Free Audit
            </h3>
            <p className="text-body-sm text-[#8899AC] mb-6">
              Fill this out and we&apos;ll have your audit ready within 24 hours.
            </p>
            <InlineAuditForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 9: FAQ
   ═══════════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    {
      question: 'Is this really free?',
      answer:
        'Yes. 100% free. We do the audit because it\'s the best way to show you what we can do. There\'s no catch, no hidden upsell. You get a real breakdown of your marketing — and you decide what to do with it.',
    },
    {
      question: 'Do I have to commit to anything?',
      answer:
        'No. The audit is yours whether you work with us or not. If you want help implementing the recommendations, great — we\'ll put together a plan and pricing. If not, no hard feelings.',
    },
    {
      question: 'What if I already have a website?',
      answer:
        'Perfect. We\'ll review it and show you exactly what\'s working and what\'s costing you leads. Most landscaping websites look fine but aren\'t built to convert visitors into calls. We\'ll show you the difference.',
    },
    {
      question: 'How is this different from other marketing agencies?',
      answer:
        'We focus specifically on local service businesses in the Treasure Valley. We\'re not selling you a generic SEO package — we build marketing systems tailored to how landscaping companies actually get customers in this market.',
    },
    {
      question: 'How long does the audit take?',
      answer:
        'You\'ll hear back from us within 24 hours. The form takes about 2 minutes. We do the heavy lifting — reviewing your site, checking your rankings, analyzing competitors — and send you a clear breakdown.',
    },
    {
      question: 'I\'m not great with tech stuff. Is that okay?',
      answer:
        'Absolutely. That\'s the whole point. You focus on doing great landscaping work — we handle the marketing, the website, the Google stuff. We explain everything in plain English, not jargon.',
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            Questions
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[720px] mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-surface-300 bg-white overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-heading-sm text-txt-primary hover:bg-surface-100 transition-colors">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-txt-muted shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-body text-txt-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 10: FINAL CTA
   ═══════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container py-20 md:py-28">
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Ready to Get More Landscaping Jobs?
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Your competitors are getting found online. Your next customers are searching right now. Let&apos;s make sure they find you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#audit">
              <Button variant="primary" size="xl">
                Get Your Free Audit
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="xl">
                Or Book a Call Directly
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-caption text-txt-faint">
            Free &middot; No obligation &middot; Takes 2 minutes
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════ */
export default function LandscapingIdahoPage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <WhatYouGetSection />
      <LocalAuthoritySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
