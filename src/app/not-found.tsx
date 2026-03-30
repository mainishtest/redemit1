import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <section className="section-padding">
      <div className="section-container flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-[120px] font-semibold leading-none text-surface-200 tracking-tight">404</p>
        <h1 className="mt-2 text-heading-lg text-txt-primary">Page Not Found</h1>
        <p className="mt-3 text-body text-txt-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-8">
          <Link href="/">
            <Button variant="secondary" size="lg">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
