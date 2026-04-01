'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const inputClasses =
  'w-full rounded-[10px] border border-surface-300/80 bg-white px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

const darkInputClasses =
  'w-full rounded-[10px] border border-[#1C2432] bg-[#0D1117] px-4 py-3.5 text-body text-[#E8ECF4] placeholder:text-[#556378] focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

/* ─────────────────────────────────────────────
   Compact Inline Audit Form — for hero + CTA
   ───────────────────────────────────────────── */
export function InlineAuditForm({
  id,
  variant = 'light',
}: {
  id?: string
  variant?: 'light' | 'dark'
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_resource', 'landscaping-idaho-audit')

    try {
      const response = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert('Something went wrong. Please try again or call us directly.')
      }
    } catch {
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div id={id} className="text-center py-4">
        <div className="inline-flex items-center gap-2 text-brand-400 mb-2">
          <CheckCircle2 className="h-5 w-5" />
          <span className="text-body font-semibold">We got your request!</span>
        </div>
        <p className={`text-body-sm ${variant === 'dark' ? 'text-[#8899AC]' : 'text-txt-secondary'}`}>
          We&apos;ll review your info and reach out within 24 hours with your audit.
        </p>
      </div>
    )
  }

  const classes = variant === 'dark' ? darkInputClasses : inputClasses

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
              Get My Free Audit
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
