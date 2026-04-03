import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Globe, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Portfolio — Websites & Marketing We\'ve Built',
  description: 'See the websites, landing pages, and marketing systems we\'ve built for local businesses — from contractors to nonprofits to tech startups.',
}

interface PortfolioProject {
  name: string
  slug: string
  url: string
  industry: string
  type: string
  location: string
  description: string
  services: string[]
  gradient: string
  textColor: string
  accentColor: string
  featured?: boolean
}

const projects: PortfolioProject[] = [
  {
    name: 'Building With Valor',
    slug: 'building-with-valor',
    url: 'https://www.buildingwithvalor.com',
    industry: 'Commercial Construction',
    type: 'Client Website',
    location: 'Nampa, Idaho',
    description: 'Website for a commercial construction company focused on tenant improvements, commercial remodels, and custom homes. Built to convey precision, integrity, and premium craftsmanship.',
    services: ['Website Design & Build', 'Brand Strategy', 'Service Pages'],
    gradient: 'from-[#8fad9b]/90 via-[#6b8f7a]/80 to-[#4a6b58]/90',
    textColor: 'text-emerald-100',
    accentColor: 'bg-emerald-300',
    featured: true,
  },
  {
    name: 'True Gritt Youth Sports',
    slug: 'true-gritt-sports',
    url: 'https://truegrittsports.org',
    industry: 'Youth Sports Nonprofit',
    type: 'Client Website',
    location: 'Kuna, Idaho',
    description: 'Website for a nonprofit building a $120M, 114-acre multi-sport complex. Designed to communicate the vision, drive donations, and build community support for the project.',
    services: ['Website Design & Build', 'Nonprofit Strategy', 'Donation Funnels'],
    gradient: 'from-slate-800/90 via-slate-700/80 to-yellow-900/60',
    textColor: 'text-yellow-200',
    accentColor: 'bg-yellow-400',
    featured: true,
  },
  {
    name: 'MAINish',
    slug: 'mainish',
    url: 'https://www.mainish.com',
    industry: 'Live Marketplace (Tech)',
    type: 'Client Website',
    location: 'Idaho',
    description: 'Launch page for a next-generation live marketplace platform connecting local businesses with real people and instant delivery. Built to capture early access signups ahead of the Summer 2026 launch.',
    services: ['Website Design & Build', 'Launch Strategy', 'Email Capture'],
    gradient: 'from-neutral-950/95 via-neutral-900/90 to-teal-950/80',
    textColor: 'text-neutral-200',
    accentColor: 'bg-gradient-to-r from-orange-400 to-pink-400',
  },
  {
    name: 'Valhalla Roofing',
    slug: 'valhalla-roofing',
    url: '/demos/valhalla-roofing',
    industry: 'Roofing',
    type: 'Demo Landing Page',
    location: 'Boise, Idaho',
    description: 'Conversion-optimized landing page concept for a local roofing company. Built to drive free roof inspection requests with a hero form, trust signals, and clear calls-to-action.',
    services: ['Landing Page Design', 'CRO Strategy', 'Lead Capture Forms'],
    gradient: 'from-slate-800/90 via-red-900/60 to-slate-900/90',
    textColor: 'text-red-200',
    accentColor: 'bg-red-500',
  },
  {
    name: 'Fazzio\'s MVP Elite',
    slug: 'treasure-valley-baseball',
    url: '/demos/treasure-valley-baseball',
    industry: 'Youth Baseball Training',
    type: 'Demo Landing Page',
    location: 'Boise, Idaho',
    description: 'Conversion-focused landing page for a youth baseball training facility. Designed to speak directly to parents and drive evaluation bookings with social proof and clear program info.',
    services: ['Landing Page Design', 'CRO Strategy', 'Parent-Focused Copy'],
    gradient: 'from-blue-950/90 via-blue-900/70 to-emerald-900/60',
    textColor: 'text-blue-200',
    accentColor: 'bg-blue-400',
  },
]

