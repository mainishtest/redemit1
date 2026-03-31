import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Rocket,
  Lightbulb,
  Layers,
  RefreshCw,
  Code2,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { InlineGateForm } from './gate-form'

export const metadata: Metadata = {
  title: 'The VIBE Coding Cheat Code — Build Faster Than Everyone Else',
  description:
    'Turn ideas into live funnels, offers, and revenue-generating assets using AI — without developers, delays, or overthinking. The system smart founders are using to build faster.',
}

/* ═══════════════════════════════════════════════
   Section 3 — What You'll Learn
   ═══════════════════════════════════════════════ */
const learnings = [
  {
    icon: Lightbulb,
    title: 'Turn Raw Ideas Into Monetizable Offers',
    text: 'Go from "I have an idea" to "this is live and taking payments" in days — not months.',
  },
  {
    icon: Layers,
    title: 'Build Funnels and Landing Pages Using AI',
    text: 'Generate complete pages, email sequences, and conversion flows with the right prompts and structure.',
  },
  {
    icon: Code2,
    title: 'Eliminate Developer Bottlenecks',
    text: 'Stop waiting on developers, designers, or freelancers. Execute on your own terms.',
  },
  {
    icon: Rocket,
    title: 'Launch and Iterate Rapidly',
    text: 'Version 1 does not need to be perfect — it needs to be live. Ship, learn, improve.',
  },
  {
    icon: RefreshCw,
    title: 'Replace Overthinking With Execution',
    text: 'The gap between winners and everyone else is not intelligence — it is speed.',
  },
]

/* ═══════════════════════════════════════════════
   Section 4 — Problems
   ═══════════════════════════════════════════════ */
const problems = [
  'They wait too long to build',
  'They rely on developers or tools they don\u2019t understand',
  'They overthink instead of executing',
  'They never get ideas into the real world',
]

/* ═══════════════════════════════════════════════
   Section 6 — For / Not For
   ═══════════════════════════════════════════════ */
const forWho = [
  'Founders who move fast and value speed',
  'Marketers and operators building growth assets',
  'People who want execution speed over perfection',
]

const notForWho = [
  'Passive learners looking for entertainment',
  'People stuck in endless research mode',
  'Those unwilling to implement and ship',
]

/* ═══════════════════════════════════════════════
   Section 8 — Post-CTA Pre-Frame Steps
   ═══════════════════════════════════════════════ */
const postDownloadSteps = [
  'You\u2019ll get the full VIBE Coding framework — instantly',
  'You\u2019ll see exactly how to implement it step by step',
  'You\u2019ll have the option to book a paid strategy call',
]

/* ═══════════════════════════════════════════════
   Abstract Hero Visual — SVG
   ═══════════════════════════════════════════════ */
