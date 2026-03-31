'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Loader2,
  Download,
  CheckCircle2,
  Lock,
  Shield,
  Zap,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inputClasses =
  'w-full rounded-lg border border-surface-300/80 bg-surface-200/80 px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 focus:bg-surface-200 transition-all duration-200'

/* ─────────────────────────────────────────────
   Inline CTA Form — renders in hero + CTA section
   Compact: single row on desktop, stacked on mobile
   ───────────────────────────────────────────── */
export function InlineGateForm({ id }: { id?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_resource', 'vibe-coding-cheat-code')

    try {
      const response = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setIsUnlocked(true)
      } else {
        alert('Something went wrong. Please try again or email david@redemit1.com.')
      }
    } catch {
      alert('Something went wrong. Please try again or email david@redemit1.com.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isUnlocked) {
    return (
      <div id={id}>
        <a href="/downloads/vibe-coding-cheat-code.pdf" download>
          <Button variant="primary" size="xl" className="shadow-glow">
            <Download className="h-4 w-4" />
            Download Your PDF Now
          </Button>
        </a>
        <p className="mt-3 text-body-sm text-txt-muted">
          Check your downloads folder. The full VIBE framework is yours.
        </p>
      </div>
    )
  }

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          name="email"
          required
          className={`${inputClasses} sm:flex-1`}
          placeholder="Enter your email"
          aria-label="Email address"
        />
        <input type="hidden" name="firstName" value="" />
        <Button
          type="submit"
          variant="primary"
          size="xl"
          className="shadow-glow-sm shrink-0 sm:px-8"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Lock className="h-3.5 w-3.5" />
              Unlock the System
            </>
          )}
        </Button>
      </form>
      <div className="flex items-center gap-4 mt-3">
        <span className="flex items-center gap-1 text-caption text-txt-faint">
          <Shield className="h-3 w-3" />
          No spam
        </span>
        <span className="flex items-center gap-1 text-caption text-txt-faint">
          <Zap className="h-3 w-3" />
          Instant access
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Full Post-Opt-In Panel — shown after submission
   in the dedicated CTA section (expanded view)
   ───────────────────────────────────────────── */
export function PostOptInPanel() {
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-400 mb-5 ring-1 ring-brand-400/20">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h3 className="text-heading text-txt-primary">Your Cheat Code Is Ready</h3>
      <p className="mt-2 text-body-sm text-txt-secondary max-w-sm mx-auto">
        Click below to download <span className="text-txt-primary font-medium">The VIBE Coding Cheat Code</span>.
      </p>
      <div className="mt-5">
        <a href="/downloads/vibe-coding-cheat-code.pdf" download>
          <Button variant="primary" size="xl" className="shadow-glow">
            <Download className="h-4 w-4" />
            Download Your PDF Now
          </Button>
        </a>
      </div>

      {/* Strategy Call Upsell */}
      <div className="mt-10 mx-auto max-w-md rounded-xl bg-surface-0 border border-brand-400/20 p-6 text-left">
        <div className="flex items-center gap-2 mb-3">
          <Phone className="h-4 w-4 text-brand-400" />
          <p className="text-body-sm font-semibold text-brand-400 uppercase tracking-wider">
            Recommended Next Step
          </p>
        </div>
        <h4 className="text-heading-sm text-txt-primary">
          Get a Custom VIBE Implementation Plan
        </h4>
        <p className="mt-2 text-body-sm text-txt-secondary leading-relaxed">
          A strategy call gives you the custom playbook for <strong className="text-txt-primary">your</strong> business — your offers, your funnels, your growth goals.
        </p>
        <ul className="mt-3 space-y-1.5">
          {[
            'Custom AI build plan for your business',
            'Offer + funnel architecture review',
            '90-day execution roadmap',
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-body-sm text-txt-secondary">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link href="/contact">
            <Button variant="primary" size="lg" className="w-full shadow-glow-sm">
              Book Your Strategy Call
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
