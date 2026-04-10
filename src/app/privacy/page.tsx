import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="section-container max-w-[680px] pt-28 pb-14 md:pt-36 md:pb-20">
        <h1 className="text-display-sm text-txt-primary">Privacy Policy</h1>
        <div className="mt-8 space-y-7 text-body text-txt-secondary leading-relaxed">
          <p className="text-caption text-txt-muted">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

          <h2 className="text-heading text-txt-primary pt-2">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you fill out a contact form, sign up for our newsletter, or communicate with us. This may include your name, email address, company name, website URL, and any other information you choose to provide.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries, provide our services, send you marketing communications (with your consent), and improve our website and services.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">Analytics & Tracking</h2>
          <p>
            We use analytics tools including Google Analytics and Meta Pixel to understand how visitors interact with our website. These tools may collect information about your browsing behavior, device information, and other technical data.
          </p>

          <h2 className="text-heading text-txt-primary pt-2">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at hello@redemit1.com.
          </p>
        </div>
      </div>
    </section>
  )
}