function HeroVisual() {
  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-hidden="true"
    >
      {/* Ambient glow */}
      <ellipse cx="240" cy="210" rx="200" ry="180" fill="url(#vibe-glow)" />

      <defs>
        <linearGradient id="vibe-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="vibe-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Grid lines — subtle structure */}
      <g stroke="var(--surface-300)" strokeWidth="0.5" opacity="0.5">
        <line x1="80" y1="60" x2="80" y2="360" />
        <line x1="160" y1="60" x2="160" y2="360" />
        <line x1="240" y1="60" x2="240" y2="360" />
        <line x1="320" y1="60" x2="320" y2="360" />
        <line x1="400" y1="60" x2="400" y2="360" />
        <line x1="60" y1="100" x2="420" y2="100" />
        <line x1="60" y1="180" x2="420" y2="180" />
        <line x1="60" y1="260" x2="420" y2="260" />
        <line x1="60" y1="340" x2="420" y2="340" />
      </g>

      {/* V-I-B-E blocks — ascending */}
      <rect x="90" y="240" width="55" height="100" rx="6" fill="var(--surface-100)" stroke="var(--surface-300)" strokeWidth="1" />
      <text x="117" y="298" textAnchor="middle" fill="#2BBCC0" fontSize="20" fontWeight="700" fontFamily="system-ui">V</text>

      <rect x="170" y="200" width="55" height="140" rx="6" fill="var(--surface-100)" stroke="var(--surface-300)" strokeWidth="1" />
      <text x="197" y="280" textAnchor="middle" fill="#2BBCC0" fontSize="20" fontWeight="700" fontFamily="system-ui">I</text>

      <rect x="250" y="155" width="55" height="185" rx="6" fill="var(--surface-100)" stroke="var(--surface-300)" strokeWidth="1" />
      <text x="277" y="258" textAnchor="middle" fill="#2BBCC0" fontSize="20" fontWeight="700" fontFamily="system-ui">B</text>

      <rect x="330" y="105" width="55" height="235" rx="6" fill="var(--surface-100)" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.9" />
      <text x="357" y="233" textAnchor="middle" fill="#2BBCC0" fontSize="20" fontWeight="700" fontFamily="system-ui">E</text>

      {/* Growth trajectory line */}
      <path d="M117 235 L197 195 L277 148 L357 100" stroke="url(#vibe-line)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="357" cy="100" r="5" fill="#2BBCC0" opacity="0.7" />
      <circle cx="357" cy="100" r="10" fill="#2BBCC0" opacity="0.15" />

      {/* Connection nodes */}
      <circle cx="117" cy="235" r="3" fill="var(--surface-400)" />
      <circle cx="197" cy="195" r="3" fill="var(--surface-400)" />
      <circle cx="277" cy="148" r="3" fill="var(--surface-400)" />

      {/* Labels below */}
      <text x="117" y="362" textAnchor="middle" fill="var(--txt-faint)" fontSize="9" fontFamily="system-ui">Validate</text>
      <text x="197" y="362" textAnchor="middle" fill="var(--txt-faint)" fontSize="9" fontFamily="system-ui">Implement</text>
      <text x="277" y="362" textAnchor="middle" fill="var(--txt-faint)" fontSize="9" fontFamily="system-ui">Build</text>
      <text x="357" y="362" textAnchor="middle" fill="#2BBCC0" fontSize="9" fontWeight="600" fontFamily="system-ui">Execute</text>

      {/* Decorative dots */}
      <g fill="var(--surface-300)" opacity="0.5">
        <circle cx="420" cy="90" r="2" />
        <circle cx="435" cy="110" r="1.5" />
        <circle cx="60" cy="300" r="2" />
        <circle cx="45" cy="280" r="1.5" />
      </g>
    </svg>
  )
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
export default function VibeCodingCheatCodePage() {
  return (
    <>
      {/* ─────────────────────────────────────
          1. HERO SECTION — Above the Fold
          Left: Headline + Sub + CTA
          Right: Abstract visual
          ───────────────────────────────────── */}
      <section className="relative overflow-hidden" id="top">
        <div className="absolute top-0 right-1/4 h-[500px] w-[600px] bg-brand-400/[0.03] rounded-full blur-[120px]" />

        <div className="relative section-padding">
          <div className="section-container pt-32 pb-12 md:pt-40 md:pb-16">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-body-sm text-txt-muted hover:text-txt-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All Resources
            </Link>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">
              {/* Left: Text + CTA */}
              <div>
                <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
                  The &ldquo;VIBE Coding&rdquo; System Smart Founders Are Using to Build Faster Than Everyone Else
                </h1>
                <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed max-w-[540px]">
                  Turn ideas into live funnels, offers, and revenue-generating assets using AI — without developers, delays, or overthinking.
                </p>

                {/* Inline CTA */}
                <div className="mt-8">
                  <InlineGateForm id="hero-form" />
                </div>
              </div>

              {/* Right: Visual */}
              <div className="hidden lg:block">
                <HeroVisual />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding">
        <div className="section-container section-divider" />
      </div>

      {/* ─────────────────────────────────────
          2. HOOK SECTION
          Centered narrow text block
          Generous spacing, larger body text
          ───────────────────────────────────── */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container max-w-[680px] mx-auto">
          <div className="space-y-6 text-body-lg leading-relaxed">
            <p className="text-display-sm text-txt-primary leading-tight">
              There&apos;s a quiet shift happening.
            </p>
            <p className="text-txt-secondary">
              The founders who know how to use AI to build are moving faster than everyone else — launching offers, testing ideas, and scaling… while others are still &ldquo;planning.&rdquo;
            </p>
            <p className="text-txt-secondary">
              This isn&apos;t about learning to code.
            </p>
            <p className="text-heading text-txt-primary">
              It&apos;s about removing the friction between idea and execution.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          3. WHAT YOU'LL LEARN
          2-column grid (desktop), stacked (mobile)
          Card-style blocks with icons
          ───────────────────────────────────── */}
      <section className="section-padding py-16 md:py-24 bg-surface-0">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
              Inside the Cheat Code
            </p>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              What You&apos;ll Learn
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {learnings.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 rounded-xl bg-surface-50 border border-surface-300/40"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-brand-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-heading-sm text-txt-primary">{item.title}</h3>
                    <p className="mt-1.5 text-body-sm text-txt-secondary leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          4. PROBLEM SECTION
          Left: Text | Right: Problem list
          Slightly darker background
          ───────────────────────────────────── */}
      <section className="section-padding py-16 md:py-24 bg-surface-100">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left: Text */}
            <div>
              <p className="text-overline uppercase text-txt-muted tracking-widest mb-4">
                The Real Problem
              </p>
              <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
                Most People Are Stuck Because&hellip;
              </h2>
              <p className="mt-5 text-body-lg text-txt-secondary leading-relaxed">
                The biggest killer of good ideas is not competition. It&apos;s friction. The time between &ldquo;I should build this&rdquo; and &ldquo;this is live&rdquo; is where most businesses stall. Every day of delay is a day your competitor gets ahead.
              </p>
            </div>

            {/* Right: Problems */}
            <div className="space-y-3">
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

      {/* ─────────────────────────────────────
          5. SOLUTION SECTION — The Reveal
          Centered, visual divider, dark for impact
          Introduce VIBE as the system
          ───────────────────────────────────── */}
      <section className="section-dark section-padding py-20 md:py-28">
        <div className="section-container">
          {/* Visual divider — accent line */}
          <div className="accent-line max-w-[200px] mx-auto mb-12" />

          <div className="mx-auto max-w-[720px] text-center">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-5">
              The System
            </p>
            <h2 className="text-display-sm text-txt-primary md:text-display">
              VIBE Coding Is Your Execution Shortcut
            </h2>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              VIBE Coding is a system for turning ideas into live assets — fast. It combines AI, structured thinking, and rapid execution to eliminate friction and compress build time dramatically.
            </p>
            <p className="mt-4 text-body-lg text-txt-primary font-medium">
              This is how modern founders are moving faster than everyone else.
            </p>
          </div>

          {/* V-I-B-E framework cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-4">
            {[
              {
                letter: 'V',
                label: 'Validate',
                desc: 'Pressure-test your idea in minutes. Use AI to model offers, analyze markets, and find positioning gaps.',
              },
              {
                letter: 'I',
                label: 'Implement',
                desc: 'Turn validated ideas into structured assets: landing pages, email sequences, and offer stacks.',
              },
              {
                letter: 'B',
                label: 'Build',
                desc: 'Use AI-powered tools to generate complete funnels and systems — ready to deploy, not just plan.',
              },
              {
                letter: 'E',
                label: 'Execute',
                desc: 'Ship it. Get real-world data. Iterate based on performance — not assumptions.',
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
                <p className="mt-2 text-body-sm text-txt-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          6. WHO IT'S FOR / NOT FOR
          Two side-by-side boxes
          Clear contrast between them
          ───────────────────────────────────── */}
      <section className="section-padding py-16 md:py-24">
        <div className="section-container">
          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            {/* FOR */}
            <div className="p-7 rounded-xl bg-surface-0 border-2 border-brand-400/25">
              <div className="flex items-center gap-2.5 mb-6">
                <CheckCircle2 className="h-5 w-5 text-brand-400" />
                <h3 className="text-heading-sm text-txt-primary">This Is For You If:</h3>
              </div>
              <ul className="space-y-3.5">
                {forWho.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-400 mt-0.5 shrink-0" />
                    <span className="text-body text-txt-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* NOT FOR */}
            <div className="p-7 rounded-xl bg-surface-0 border border-surface-300/60">
              <div className="flex items-center gap-2.5 mb-6">
                <XCircle className="h-5 w-5 text-txt-faint" />
                <h3 className="text-heading-sm text-txt-primary">This Is Not For You If:</h3>
              </div>
              <ul className="space-y-3.5">
                {notForWho.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <XCircle className="h-4 w-4 text-txt-faint mt-0.5 shrink-0" />
                    <span className="text-body text-txt-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          7. PRIMARY CTA SECTION
          High contrast, centered
          Inline email form
          ───────────────────────────────────── */}
      <section className="section-dark section-padding py-20 md:py-28" id="get-access">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Get the VIBE Coding Cheat Code
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Enter your email to access the system — free, instant download.
            </p>
            <div className="mt-8 max-w-lg mx-auto">
              <InlineGateForm id="cta-form" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────
          8. POST-CTA PRE-FRAME
          Small section under CTA
          What happens after you download
          ───────────────────────────────────── */}
      <section className="section-padding py-14 md:py-20">
        <div className="section-container max-w-2xl mx-auto">
          <p className="text-overline uppercase text-txt-muted tracking-widest mb-6">
            What Happens After You Download
          </p>
          <ul className="space-y-4">
            {postDownloadSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-400/10 text-brand-400 text-caption font-bold ring-1 ring-brand-400/20">
                  {i + 1}
                </span>
                <span className="text-body text-txt-secondary pt-0.5">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─────────────────────────────────────
          9. STRATEGY CALL SECTION
          Full-width, authority-driven
          Clean and simple
          ───────────────────────────────────── */}
      <section className="section-padding py-20 md:py-28 bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 text-brand-400 text-caption font-medium mb-6">
              <Phone className="h-3.5 w-3.5" />
              For Serious Founders Only
            </div>
            <h2 className="text-heading-lg text-txt-primary md:text-display-sm">
              Want Help Implementing This?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary max-w-xl mx-auto">
              Book a paid strategy call. On this call:
            </p>

            <div className="mt-8 space-y-4 text-left max-w-md mx-auto">
              {[
                'We\u2019ll map your idea into a working funnel',
                'Identify your fastest path to execution',
                'Show you how to apply the VIBE system to your business',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-brand-400 mt-1 shrink-0" />
                  <span className="text-body text-txt-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="xl" className="shadow-glow-sm">
                  Book Your Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-caption text-txt-faint">
              Paid session for founders ready to implement — not just learn
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