function PortfolioCard({ project, index }: { project: PortfolioProject; index: number }) {
  const isExternal = project.url.startsWith('http')
  const LinkIcon = isExternal ? ExternalLink : ArrowUpRight

  return (
    <a
      href={project.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`group block overflow-hidden rounded-xl border border-light-300/60 hover:border-light-400/80 transition-all duration-300 hover:shadow-lg ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Preview area */}
      <div className={`relative aspect-[16/9] ${project.featured ? 'md:aspect-[21/9]' : ''} bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Browser chrome mockup */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 backdrop-blur-sm flex items-center px-4 gap-2">
          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-4 bg-white/10 rounded-full max-w-[240px] mx-auto flex items-center justify-center">
              <span className="text-[10px] text-white/40 font-mono truncate px-3">
                {project.url.replace('https://', '').replace('www.', '')}
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot preview image */}
        {/* Run: node scripts/capture-portfolio-screenshots.mjs */}
        <img
          src={`/images/portfolio/${project.slug}.jpg`}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover object-top pt-8"
        />

        {/* Gradient fallback (visible if screenshot hasn't loaded yet) */}
        <div className="absolute inset-0 pt-12 px-6 md:px-10 -z-10">
          <div className={`text-2xl md:text-3xl ${project.featured ? 'lg:text-4xl' : ''} font-bold text-white/90 leading-tight max-w-md`}>
            {project.name}
          </div>
          <div className="mt-3 flex gap-2">
            <span className={`inline-block h-1 w-12 rounded-full ${project.accentColor}`} />
            <span className="inline-block h-1 w-6 rounded-full bg-white/20" />
          </div>
          <div className="mt-4 space-y-2 max-w-sm">
            <div className="h-2.5 bg-white/15 rounded-full w-full" />
            <div className="h-2.5 bg-white/10 rounded-full w-4/5" />
            <div className="h-2.5 bg-white/8 rounded-full w-3/5" />
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-2 bg-white/95 text-ink-primary px-5 py-2.5 rounded-full text-body-sm font-medium shadow-lg">
              <Globe className="h-4 w-4" />
              Visit Site
              <LinkIcon className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-11 right-4">
          <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            project.type === 'Demo Landing Page'
              ? 'bg-amber-400/20 text-amber-200 border border-amber-400/30'
              : 'bg-white/15 text-white/70 border border-white/20'
          }`}>
            {project.type}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 md:p-7 bg-light-50">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-overline uppercase text-ink-faint tracking-widest">{project.industry}</span>
              <span className="text-ink-faint">&middot;</span>
              <span className="text-overline text-ink-faint">{project.location}</span>
            </div>
            <h3 className="text-heading-sm text-ink-primary group-hover:text-ink-primary transition-colors">
              {project.name}
            </h3>
            <p className="mt-2 text-body-sm text-ink-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="text-caption text-ink-muted bg-light-200/80 px-2.5 py-1 rounded-md"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-light-300/60">
          <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-ink-muted group-hover:text-brand-500 transition-colors duration-300">
            View project
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </a>
  )
}

export default function PortfolioPage() {
  const clientProjects = projects.filter((p) => p.type === 'Client Website')
  const demoProjects = projects.filter((p) => p.type === 'Demo Landing Page')

  return (
    <>
      {/* Hero */}
      <section className="section-padding">
        <div className="section-container pt-36 pb-16 md:pt-44 md:pb-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline uppercase text-txt-muted tracking-widest mb-5">Our Work</p>
            <h1 className="text-display-sm text-txt-primary text-balance md:text-display-lg">
              Websites That Get Results
            </h1>
            <p className="mt-6 text-body-lg text-txt-secondary leading-relaxed">
              From local contractors to tech startups — every site we build is designed to look great, load fast, and turn visitors into customers.
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding"><div className="section-container section-divider" /></div>

      {/* Client Projects */}
      <section className="section-padding py-20 md:py-28">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">Client Projects</p>
            <h2 className="text-heading-lg text-txt-primary">Websites We&apos;ve Built & Launched</h2>
            <p className="mt-3 text-body text-txt-secondary max-w-xl">
              These are live sites built for real businesses — designed, developed, and launched by our team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {clientProjects.map((project, i) => (
              <PortfolioCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Projects */}
      <section className="section-padding py-20 md:py-28 bg-light-100">
        <div className="section-container">
          <div className="mb-12">
            <p className="text-overline uppercase text-brand-400 tracking-widest mb-3">Demo Concepts</p>
            <h2 className="text-heading-lg text-txt-primary">Landing Pages We&apos;ve Designed</h2>
            <p className="mt-3 text-body text-txt-secondary max-w-xl">
              Conversion-optimized landing page concepts built to show local businesses what&apos;s possible. These are samples — imagine what we can build for you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {demoProjects.map((project, i) => (
              <PortfolioCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-display-sm text-txt-primary md:text-display">
              Want a Website That Actually Works?
            </h2>
            <p className="mt-5 text-body-lg text-txt-secondary">
              Get a free audit of your current site. We&apos;ll show you what&apos;s working, what&apos;s not, and exactly how to fix it.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button variant="primary" size="xl">
                  Get Your Free Audit
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
