import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-[680px] pt-28 pb-14 md:pt-36 md:pb-20">
        <h1 className="text-display-sm text-txt-primary">Terms of Service</h1>
        <div className="mt-8 space-y-7 text-body text-txt-secondary leading-relaxed">
          <p className="text-caption text-txt-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <h2 className="text-heading text-txt-primary pt-2">Agreement to Terms</h2>
          <p>
            By accessing or using the Redemit One website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access the website.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">Services</h2>
          <p>
            Redemit One provides growth marketing services including media buying, offer creation, funnel strategy, and creative services. Specific service terms are outlined in individual client agreements.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">Intellectual Property</h2>
          <p>
            The content, features, and functionality of this website are owned by Redemit One and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at hello@redemit1.com.
          </p>
        </div>
      </div>
    </section>
  )
}
