'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const inputClasses =
  'w-full rounded-lg border border-surface-300 bg-surface-200 px-4 py-3 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/30 transition-all duration-200'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        router.push('/thank-you')
      } else {
        alert('Something went wrong. Please try again or email us directly.')
      }
    } catch {
      alert('Something went wrong. Please try again or email us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-400/10 text-brand-400 mb-5">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-heading text-txt-primary">Application Received</h3>
        <p className="mt-3 text-body text-txt-secondary max-w-sm mx-auto">
          We&apos;ll review your info and get back to you within 24 hours to schedule your strategy call.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-body-sm font-medium text-txt-secondary mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClasses}
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-body-sm font-medium text-txt-secondary mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClasses}
            placeholder="Doe"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-body-sm font-medium text-txt-secondary mb-2">
          Work Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          placeholder="john@company.com"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-body-sm font-medium text-txt-secondary mb-2">
          Website URL
        </label>
        <input
          type="text"
          id="website"
          name="website"
          className={inputClasses}
          placeholder="yourcompany.com"
        />
      </div>

      <div>
        <label htmlFor="adSpend" className="block text-body-sm font-medium text-txt-secondary mb-2">
          Current Monthly Ad Spend
        </label>
        <select
          id="adSpend"
          name="adSpend"
          required
          className={inputClasses}
        >
          <option value="">Select a range</option>
          <option value="0-5k">$0 - $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k-100k">$50,000 - $100,000</option>
          <option value="100k+">$100,000+</option>
        </select>
      </div>

      <div>
        <label htmlFor="goal" className="block text-body-sm font-medium text-txt-secondary mb-2">
          What&apos;s your biggest growth challenge right now?
        </label>
        <textarea
          id="goal"
          name="goal"
          required
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="e.g., We're spending $30K/mo on Meta but our ROAS has dropped below 2x..."
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="xl"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              Apply for a Strategy Call
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-caption text-txt-faint pt-1">
        We respond to every application within 24 hours. No spam, no automated emails.
      </p>
    </form>
  )
}
