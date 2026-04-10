import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRight,
  Phone,
  MapPin,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Shield,
  Star,
  ChevronDown,
  Clock,
  CloudRain,
  Hammer,
  Home,
  FileText,
  Users,
  ThumbsUp,
  HardHat,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  HeroInspectionForm,
  InspectionModal,
  CTAButton,
  FullInspectionForm,
} from './inspection-form'

const CITY = 'Meridian'
const STATE = 'Idaho'
const REGION = 'Treasure Valley'
const NEARBY = 'Boise, Nampa & Eagle'

export const metadata: Metadata = {
  title: `Roofing — ${CITY}, ${NEARBY} | Trusted Local Roofers`,
  description: `Need a roof repair or replacement in the ${REGION}? Free inspections, honest estimates, and fast turnaround. Licensed, insured, and locally owned in ${CITY}, ${STATE}.`,
  openGraph: {
    title: `Roofing — ${CITY}, ${NEARBY} | Free Roof Inspection`,
    description: `Trusted local roofers in the ${REGION}. Free inspections, storm damage repair, and insurance claim help.`,
  },
}

/* ── Unsplash images ── */
const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?w=1200&h=800&fit=crop&q=80',
  repair: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&h=600&fit=crop&q=80',
  newRoof: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80',
  storm: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=800&h=600&fit=crop&q=80',
  home: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=600&fit=crop&q=80',
}

