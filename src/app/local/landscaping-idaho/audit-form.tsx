'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inputLight =
  'w-full rounded-[10px] border border-surface-300/80 bg-white px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

const inputDark =
  'w-full rounded-[10px] border border-[#1C2432] bg-[#0D1117] px-4 py-3.5 text-body text-[#E8ECF4] placeholder:text-[#556378] focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

/* ─────────────────────────────────────────────
   Compact Hero Form — low friction (email + website only)
   ───────────────────────────────────────────── */
export function HeroAuditForm({ id }: { id?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formData.append('_resource', 'landscaping-idaho-audit-hero')

    try {
      const res = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setIsSubmitted(true)
      else alert('Something went wrong. Please try again or call us directly.')
    } catch {
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div id={id} className="rounded-xl border border-brand-400/20 bg-brand-400/5 p-5 text-center">
        <CheckCircle2 className="h-6 w-6 text-brand-400 mx-auto mb-2" />
        <p className="text-heading-sm text-txt-primary">We&apos;re on it.</p>
        <p className="text-body-sm text-txt-secondary mt-1">
          You&apos;ll get your audit within 24 hours. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="url"
          name="website"
          required
          className={inputLight}
          placeholder="Paste your website URL"
          aria-label="Website URL"
        />
        <input
          type="email"
          name="email"
          required
          className={inputLight}
          placeholder="Your best email"
          aria-label="Email address"
        />
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
              Submitting…
            </>
          ) : (
            <>
              Send Me My Free Audit
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      <div className="flex items-center gap-4 mt-3">
        <span className="flex items-center gap-1 text-caption text-txt-faint">
          <Shield className="h-3 w-3" />
          100% free
        </span>
        <span className="flex items-center gap-1 text-caption text-txt-faint">
          <Clock className="h-3 w-3" />
          Results in 24 hrs
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Full Audit Form — CTA section (more detail)
   ───────────────────────────────────────────── */
export function FullAuditForm({
  id,
  variant = 'dark',
}: {
  id?: string
  variant?: 'light' | 'dark'
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formData.append('_resource', 'landscaping-idaho-audit-full')

    try {
      const res = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) setIsSubmitted(true)
      else alert('Something went wrong. Please try again or call us directly.')
    } catch {
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div id={id} className="text-center py-6">
        <CheckCircle2 className="h-8 w-8 text-brand-400 mx-auto mb-3" />
        <p className="text-heading text-[#E8ECF4]">You&apos;re in.</p>
        <p className={`text-body-sm mt-2 ${variant === 'dark' ? 'text-[#8899AC]' : 'text-txt-secondary'}`}>
          We&apos;ll review your business and send your audit within 24 hours.
        </p>
        <div className="mt-6 rounded-xl border border-brand-400/20 bg-brand-400/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4 text-brand-400" />
            <p className="text-body-sm font-semibold text-brand-400">Want Faster Results?</p>
          </div>
          <p className={`text-body-sm ${variant === 'dark' ? 'text-[#8899AC]' : 'text-txt-secondary'}`}>
            Skip the wait and talk to us directly.
          </p>
          <div className="mt-3">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full border-[#1C2432] text-[#E8ECF4] hover:bg-[#161D27]">
                Book a Call Instead
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const classes = variant === 'dark' ? inputDark : inputLight

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="name"
            required
            className={`${classes} sm:flex-1`}
            placeholder="Your name"
            aria-label="Your name"
          />
          <input
            type="text"
            name="businessName"
            required
            className={`${classes} sm:flex-1`}
            placeholder="Business name"
            aria-label="Business name"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            name="email"
            required
            className={`${classes} sm:flex-1`}
            placeholder="Email address"
            aria-label="Email address"
          />
          <input
            type="tel"
            name="phone"
            className={`${classes} sm:flex-1`}
            placeholder="Phone (optional)"
            aria-label="Phone number"
          />
        </div>
        <input
          type="url"
          name="website"
          className={classes}
          placeholder="Your current website URL (if you have one)"
          aria-label="Website URL"
        />
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
              Submitting…
            </>
          ) : (
            <>
              Get My Free Audit Now
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </form>
      <div className="flex items-center gap-4 mt-3">
        <span className={`flex items-center gap-1 text-caption ${variant === 'dark' ? 'text-[#556378]' : 'text-txt-faint'}`}>
          <Shield className="h-3 w-3" />
          No obligation
        </span>
        <span className={`flex items-center gap-1 text-caption ${variant === 'dark' ? 'text-[#556378]' : 'text-txt-faint'}`}>
          <Clock className="h-3 w-3" />
          Results in 24 hrs
        </span>
      </div>
    </div>
  )
}
