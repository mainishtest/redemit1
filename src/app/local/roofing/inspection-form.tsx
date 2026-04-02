'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
  Phone,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inputLight =
  'w-full rounded-[10px] border border-surface-300/80 bg-white px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

const inputDark =
  'w-full rounded-[10px] border border-[#1C2432] bg-[#0D1117] px-4 py-3.5 text-body text-[#E8ECF4] placeholder:text-[#556378] focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

/* ─────────────────────────────────────────────
   Compact Hero Form — low friction (name + phone + address)
   ───────────────────────────────────────────── */
export function HeroInspectionForm({ id }: { id?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formData.append('_resource', 'roofing-inspection-hero')

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
        <p className="text-heading-sm text-txt-primary">You&apos;re all set.</p>
        <p className="text-body-sm text-txt-secondary mt-1">
          We&apos;ll reach out within a few hours to schedule your free inspection.
        </p>
      </div>
    )
  }

  return (
    <div id={id}>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          required
          className={inputLight}
          placeholder="Your first name"
          aria-label="First name"
        />
        <input
          type="tel"
          name="phone"
          required
          className={inputLight}
          placeholder="Phone number"
          aria-label="Phone number"
        />
        <input
          type="text"
          name="address"
          className={inputLight}
          placeholder="Property address (optional)"
          aria-label="Property address"
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
              Submitting&hellip;
            </>
          ) : (
            <>
              Get My Free Inspection
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
          Same-day response
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Full Inspection Form — CTA section (more detail)
   ───────────────────────────────────────────── */
export function FullInspectionForm({
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
    formData.append('_resource', 'roofing-inspection-full')

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
        <p className="text-heading text-[#E8ECF4]">You&apos;re on the list.</p>
        <p className={`text-body-sm mt-2 ${variant === 'dark' ? 'text-[#8899AC]' : 'text-txt-secondary'}`}>
          We&apos;ll call you shortly to schedule your free roof inspection.
        </p>
        <div className="mt-6 rounded-xl border border-brand-400/20 bg-brand-400/5 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="h-4 w-4 text-brand-400" />
            <p className="text-body-sm font-semibold text-brand-400">Need It Sooner?</p>
          </div>
          <p className={`text-body-sm ${variant === 'dark' ? 'text-[#8899AC]' : 'text-txt-secondary'}`}>
            Skip the wait and call us right now.
          </p>
          <div className="mt-3">
            <Link href="/contact">
              <Button variant="outline" size="lg" className="w-full border-[#1C2432] text-[#E8ECF4] hover:bg-[#161D27]">
                Call Us Directly
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
            type="tel"
            name="phone"
            required
            className={`${classes} sm:flex-1`}
            placeholder="Phone number"
            aria-label="Phone number"
          />
        </div>
        <input
          type="text"
          name="address"
          className={classes}
          placeholder="Property address"
          aria-label="Property address"
        />
        <input
          type="email"
          name="email"
          className={classes}
          placeholder="Email (optional)"
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
              Submitting&hellip;
            </>
          ) : (
            <>
              Schedule My Free Inspection
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
          Same-day response
        </span>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Modal — triggered by CTA buttons throughout page
   ───────────────────────────────────────────── */
export function InspectionModal() {
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    function handleOpen() {
      setIsOpen(true)
    }
    window.addEventListener('open-inspection-modal', handleOpen)
    return () => window.removeEventListener('open-inspection-modal', handleOpen)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKey)
      return () => window.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Request free roof inspection"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[480px] rounded-2xl border border-[#1C2432] bg-[#0D1117] p-8 shadow-2xl">
        <button
          onClick={close}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-[#556378] hover:text-[#E8ECF4] hover:bg-[#161D27] transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="text-heading text-[#E8ECF4] mb-2">
          Get Your Free Roof Inspection
        </h3>
        <p className="text-body-sm text-[#8899AC] mb-6">
          Fill this out and we&apos;ll call you to schedule — usually same day.
        </p>

        <FullInspectionForm variant="dark" />
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   CTA Button — fires modal open event
   ───────────────────────────────────────────── */
export function CTAButton({
  children,
  variant = 'primary',
  size = 'xl',
  className,
}: {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'lg' | 'xl'
  className?: string
}) {
  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => window.dispatchEvent(new Event('open-inspection-modal'))}
    >
      {children}
    </Button>
  )
}
