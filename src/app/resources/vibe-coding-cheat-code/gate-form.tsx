'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Loader2,
  Download,
  CheckCircle2,
  Lock,
  FileText,
  Shield,
  Zap,
  Phone,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inputClasses =
  'w-full rounded-lg border border-surface-300/80 bg-surface-200/80 px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 focus:bg-surface-200 transition-all duration-200'

export function VibeCodingGateForm() {
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

  // ─── Post-Opt-In: Download + Strategy Call Upsell ───
  if (isUnlocked) {
    return (
      <div className="py-4">
        {/* Success State */}
        <div className="text-center mb-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-400/10 text-brand-400 mb-5 ring-1 ring-brand-400/20">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-heading text-txt-primary">Your Cheat Code Is Ready</h3>
          <p className="mt-2 text-body-sm text-txt-secondary max-w-sm mx-auto">
            Click below to download <span className="text-txt-primary font-medium">The VIBE Coding Cheat Code</span> instantly.
          </p>
          <div className="mt-5">
            <a href="/downloads/vibe-coding-cheat-code.pdf" download>
              <Button variant="primary" size="xl" className="shadow-glow">
                <Download className="h-4 w-4" />
                Download Your PDF Now
              </Button>
            </a>
          </div>
        </div>

        {/* Strategy Call Upsell */}
        <div className="border-t border-surface-300/40 pt-6">
          <div className="rounded-xl bg-surface-0 border border-brand-400/20 p-5">
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
              The cheat code gives you the system. <strong className="text-txt-primary">A strategy call gives you the custom playbook for YOUR business.</strong> We will map the VIBE framework to your offers, funnels, and growth goals — and build a 90-day execution plan.
            </p>
            <ul className="mt-3 space-y-1.5">
              <li className="flex items-center gap-2 text-body-sm text-txt-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                Custom AI build plan for your business
              </li>
              <li className="flex items-center gap-2 text-body-sm text-txt-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                Offer + funnel architecture review
              </li>
              <li className="flex items-center gap-2 text-body-sm text-txt-secondary">
                <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0" />
                90-day execution roadmap you can start immediately
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full shadow-glow-sm">
                  Book Your Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <p className="mt-2.5 text-center text-caption text-txt-faint">
              Paid session for founders ready to implement
            </p>
          </div>
        </div>
      </div>
    )
  }

  // ─── Pre-Opt-In: Email Gate Form ───
  return (
    <div>
      {/* PDF Preview Card */}
      <div className="mb-5 flex items-center gap-4 p-4 rounded-lg bg-surface-0/50 border border-surface-300/30">
        <div className="flex h-12 w-10 shrink-0 items-center justify-center rounded-md bg-brand-400/10 ring-1 ring-brand-400/20">
          <FileText className="h-5 w-5 text-brand-400" />
        </div>
        <div className="min-w-0">
          <p className="text-body-sm font-medium text-txt-primary truncate">The VIBE Coding Cheat Code</p>
          <p className="text-caption text-txt-muted">16 pages &middot; Instant download</p>
        </div>
      </div>

      {/* Urgency Signal */}
      <div className="mb-5 flex items-center gap-2 px-3 py-2.5 rounded-lg bg-brand-400/5 border border-brand-400/15">
        <Sparkles className="h-3.5 w-3.5 text-brand-400 shrink-0" />
        <p className="text-caption font-medium text-brand-400">The system behind our fastest-scaling founder clients</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3.5">
        <div>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClasses}
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
            placeholder="Your best email"
            aria-label="Email address"
          />
        </div>

        <div className="pt-1">
          <Button
            type="submit"
            variant="primary"
            size="xl"
            className="w-full shadow-glow-sm"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Lock className="h-3.5 w-3.5" />
                Get the Cheat Code
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </div>

        {/* Trust Signals */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <span className="flex items-center gap-1 text-caption text-txt-faint">
            <Shield className="h-3 w-3" />
            No spam
          </span>
          <span className="flex items-center gap-1 text-caption text-txt-faint">
            <Zap className="h-3 w-3" />
            Instant access
          </span>
        </div>
      </form>
    </div>
  )
}
