'use client'

import { useState } from 'react'
import { ArrowRight, Loader2, Download, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const inputClasses =
  'w-full rounded-lg border border-surface-300 bg-surface-200 px-4 py-3 text-body text-txt-primary placeholder:text-txt-faint focus:border-brand-400/50 focus:outline-none focus:ring-1 focus:ring-brand-400/30 transition-all duration-200'

interface ResourceGateFormProps {
  resourceTitle: string
  downloadUrl: string
  formTag: string
}

export function ResourceGateForm({ resourceTitle, downloadUrl, formTag }: ResourceGateFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append('_resource', formTag)

    try {
      const response = await fetch('https://formspree.io/f/xqegbnry', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
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
      <div className="py-10 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-400/10 text-brand-400 mb-5">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="text-heading text-txt-primary">Your Download Is Ready</h3>
        <p className="mt-3 text-body text-txt-secondary max-w-sm mx-auto mb-6">
          Click below to download <span className="text-txt-primary">{resourceTitle}</span>. We&apos;ve also sent a copy to your email.
        </p>
        <a href={downloadUrl} download>
          <Button variant="primary" size="xl">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </a>
        <p className="mt-5 text-caption text-txt-faint">
          Want hands-on help implementing this?{' '}
          <a href="/contact" className="text-brand-400 hover:text-brand-300 transition-colors">
            Book a strategy call
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
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
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Unlocking...
            </>
          ) : (
            <>
              Get Free Download
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-caption text-txt-faint">
        No spam. Unsubscribe anytime. We respect your inbox.
      </p>
    </form>
  )
}
