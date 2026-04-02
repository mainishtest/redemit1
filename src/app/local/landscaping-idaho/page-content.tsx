'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Search,
  Globe,
  TrendingUp,
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ClipboardList,
  BarChart3,
  Shield,
  Star,
  ChevronDown,
  Shovel,
  TreePine,
  Home,
  Eye,
  MousePointer,
  Clock,
} from 'lucide-react'
import { ContactModalProvider, ModalCTAButton } from './contact-modal'
import { HeroAuditForm, FullAuditForm } from './audit-form'

/* ── Unsplash images ── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1200&h=800&fit=crop&q=80',
  patio: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
  gardenPath: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&q=80',
  lawnMowing: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=800&h=600&fit=crop&q=80',
  aerialLawn: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop&q=80',
}

/* ═══════════════════════════════════════════════════
   SECTION 1: HERO
   ═══════════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden">
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
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/5 px-4 py-1.5 mb-6">
                <MapPin className="h-3.5 w-3.5 text-brand-400" />
                <span className="text-caption font-medium text-brand-400">
                  Meridian &middot; Boise &middot; Nampa
                </span>
              </div>
              <h1 className="text-display-sm text-txt-primary text-balance sm:text-display-lg lg:text-display">
                Your Landscaping Business Deserves More Than Referrals
              </h1>
              <p className="mt-6 max-w-[520px] text-body-lg text-txt-secondary leading-relaxed text-pretty">
                We find what&apos;s costing you leads, fix your online presence, and build a system that brings Treasure Valley homeowners straight to your phone. Starting with a free audit.
              </p>
              <div className="mt-8 max-w-[420px]">
                <HeroAuditForm />
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src={IMAGES.hero}
                  alt="Professional landscaping — manicured lawn with garden beds in the Treasure Valley"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 rounded-xl border border-surface-300 bg-white p-4 shadow-soft-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10">
                    <TrendingUp className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-heading-sm text-txt-primary">3x More Leads</p>
                    <p className="text-caption text-txt-muted">Average client result</p>
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
   SECTION 2: PATTERN INTERRUPT
   ═══════════════════════════════════════════════════ */