/* ═══════════════════════════════════════════════════
   SECTION 1: HERO
   Strong headline → Trust builders → Form
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
        <div className="section-container pt-[100px] pb-10 md:pt-[120px] md:pb-14">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy + inline form */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/5 px-4 py-1.5 mb-6">
                <MapPin className="h-3.5 w-3.5 text-brand-400" />
                <span className="text-caption font-medium text-brand-400">
                  {CITY} &middot; {NEARBY}
                </span>
              </div>

              <h1 className="text-display-sm text-txt-primary text-balance sm:text-display-lg lg:text-display">
                Your Roof Protects Everything. We Protect Your Roof.
              </h1>

              <p className="mt-4 max-w-[520px] text-body-lg text-txt-secondary leading-relaxed text-pretty">
                Free inspections. Honest estimates. Fast repairs. We&apos;re the {REGION}&apos;s trusted local roofers — licensed, insured, and here to help with everything from a small leak to a full replacement.
              </p>

              <div className="mt-5 space-y-2">
                {[
                  'Same-day response',
                  'Licensed & fully insured',
                  'Insurance claim assistance',
                  'Local crew — not a call center',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-brand-400 shrink-0" />
                    <span className="text-body-sm text-txt-secondary">{point}</span>
                  </div>
                ))}
              </div>

              {/* Low-friction hero form */}
              <div className="mt-8 max-w-[420px]">
                <HeroInspectionForm />
              </div>
            </div>

            {/* Right: Hero image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src={IMAGES.hero}
                  alt={`Professional roofing crew working on a residential roof in ${CITY}, ${STATE}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:left-auto md:-right-6 rounded-xl border border-surface-300 bg-white p-4 shadow-soft-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10">
                    <Star className="h-5 w-5 text-brand-400" />
                  </div>
                  <div>
                    <p className="text-heading-sm text-txt-primary">500+ Roofs Done</p>
                    <p className="text-caption text-txt-muted">15+ years in the {REGION}</p>
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
   SECTION 2: PROBLEM / PAIN
   Speak directly to homeowner concerns
   ═══════════════════════════════════════════════════ */
function ProblemSection() {
  const problems = [
    {
      icon: CloudRain,
      title: 'You noticed a leak — and you\'re hoping it\'s not serious',
      detail: 'Water stains on the ceiling. A drip after every storm. The longer you wait, the more damage it does to your home — and the more expensive it gets to fix.',
    },
    {
      icon: AlertTriangle,
      title: 'A storm hit and you\'re not sure what\'s damaged',
      detail: 'Missing shingles, dents, cracks — some damage is hard to spot from the ground. But your insurance company has a deadline, and you need answers fast.',
    },
    {
      icon: FileText,
      title: 'Insurance claims feel overwhelming',
      detail: 'You don\'t know what\'s covered. You don\'t know who to call. And you definitely don\'t want to get stuck paying out of pocket for something insurance should handle.',
    },
  ]

  return (
    <section className="section-padding border-t border-surface-300">
      <div className="section-container py-12 md:py-16">
        <div className="max-w-[800px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-overline uppercase text-amber-600 tracking-widest font-semibold">
              Does This Sound Familiar?
            </p>
          </div>

          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Roof Problems Don&apos;t Fix Themselves
          </h2>
          <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed max-w-[640px]">
            Most homeowners in {CITY} know something&apos;s off with their roof — but they put it off because they don&apos;t know where to start.
          </p>

          <div className="mt-8 space-y-6">
            {problems.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-xl border border-surface-300 bg-white"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 shrink-0">
                  <item.icon className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-heading-sm text-txt-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-body text-txt-secondary leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-brand-400/20 bg-brand-400/5 p-5">
            <p className="text-body text-txt-primary font-medium">
              Not sure if your roof needs attention? <span className="text-brand-400">That&apos;s exactly what the free inspection is for.</span>
            </p>
            <p className="text-body-sm text-txt-secondary mt-1">
              We&apos;ll come out, check everything, and give you an honest answer — no pressure, no sales pitch.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 3: PAIN AMPLIFICATION (dark)
   ═══════════════════════════════════════════════════ */
function PainSection() {
  return (
    <section className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[700px] mx-auto mb-8">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
            The Real Cost of Waiting
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            A Small Leak Today Is a Big Problem Tomorrow
          </h2>
        </div>

        <div className="max-w-[800px] mx-auto space-y-5">
          {[
            'That water stain on your ceiling? It means moisture is already inside your walls.',
            'Missing shingles after a storm let water seep in — rotting the wood underneath.',
            'Insurance claims have deadlines. Wait too long and you could lose your coverage.',
            'A $500 repair today turns into a $15,000 replacement next year if you ignore it.',
            'Your home\'s value drops when the roof is visibly damaged or aging.',
            'You worry about it every time it rains — that stress doesn\'t have to continue.',
          ].map((problem) => (
            <div key={problem} className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-body-lg text-txt-secondary leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-body-lg text-txt-primary font-medium">
            You don&apos;t have to figure this out alone.
          </p>
          <p className="text-body text-txt-secondary mt-2 max-w-[520px] mx-auto">
            A free inspection takes the guesswork out. We&apos;ll tell you exactly what&apos;s going on — and what to do about it.
          </p>
          <div className="mt-6">
            <CTAButton>
              Get Free Roof Inspection
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 4: SOLUTION
   How the company solves the problem
   ═══════════════════════════════════════════════════ */
function SolutionSection() {
  const solutions = [
    {
      icon: Wrench,
      title: 'Fast, Thorough Inspections',
      image: IMAGES.repair,
      imageAlt: 'Roofer inspecting shingles on a residential roof',
      description:
        'We get on your roof quickly — usually within 24–48 hours. We check everything: shingles, flashing, gutters, ventilation, and the structure underneath. No shortcuts.',
      points: ['Full roof and attic inspection', 'Photo documentation of all damage', 'Clear written report'],
    },
    {
      icon: ThumbsUp,
      title: 'Honest Assessments — No Pressure',
      image: IMAGES.newRoof,
      imageAlt: 'Beautiful home with a new roof in the Treasure Valley',
      description:
        'If your roof just needs a patch, we\'ll tell you. If it needs replacement, we\'ll explain why. You\'ll never get pressured into work you don\'t need.',
      points: ['Repair vs. replace recommendation', 'Upfront pricing — no surprises', 'Your decision, your timeline'],
    },
    {
      icon: FileText,
      title: 'We Handle the Insurance Headache',
      image: IMAGES.storm,
      imageAlt: 'Storm clouds over residential neighborhood',
      description:
        'We work directly with your insurance company so you don\'t have to. From filing the claim to meeting the adjuster — we walk you through every step.',
      points: ['Help filing your claim', 'Meet with your adjuster on-site', 'Maximize your coverage'],
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
            How We Help
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Simple, Honest Roofing — Start to Finish
          </h2>
          <p className="mt-4 text-body-lg text-txt-secondary text-pretty">
            No runaround. No mystery pricing. Just a straight answer about your roof and a plan to fix it right the first time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="rounded-xl border border-surface-300 bg-white overflow-hidden hover:shadow-soft transition-shadow duration-300">
              <div className="relative h-48 w-full">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-400/10 mb-4">
                  <s.icon className="h-5 w-5 text-brand-400" />
                </div>
                <h3 className="text-heading text-txt-primary mb-2">{s.title}</h3>
                <p className="text-body-sm text-txt-secondary leading-relaxed mb-4">
                  {s.description}
                </p>
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
   SECTION 5: SERVICES
   Core services with benefit-focused descriptions
   ═══════════════════════════════════════════════════ */
function ServicesSection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              Residential Roofing Services in {CITY} & the {REGION}
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              Whether it&apos;s a quick repair or a complete tear-off, we handle it all. Every job gets the same attention to detail — because your home deserves it.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Licensed & Insured', icon: Shield },
                { label: 'Locally Owned', icon: MapPin },
                { label: '15+ Years Experience', icon: HardHat },
                { label: 'Warranty on All Work', icon: ThumbsUp },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <item.icon className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body-sm text-txt-primary font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="rounded-2xl border border-surface-300 bg-white p-8 shadow-soft">
            <h3 className="text-heading text-txt-primary mb-6">
              Our Roofing Services
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Wrench, label: 'Roof Repair' },
                { icon: Home, label: 'Roof Replacement' },
                { icon: CloudRain, label: 'Storm Damage' },
                { icon: FileText, label: 'Insurance Claims' },
                { icon: Hammer, label: 'New Construction' },
                { icon: Shield, label: 'Roof Inspections' },
                { icon: HardHat, label: 'Emergency Repair' },
                { icon: Star, label: 'Gutter Service' },
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
   SECTION 6: TRUST / TESTIMONIALS
   ═══════════════════════════════════════════════════ */
function TrustSection() {
  const testimonials = [
    {
      quote: 'They came out the same day I called. Found hail damage I didn\'t even know about and helped me file the insurance claim. My new roof was done in two days. Couldn\'t be happier.',
      name: 'Mark T.',
      location: CITY,
      detail: 'Storm damage + insurance claim',
    },
    {
      quote: 'I had three roofers come out. Two tried to sell me a full replacement. These guys were honest — said I just needed a repair. Saved me thousands. That\'s a company you can trust.',
      name: 'Sarah K.',
      location: 'Boise',
      detail: 'Roof repair',
    },
    {
      quote: 'From the inspection to the final cleanup, everything was professional. They showed me photos of the damage, explained my options, and the price was exactly what they quoted. No surprises.',
      name: 'David R.',
      location: 'Nampa',
      detail: 'Full roof replacement',
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-8">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
            Real Reviews
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            What {REGION} Homeowners Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-surface-300 bg-white p-6">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-body text-txt-secondary leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-surface-300 pt-4">
                <p className="text-body-sm font-medium text-txt-primary">{t.name}</p>
                <p className="text-caption text-txt-muted">{t.location} &middot; {t.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CTAButton>
            Get Your Free Inspection
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 7: PROCESS — 3 Steps
   ═══════════════════════════════════════════════════ */
function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Request Your Free Inspection',
      description: 'Fill out the form or give us a call. It takes 30 seconds. We\'ll reach out the same day to schedule a time that works for you.',
    },
    {
      number: '2',
      title: 'We Inspect Your Roof',
      description: 'Our crew checks everything — shingles, flashing, gutters, structure. We take photos and document any damage so you can see exactly what we see.',
    },
    {
      number: '3',
      title: 'You Get a Clear Plan + Quote',
      description: 'No jargon. No pressure. Just a straight answer: here\'s what\'s going on, here\'s what it costs, and here are your options. You decide.',
    },
  ]

  return (
    <section className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-8">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
            How It Works
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Three Steps. No Runaround.
          </h2>
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
          <CTAButton>
            Start With Your Free Inspection
            <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 8: SCARCITY / OFFER
   ═══════════════════════════════════════════════════ */
function OfferSection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container py-12 md:py-16">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
            Limited Availability
          </p>
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            We Book Up Fast — Especially After Storms
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty leading-relaxed">
            We&apos;re a local crew, not a franchise. That means we can only take on so many jobs at a time. During storm season, our schedule fills up within days. The sooner you book your free inspection, the sooner we can get to your roof.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-3">
            <Clock className="h-5 w-5 text-amber-600 shrink-0" />
            <p className="text-body-sm text-amber-800 font-medium text-left">
              We&apos;re currently scheduling inspections in {CITY}, Boise, Nampa, and Eagle. Slots are first-come, first-served.
            </p>
          </div>

          <div className="mt-8">
            <CTAButton>
              Claim Your Free Inspection
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   SECTION 9: CTA — FULL INSPECTION FORM
   ═══════════════════════════════════════════════════ */
function CTASection() {
  return (
    <section id="inspection" className="section-dark section-padding">
      <div className="section-container section-spacing">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
              Your Free Inspection
            </p>
            <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
              Get Your Free Roof Inspection Today
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed text-pretty">
              No cost. No obligation. No sales pitch. We&apos;ll inspect your roof, show you exactly what we find, and give you a clear plan — whether that&apos;s a small repair or a full replacement.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Complete roof and attic inspection',
                'Photo documentation of all findings',
                'Honest repair vs. replace recommendation',
                'Written estimate — transparent pricing',
                'Insurance claim help if applicable',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-400 shrink-0" />
                  <span className="text-body text-txt-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-brand-400/20 bg-brand-400/5 p-4">
              <Users className="h-5 w-5 text-brand-400 shrink-0" />
              <p className="text-body-sm text-txt-secondary">
                <span className="text-txt-primary font-medium">Local crew, not a call center.</span> You&apos;ll talk to real people who live and work right here in the {REGION}.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1C2432] bg-[#0D1117] p-8">
            <h3 className="text-heading text-[#E8ECF4] mb-2">
              Schedule Your Inspection
            </h3>
            <p className="text-body-sm text-[#8899AC] mb-6">
              Fill this out and we&apos;ll call you to set up a time — usually same day.
            </p>
            <FullInspectionForm variant="dark" />
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
    {
      question: 'How much does a new roof cost?',
      answer:
        'It depends on the size of your roof, the materials, and the scope of work. Most residential roofs in the Treasure Valley range from $8,000 to $20,000. We give you an exact quote after the inspection — no ballpark guesses.',
    },
    {
      question: 'Do you help with insurance claims?',
      answer:
        'Yes. We handle insurance claims every week. We\'ll document the damage, help you file the claim, and meet with your adjuster on-site. Most homeowners with storm damage pay little to nothing out of pocket after insurance.',
    },
    {
      question: 'How long does a roof replacement take?',
      answer:
        'Most residential roofs take 1–3 days depending on size and complexity. We show up on time, work clean, and haul away all the debris. Your home is fully protected every night before we leave.',
    },
    {
      question: 'Do I need a full replacement or just a repair?',
      answer:
        'That\'s exactly what the free inspection tells you. If a repair will hold up and protect your home, we\'ll recommend a repair. We don\'t push replacements when a fix will do the job. You\'ll always get our honest recommendation.',
    },
    {
      question: 'Is the inspection really free?',
      answer:
        'Yes — 100% free, no strings attached. We inspect your roof, show you photos of what we find, and give you a written report. If you decide to hire us, great. If not, no hard feelings. The inspection is yours to keep.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        `We serve ${CITY}, Boise, Nampa, Eagle, Star, Kuna, and the surrounding ${REGION} area. If you\'re not sure whether we cover your neighborhood, just give us a call — we probably do.`,
    },
  ]

  return (
    <section className="section-padding">
      <div className="section-container section-spacing">
        <div className="text-center max-w-[680px] mx-auto mb-8">
          <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">
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
   SECTION 11: FINAL CTA — Urgency close
   ═══════════════════════════════════════════════════ */
function FinalCTASection() {
  return (
    <section className="section-padding bg-surface-100">
      <div className="section-container py-12 md:py-16">
        <div className="text-center max-w-[640px] mx-auto">
          <h2 className="text-display-sm text-txt-primary text-balance sm:text-display">
            Don&apos;t Wait Until the Next Storm
          </h2>
          <p className="mt-5 text-body-lg text-txt-secondary text-pretty">
            Every week you wait is another week of damage you can&apos;t see. The inspection is free. The call takes 30 seconds. And you&apos;ll finally know exactly where your roof stands.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton>
              Get Your Free Inspection Now
              <ArrowRight className="h-4 w-4" />
            </CTAButton>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:+12085551234">
                Or Call Us Directly
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-caption text-txt-faint">
            Free &middot; No obligation &middot; Same-day response
          </p>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   PAGE ASSEMBLY
   ═══════════════════════════════════════════════════ */
export default function RoofingPage() {
  return (
    <>
      <InspectionModal />
      <HeroSection />
      <ProblemSection />
      <PainSection />
      <SolutionSection />
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <OfferSection />
      <CTASection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
