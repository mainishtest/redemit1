import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Zap,
  Rocket,
  Lightbulb,
  Layers,
  RefreshCw,
  Code2,
  Users,
  Phone,
  Sparkles,
  Timer,
  Shield,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { VibeCodingGateForm } from './gate-form'

export const metadata: Metadata = {
  title: 'The VIBE Coding Cheat Code — Build Faster Than Everyone Else',
  description:
    'Turn ideas into live funnels, offers, and revenue-generating assets using AI — without developers, delays, or overthinking. The system smart founders are using to build faster.',
}

const learnings = [
  {
    icon: Lightbulb,
    title: 'Turn Ideas Into Monetizable Offers',
    text: 'Extract, shape, and validate offers in hours — not weeks. The framework for going from "I have an idea" to "this is live and taking payments."',
  },
  {
    icon: Layers,
    title: 'Build Funnels and Pages Using AI',
    text: 'Use AI tools to generate complete landing pages, email sequences, and conversion flows — with the right prompts, structure, and iteration loops.',
  },
  {
    icon: Code2,
    title: 'Eliminate Dev Bottlenecks',
    text: 'Stop waiting on developers, designers, or freelancers. VIBE coding puts the execution power in your hands — no technical skills required.',
  },
  {
    icon: Rocket,
    title: 'Launch and Iterate Quickly',
    text: 'The first version does not need to be perfect. It needs to be live. Learn the rapid-deploy cycle that lets you test, learn, and improve in real time.',
  },
  {
    icon: RefreshCw,
    title: 'Replace Overthinking With Execution',
    text: 'The gap between founders who win and founders who stall is not intelligence — it is speed. This system closes that gap.',
  },
]

const problems = [
  'Spending weeks "planning" instead of launching',
  'Waiting on developers to build what you already know you need',
  'Overthinking every decision until the window closes',
  'Getting stuck in a loop of research, comparison, and indecision',
  'Watching faster competitors take market share while you finalize your deck',
]

const forWho = [
  'Founders and operators who value speed over perfection',
  'Business owners ready to build their own growth assets',
  'Marketers who want to launch offers without waiting on dev teams',
  'Anyone who has an idea and wants it live this week — not next quarter',
]

const notForWho = [
  'People looking for passive learning or entertainment',
  'Anyone who wants someone else to do the work for them',
  'Founders who are not ready to take action',
]

const postDownloadSteps = [
  {
    step: '01',
    title: 'Get the Full VIBE Coding Framework',
    text: 'Immediately download the complete system — no drip, no waiting. The full playbook is yours.',
  },
  {
    step: '02',
    title: 'See How to Implement It',
    text: 'The guide walks you through real application — from idea extraction to live funnel — step by step.',
  },
  {
    step: '03',
    title: 'Book a Paid Strategy Call (Optional)',
    text: 'For founders who want a custom implementation plan: book a 1-on-1 strategy call to map the VIBE system to your business.',
  },
]