function PatternInterruptSection() {
  const findings = [
    {
      icon: Eye,
      title: 'Your website gets visitors — but they leave',
      detail: 'No clear call to action. No reason to pick up the phone. Visitors hit your site and bounce in seconds.',
    },
    {
      icon: Search,
      title: 'You\'re invisible in local search',
      detail: 'When someone searches "landscaping Meridian" or "patio installers near me," your competitors show up. You don\'t.',
    },
    {
      icon: MousePointer,
      title: 'No system to capture leads',
      detail: 'No follow-up. No retargeting. No way to turn a website visitor into a booked estimate. Leads slip through the cracks.',
    },
  ]

  return (
    <section className="section-padding border-t border-surface-300">
      <div className="section-container py-16 md:py-24">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-overline uppercase text-amber-600 tracking-widest font-semibold">
              We reviewed 50+ landscaping sites in the Treasure Valley
            </p>
          </div>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Here&apos;s What We Keep Finding
          </h2>
          <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed max-w-[640px]">
            Most landscaping websites in Meridian, Boise, and Nampa have the same three problems. Chances are, yours does too.
          </p>
          <div className="mt-10 space-y-6">
            {findings.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-surface-300 bg-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 shrink-0">
                  <item.icon className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-heading-sm text-txt-primary mb-1">{item.title}</h3>
                  <p className="text-body text-txt-secondary leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-brand-400/20 bg-brand-400/5 p-5">
            <p className="text-body text-txt-primary font-medium">
              Want to know exactly where <span className="text-brand-400">your</span> site is losing leads?
            </p>
            <p className="text-body-sm text-txt-secondary mt-1">
              Drop your website URL above and we&apos;ll send you a personalized audit within 24 hours. Free, no strings attached.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 3: PROBLEM
   ═══════════════════════════════════════════════════ */
function ProblemSection() {
  return (
    <section className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[700px] mx-auto mb-14">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Sound Familiar?</p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            You Do Great Work. But the Phone Isn&apos;t Ringing.
          </h2>
        </div>
        <div className="max-w-[800px] mx-auto space-y-5">
          {[
            'You paid for a website. It looks fine. But it doesn\'t generate a single lead.',
            'You\'re booked out in June — then scrambling by August. No consistency.',
            'When someone searches "landscaping Meridian," your competitors are there. You\'re not.',
            'Referrals keep you alive, but they\'re unpredictable. One slow month and you\'re stressed.',
            'You\'ve talked to marketing companies before. They promised the world. Nothing changed.',
            'You know you need to "do something online" — but you don\'t know what actually works.',
          ].map((problem) => (
            <div key={problem} className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-body-lg text-txt-secondary leading-relaxed">{problem}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-body-lg text-txt-primary font-medium">It&apos;s not your work. It&apos;s your marketing.</p>
          <p className="text-body text-txt-secondary mt-2 max-w-[520px] mx-auto">
            You don&apos;t need to become a marketing expert. You need a system that brings qualified homeowners to you — automatically.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 4: SOLUTION
   ═══════════════════════════════════════════════════ */
function SolutionSection() {
  const solutions = [
    {
      icon: Globe,
      title: 'A Website That Actually Works',
      image: IMAGES.patio,
      imageAlt: 'Beautiful patio installation — the kind of project your website should be selling',
      description: 'We rebuild your site around one goal: getting homeowners to call you. Clear messaging, fast load times, mobile-ready, and a design that builds trust in 3 seconds.',
      points: ['Phone number front and center', 'Quote request form on every page', 'Built to load fast on phones'],
    },
    {
      icon: Search,
      title: 'Found on Google — Locally',
      image: IMAGES.gardenPath,
      imageAlt: 'Manicured garden path — what homeowners want when they search for landscapers',
      description: 'When someone in Meridian types "landscaping near me," you show up. Google Business Profile, local keywords, reviews — all optimized so you rank above the competition.',
      points: ['Rank for "landscaping + your city"', 'Google Maps visibility', 'Review strategy that builds trust'],
    },
    {
      icon: TrendingUp,
      title: 'Leads That Come to You',
      image: IMAGES.lawnMowing,
      imageAlt: 'Professional lawn maintenance — consistent work from consistent leads',
      description: 'A system that runs whether you\'re on a job site or not. Targeted ads, retargeting, automated follow-up — so your phone rings with qualified homeowners every month.',
      points: ['Targeted Treasure Valley ads', 'Automatic lead follow-up', 'Know your exact cost per lead'],
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">How We Fix It</p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Three Things That Actually Move the Needle
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Not a 47-page strategy deck. Not a 12-month SEO contract. Three concrete things that get landscaping companies more jobs in the Treasure Valley.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl border border-surface-300 bg-white overflow-hidden hover:shadow-soft transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image src={s.image} alt={s.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10 mb-4">
                  <s.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-heading text-txt-primary mb-2">{s.title}</h3>
                <p className="text-body-sm text-txt-secondary leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-body-sm text-txt-secondary">
                      <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 5: OUTCOMES
   ═══════════════════════════════════════════════════ */
function OutcomesSection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">What Changes</p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              What This Looks Like for Your Business
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              This isn&apos;t about impressions or clicks. Here&apos;s what actually changes when your marketing works:
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Your phone rings with homeowners who found you on Google — not just referrals',
                'You show up first when someone searches "landscaping Meridian" or "patio installers Boise"',
                'Your website brings in quote requests while you\'re on the job site',
                'You stop guessing where next month\'s work is coming from',
                'You can plan crews and materials because you know leads are coming',
                'You look more professional than every other landscaper in town — online',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-400 shrink-0 mt-0.5" />
                  <p className="text-body text-txt-secondary leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-soft-lg">
            <Image
              src={IMAGES.aerialLawn}
              alt="Aerial view of a professionally maintained property in the Treasure Valley"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 6: LOCAL AUTHORITY
   ═══════════════════════════════════════════════════ */
function LocalAuthoritySection() {
  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Why Us</p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              We Only Work With Local Service Businesses in the Treasure Valley
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We&apos;re not a big agency that treats you like account #4,372. We work exclusively with contractors and service businesses in Ada and Canyon County — and we know what moves the needle here.
            </p>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              We know the seasonal patterns. We know which neighborhoods are spending on outdoor projects. We know how Treasure Valley homeowners search for landscapers. That local knowledge is the difference.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Treasure Valley Only', icon: MapPin },
                { label: 'Contractor-Focused', icon: Shovel },
                { label: 'Real Local Data', icon: BarChart3 },
                { label: 'No Generic Packages', icon: Shield },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body-sm text-txt-primary font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-surface-300 bg-white p-8 shadow-soft">
            <h3 className="text-heading text-txt-primary mb-6">We Help Market These Services</h3>
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
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5 rounded-lg border border-surface-300 bg-surface-100 px-3.5 py-3">
                  <s.icon className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body-sm text-txt-primary">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 7: PROCESS — CTA opens modal
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  const steps = [
    { number: '1', title: 'Send Us Your Website', description: 'Drop your URL in the form. Takes 30 seconds. If you don\'t have a site, that\'s fine — just tell us your business name.' },
    { number: '2', title: 'We Audit Everything', description: 'Within 24 hours, we review your site, your Google rankings, your competitors, and exactly where you\'re losing leads.' },
    { number: '3', title: 'You Get a Clear Playbook', description: 'Not a generic report. A specific list of what to fix, in order, to start getting more calls from local homeowners.' },
  ]

  return (
    <section className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">How It Works</p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">Three Steps. No BS.</h2>
        </div>
        <div className="max-w-[700px] mx-auto grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-400 font-bold text-heading-lg mb-5">
                {step.number}
              </div>
              <h3 className="text-heading-sm text-txt-primary mb-2">{step.title}</h3>
              <p className="text-body-sm text-txt-secondary leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <ModalCTAButton variant="primary" size="xl">
            Start With Your Free Audit
            <ArrowRight className="h-4 w-4" />
          </ModalCTAButton>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 8: SOFT SCARCITY — CTA opens modal
   ═══════════════════════════════════════════════════ */
function OfferSection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container py-16 md:py-24">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Limited Availability</p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            We Only Take On a Handful of Landscaping Companies at a Time
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty leading-relaxed">
            To keep results high, we limit how many businesses we work with in each market. We won&apos;t take on your competitor if we&apos;re already working with you. That means the sooner you get your audit, the sooner you lock in your area.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3">
            <Clock className="h-5 w-5 text-amber-600 shrink-0" />
            <p className="text-body-sm text-amber-800 font-medium text-left">
              We&apos;re currently reviewing landscaping businesses in Meridian, Boise, and Nampa. Spots fill on a first-come basis.
            </p>
          </div>
          <div className="mt-8">
            <ModalCTAButton variant="primary" size="xl">
              Claim Your Free Audit
              <ArrowRight className="h-4 w-4" />
            </ModalCTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 9: CTA — inline form stays
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="audit" className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Your Free Audit</p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              Find Out Exactly What&apos;s Costing You Leads
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              In 24 hours, you&apos;ll know exactly where your online presence is falling short — and what to do about it. No fluff. No generic advice. Specific to your business, your market, your competition.
            </p>
            <div className="mt-8 space-y-4">
              {[
                'Full website conversion audit — what\'s working, what\'s not',
                'Local SEO snapshot — where you rank vs. competitors',
                'Google Business Profile review — are you showing up in Maps?',
                'Top 3 quick wins you can implement immediately',
                'Custom recommendation — not a cookie-cutter template',
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
                <span className="text-txt-primary font-medium">Real human review.</span> Not an automated tool. We personally review your site and send you actionable findings.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-[#1C2432] bg-[#0D1117] p-8">
            <h3 className="text-heading text-[#E8ECF4] mb-2">Get Your Free Audit</h3>
            <p className="text-body-sm text-[#8899AC] mb-6">
              Fill this out and we&apos;ll have your personalized audit ready within 24 hours.
            </p>
            <FullAuditForm variant="dark" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 10: FAQ
   ═══════════════════════════════════════════════════ */
function FAQSection() {
  const faqs = [
    { question: 'Is this really free? What\'s the catch?', answer: 'No catch. We do the audit for free because it\'s the best way to show you what we can do. You get a real, personalized breakdown of your marketing — and you decide if you want our help implementing it. If not, no hard feelings. The audit is yours to keep.' },
    { question: 'I already have a website. Do I still need this?', answer: 'Especially if you already have a website. Most landscaping websites look fine but aren\'t built to convert visitors into phone calls. We\'ll show you the specific things on your site that are costing you leads — and exactly how to fix them.' },
    { question: 'How is this different from the last marketing company that burned me?', answer: 'We hear this a lot. The difference: we only work with local service businesses in the Treasure Valley. We don\'t sell generic SEO packages. We build specific systems for how landscaping companies actually get customers in this market. And we start by proving we know what we\'re talking about — with the free audit.' },
    { question: 'I\'m not a tech person. Is that a problem?', answer: 'That\'s the whole point. You focus on doing great landscaping work — we handle the website, the Google stuff, the ads, all of it. We explain everything in plain English, not marketing jargon.' },
    { question: 'How fast will I see results?', answer: 'You\'ll get your audit within 24 hours. If you choose to work with us, most clients see an increase in leads within the first 30-60 days. SEO takes longer (3-6 months to rank), but we start with quick wins so you see momentum right away.' },
    { question: 'Do you work with my competitors?', answer: 'No. We limit the number of landscaping companies we work with in each area. If we\'re already working with a landscaper in your zip code, we won\'t take on another one. That\'s why getting your audit sooner matters.' },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">Questions</p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-[720px] mx-auto space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-surface-300 bg-white overflow-hidden">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-heading-sm text-txt-primary hover:bg-surface-100 transition-colors">
                {faq.question}
                <ChevronDown className="h-5 w-5 text-txt-muted shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-5">
                <p className="text-body text-txt-secondary leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 11: FINAL CTA — both buttons open modal
   ═══════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container py-20 md:py-28">
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Your Competitors Are Getting Found Online Right Now
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Every day without a marketing system is another day homeowners are calling someone else. The audit takes 30 seconds to request and could change your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <ModalCTAButton variant="primary" size="xl">
              Get Your Free Audit Now
              <ArrowRight className="h-4 w-4" />
            </ModalCTAButton>
            <ModalCTAButton variant="outline" size="xl">
              Or Call Us Directly
              <Phone className="h-4 w-4" />
            </ModalCTAButton>
          </div>
          <p className="mt-4 text-caption text-txt-faint">
            Free &middot; No obligation &middot; Limited spots per market
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE CONTENT — wrapped in modal provider
   ═══════════════════════════════════════════════════ */
export function PageContent() {
  return (
    <ContactModalProvider>
      <HeroSection />
      <PatternInterruptSection />
      <ProblemSection />
      <SolutionSection />
      <OutcomesSection />
      <LocalAuthoritySection />
      <ProcessSection />
      <OfferSection />
      <CTASection />
      <FAQSection />
      <FinalCTASection />
    </ContactModalProvider>
  )
}
