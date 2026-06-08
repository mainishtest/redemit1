import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Play, Share2, Video } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { VIDEO_PRICING, VIDEO_SYNDICATION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Video Marketing',
  description: 'Professional marketing videos filmed and released for your business. Drive more leads with high-quality video content distributed across every major platform.',
}

export default function VideoMarketingPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-28 pb-10 md:pt-36 md:pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">Video Marketing</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Marketing Videos That Get Your Phone Ringing
            </h1>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
              We film, produce, and release professional marketing videos for your business — then put them in front of the customers who need you most.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get a Free Video Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* What We Do */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">The Process</p>
            <h2 className="text-display-sm text-txt-primary">From Script to Screen to Sales</h2>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
              We handle everything — scripting, filming, editing, and distribution. You show up, we make you look great.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                icon: Video,
                step: '01',
                title: 'We Film It',
                description: 'Our crew comes to you. We script, direct, and film a professional marketing video built to convert viewers into customers.',
              },
              {
                icon: Play,
                step: '02',
                title: 'We Produce It',
                description: 'Professional editing, color grading, captions, and branded graphics. A polished video ready to make an impression.',
              },
              {
                icon: Share2,
                step: '03',
                title: 'We Release It',
                description: 'We deliver your finished video and — with our syndication add-on — publish it across every major platform for you.',
              },
            ].map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="rounded-xl bg-surface-50 border border-surface-300/40 p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-surface-100 border border-surface-300/40 text-txt-muted">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="text-overline uppercase text-txt-faint tracking-widest">{step}</span>
                </div>
                <h3 className="text-heading-sm text-txt-primary mb-2">{title}</h3>
                <p className="text-body-sm text-txt-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Pricing */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center mb-14">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">Pricing</p>
            <h2 className="text-display-sm text-txt-primary">Simple, Transparent Video Packages</h2>
            <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
              The more videos you book, the more you save. Every package includes scripting, filming, and full post-production.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {VIDEO_PRICING.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-xl border p-6 flex flex-col ${
                  pkg.highlight
                    ? 'bg-brand-500 border-brand-500 text-white'
                    : 'bg-surface-50 border-surface-300/40'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-brand-600 text-white text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <p className={`text-overline uppercase tracking-widest mb-2 ${pkg.highlight ? 'text-brand-100' : 'text-txt-faint'}`}>
                  {pkg.label}
                </p>
                <p className={`text-display-sm font-bold leading-none ${pkg.highlight ? 'text-white' : 'text-txt-primary'}`}>
                  {pkg.videos}
                  <span className={`text-body-lg font-medium ml-1 ${pkg.highlight ? 'text-brand-100' : 'text-txt-secondary'}`}>
                    {pkg.videos === 1 ? 'video' : 'videos'}
                  </span>
                </p>
                <p className={`mt-3 text-body-lg font-semibold ${pkg.highlight ? 'text-white' : 'text-txt-primary'}`}>
                  ${pkg.pricePerVideo.toLocaleString()}
                  <span className={`text-body-sm font-normal ml-1 ${pkg.highlight ? 'text-brand-100' : 'text-txt-secondary'}`}>
                    / video
                  </span>
                </p>
                <p className={`mt-1 text-body-sm ${pkg.highlight ? 'text-brand-100' : 'text-txt-muted'}`}>
                  ${pkg.total.toLocaleString()} total
                </p>
                <p className={`mt-4 text-body-sm leading-relaxed flex-1 ${pkg.highlight ? 'text-brand-50' : 'text-txt-secondary'}`}>
                  {pkg.description}
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <Button
                      variant={pkg.highlight ? 'outline' : 'primary'}
                      size="md"
                      className="w-full"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Syndication Add-On */}
      <section className="section-padding py-12 md:py-16">
        <div className="section-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-overline uppercase text-txt-muted tracking-widest mb-3">Add-On Service</p>
              <h2 className="text-display-sm text-txt-primary">
                Video Syndication — ${VIDEO_SYNDICATION.pricePerVideo.toLocaleString()} per Video
              </h2>
              <p className="mt-4 text-body-lg text-txt-secondary leading-relaxed">
                {VIDEO_SYNDICATION.description}
              </p>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {VIDEO_SYNDICATION.platforms.map((platform) => (
                  <li key={platform} className="flex items-center gap-2.5">
                    <Check className="h-4 w-4 text-brand-400 shrink-0" />
                    <span className="text-body-sm text-txt-secondary">{platform}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Add Syndication to Your Package
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-surface-100 border border-surface-300/40 p-10 flex flex-col items-center justify-center text-center gap-4 aspect-square max-w-sm mx-auto lg:max-w-none">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500/10 border border-brand-500/20">
                <Share2 className="h-8 w-8 text-brand-500" />
              </div>
              <p className="text-heading-sm text-txt-primary">One video, everywhere</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {VIDEO_SYNDICATION.platforms.map((platform) => (
                  <Badge key={platform} variant="outline">{platform}</Badge>
                ))}
              </div>
              <p className="text-body-sm text-txt-muted">
                We handle the uploads, descriptions, tags, and scheduling — so you don&apos;t have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding bg-surface-0">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Ready to Put Your Business on Camera?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Let&apos;s talk about which video package is right for your business. We&apos;ll give you a free consultation and a clear plan.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