export default function VibeCodingCheatCodePage() {
  return (
    <>
      {/* ═══ HERO — Above the Fold ═══ */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute top-0 right-1/4 h-[500px] w-[600px] bg-brand-400/[0.03] rounded-full blur-[120px]" />

        <div className="relative section-padding">
          <div className="section-container pt-32 pb-8 md:pt-40 md:pb-12">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-body-sm text-txt-muted hover:text-txt-primary transition-colors mb-10"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Resources
            </Link>

            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
              {/* Content — 7 cols */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-semibold uppercase tracking-wider">
                    <Sparkles className="h-3 w-3" />
                    New — Free Download
                  </span>
                </div>

                <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg lg:text-display">
                  The &ldquo;VIBE Coding&rdquo; System Smart Founders Are Using to Build Faster Than Everyone Else
                </h1>
                <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed max-w-[600px]">
                  Turn ideas into live funnels, offers, and revenue-generating assets using AI — without developers, delays, or overthinking.
                </p>

                {/* Quick qualifier tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Founders', 'Operators', 'Marketers', 'Solo Builders'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-caption font-medium bg-surface-100 border border-surface-300/40 text-txt-secondary"
                    >
                      <CheckCircle2 className="h-3 w-3 text-brand-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form — 5 cols (sticky) */}
              <div className="lg:col-span-5">
                <div className="surface-elevated p-6 md:p-7 lg:sticky lg:top-24">
                  <VibeCodingGateForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="section-container section-divider" />
      </div>

      {/* ═══ HOOK SECTION — Pattern Interrupt ═══ */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container max-w-[720px]">
          <div className="space-y-5 text-body-lg text-txt-secondary leading-relaxed">
            <p className="text-heading-lg text-txt-primary leading-snug">
              There&apos;s a quiet shift happening.
            </p>
            <p>
              The founders who know how to use AI to build are moving faster than everyone else — launching offers, testing ideas, and scaling… while others are still &ldquo;planning.&rdquo;
            </p>
            <p>
              This is not about learning to code.
            </p>
            <p className="text-txt-primary font-medium">
              It&apos;s about removing the friction between idea and execution.
            </p>
            <p>
              The ones who move first do not just get ahead — they compound the advantage. Every week they launch, test, and iterate while their competitors are still stuck deciding which platform to use.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU'LL LEARN ═══ */}
      <section className="section-padding py-16 md:py-24 bg-surface-0">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
              Inside the Cheat Code
            </p>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              What You Will Walk Away With
            </h2>
          </div>

          <div className="grid gap-px bg-surface-300/30 rounded-xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
            {learnings.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="bg-surface-50 p-7 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-brand-400 mb-5">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <h3 className="text-heading-sm text-txt-primary">{item.title}</h3>
                  <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM SECTION ═══ */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
                The Real Problem
              </p>
              <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
                Speed Wins. Most Founders Are Too Slow.
              </h2>
              <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed">
                The biggest killer of good ideas is not competition — it is friction. The time between &ldquo;I should build this&rdquo; and &ldquo;this is live and taking payments&rdquo; is where most businesses stall. Every day of delay is a day your competitor gets ahead.
              </p>
            </div>

            <div className="space-y-3.5">
              {problems.map((problem) => (
                <div
                  key={problem}
                  className="flex items-start gap-3.5 p-4 rounded-lg bg-surface-0 border border-surface-300/40"
                >
                  <XCircle className="h-5 w-5 text-red-400/70 mt-0.5 shrink-0" />
                  <span className="text-body text-txt-secondary">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION SECTION ═══ */}
      <section className="section-dark section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-4">
              The System
            </p>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              VIBE Coding Is Your Execution Shortcut
            </h2>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              VIBE stands for <strong className="text-txt-primary">Validate → Implement → Build → Execute</strong>. It is a repeatable system for turning any idea into a live, revenue-generating asset using AI tools — without writing code, hiring developers, or overthinking the details.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                letter: 'V',
                label: 'Validate',
                desc: 'Pressure-test your idea in minutes, not months. Use AI to model offers, analyze markets, and find positioning gaps.',
              },
              {
                letter: 'I',
                label: 'Implement',
                desc: 'Turn validated ideas into structured assets: landing pages, email sequences, lead magnets, and offer stacks.',
              },
              {
                letter: 'B',
                label: 'Build',
                desc: 'Use AI-powered tools to generate complete funnels, pages, and systems — ready to deploy, not just plan.',
              },
              {
                letter: 'E',
                label: 'Execute',
                desc: 'Ship it. Get real-world data. Iterate based on performance — not assumptions. Speed creates clarity.',
              },
            ].map((step) => (
              <div
                key={step.letter}
                className="surface-card p-6 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-400 mb-4 ring-1 ring-brand-400/20">
                  <span className="text-heading-lg font-bold">{step.letter}</span>
                </div>
                <h3 className="text-heading-sm text-txt-primary">{step.label}</h3>
                <p className="mt-2.5 text-body-sm text-txt-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHO IT'S FOR / NOT FOR ═══ */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container">
          <div className="text-center mb-14">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
              Before You Download
            </p>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              This Is Not for Everyone
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {/* For */}
            <div className="p-7 rounded-xl bg-surface-0 border border-brand-400/20">
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="h-5 w-5 text-brand-400" />
                <h3 className="text-heading-sm text-txt-primary">This Is For You If:</h3>
              </div>
              <ul className="space-y-3">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-body-sm text-txt-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not For */}
            <div className="p-7 rounded-xl bg-surface-0 border border-surface-300/60">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="h-5 w-5 text-txt-faint" />
                <h3 className="text-heading-sm text-txt-primary">This Is Not For You If:</h3>
              </div>
              <ul className="space-y-3">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 text-txt-faint mt-0.5 shrink-0" />
                    <span className="text-body-sm text-txt-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA ═══ */}
      <section className="section-padding py-20 md:py-28 bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">
              Free Download — 16 Pages
            </p>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Get the VIBE Coding Cheat Code
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Enter your email above and get the complete framework in your inbox within 60 seconds.
            </p>
            <div className="mt-8">
              <a href="#top">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Unlock the System
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ POST-CTA PRE-FRAME ═══ */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container max-w-3xl">
          <p className="text-overline uppercase text-txt-muted tracking-widest mb-8">
            What Happens After You Download
          </p>

          <div className="space-y-6">
            {postDownloadSteps.map((item) => (
              <div
                key={item.step}
                className="flex gap-6 p-6 rounded-xl bg-surface-0 border border-surface-300/40"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-400/10 text-brand-400 font-bold text-body ring-1 ring-brand-400/20">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-heading-sm text-txt-primary">{item.title}</h3>
                  <p className="mt-1.5 text-body-sm text-txt-secondary leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STRATEGY CALL CTA ═══ */}
      <section className="section-dark section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-medium mb-6">
              <Phone className="h-3.5 w-3.5" />
              For Serious Founders Only
            </div>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              Want a Custom VIBE Implementation Plan Built for Your Business?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary max-w-xl mx-auto">
              The cheat code gives you the framework. On a strategy call, we map the VIBE system to <strong className="text-txt-primary">your specific business</strong> — your offers, your funnels, your growth goals — and build a 90-day execution plan you can start immediately.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
              {[
                'Custom AI-powered build plan',
                'Offer + funnel architecture audit',
                '90-day execution roadmap',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                  <span className="text-body-sm text-txt-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Book Your Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-caption text-txt-faint">
              Paid strategy session for founders ready to implement — not just learn
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
