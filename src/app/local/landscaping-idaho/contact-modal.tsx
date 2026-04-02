'use client'

import { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'
import {
  X,
  ArrowRight,
  Loader2,
  CheckCircle2,
  Shield,
  Clock,
  Phone,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

/* ─────────────────────────────────────────────
   Context — share open/close across the page
   ───────────────────────────────────────────── */
type ModalContextType = {
  open: () => void
  close: () => void
  isOpen: boolean
}

const ModalContext = createContext<ModalContextType>({
  open: () => {},
  close: () => {},
  isOpen: false,
})

export function useContactModal() {
  return useContext(ModalContext)
}

/* ─────────────────────────────────────────────
   Provider — wraps the page, renders the modal
   ───────────────────────────────────────────── */
export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  // Lock body scroll when modal is open
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

  return (
    <ModalContext.Provider value={{ open, close, isOpen }}>
      {children}
      {isOpen && <ContactModal onClose={close} />}
    </ModalContext.Provider>
  )
}

/* ─────────────────────────────────────────────
   CTA Button — triggers modal instead of navigating
   ───────────────────────────────────────────── */
export function ModalCTAButton({
  children,
  variant = 'primary',
  size = 'xl',
  className = '',
}: {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}) {
  const { open } = useContactModal()

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={open}
    >
      {children}
    </Button>
  )
}

/* ─────────────────────────────────────────────
   Input styles
   ───────────────────────────────────────────── */
const inputClasses =
  'w-full rounded-[10px] border border-surface-300/80 bg-white px-4 py-3.5 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-2 focus:ring-brand-400/20 transition-all duration-200'

/* ─────────────────────────────────────────────
   The Modal
   ───────────────────────────────────────────── */
function ContactModal({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const firstInputRef = useRef<HTMLInputElement>(null)

  // Autofocus first field on mount
  useEffect(() => {
    // Small delay for animation
    const timer = setTimeout(() => {
      firstInputRef.current?.focus()
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  // Close on overlay click
  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    formData.append('_resource', 'landscaping-idaho-modal')

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

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[480px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl animate-modal-content"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-lg text-txt-muted hover:text-txt-primary hover:bg-surface-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* ── Success state ── */
            <div className="text-center py-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-400/10 mb-4">
                <CheckCircle2 className="h-7 w-7 text-brand-400" />
              </div>
              <h3 className="text-heading-lg text-txt-primary">We&apos;re On It</h3>
              <p className="mt-2 text-body text-txt-secondary max-w-sm mx-auto">
                You&apos;ll have your personalized audit within 24 hours. Keep an eye on your inbox.
              </p>

              {/* Upsell: book a call */}
              <div className="mt-8 rounded-xl border border-brand-400/20 bg-brand-400/5 p-5 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-brand-400" />
                  <p className="text-body-sm font-semibold text-brand-400 uppercase tracking-wider">
                    Want Faster Results?
                  </p>
                </div>
                <p className="text-body-sm text-txt-secondary">
                  Skip the wait and talk to us directly about your business.
                </p>
                <div className="mt-3">
                  <Link href="/contact" onClick={onClose}>
                    <Button variant="primary" size="lg" className="w-full shadow-glow-sm">
                      Book a Call Instead
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <button
                onClick={onClose}
                className="mt-4 text-body-sm text-txt-muted hover:text-txt-primary transition-colors"
              >
                Close this window
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              {/* Header */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/5 px-3 py-1 mb-4">
                  <MapPin className="h-3 w-3 text-brand-400" />
                  <span className="text-caption font-medium text-brand-400">
                    Treasure Valley
                  </span>
                </div>
                <h3 className="text-heading-lg text-txt-primary">
                  Get Your Free Local Growth Audit
                </h3>
                <p className="mt-2 text-body-sm text-txt-secondary">
                  We&apos;ll review your website and show you exactly how to get more local jobs. Free, no strings attached.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    ref={firstInputRef}
                    type="text"
                    name="firstName"
                    required
                    className={`${inputClasses} sm:flex-1`}
                    placeholder="First name"
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    name="businessName"
                    required
                    className={`${inputClasses} sm:flex-1`}
                    placeholder="Business name"
                    aria-label="Business name"
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  required
                  className={inputClasses}
                  placeholder="Email address"
                  aria-label="Email address"
                />

                <input
                  type="tel"
                  name="phone"
                  className={inputClasses}
                  placeholder="Phone (recommended)"
                  aria-label="Phone number"
                />

                <textarea
                  name="message"
                  className={`${inputClasses} resize-none`}
                  rows={2}
                  defaultValue="Interested in a free local growth audit"
                  aria-label="Message"
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
                      Sending…
                    </>
                  ) : (
                    <>
                      Get My Free Audit
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {/* Trust badges */}
              <div className="flex items-center justify-center gap-5 mt-4">
                <span className="flex items-center gap-1 text-caption text-txt-faint">
                  <Shield className="h-3 w-3" />
                  No obligation
                </span>
                <span className="flex items-center gap-1 text-caption text-txt-faint">
                  <Clock className="h-3 w-3" />
                  Results in 24 hrs
                </span>
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  )
}
