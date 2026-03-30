'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-surface-50/90 backdrop-blur-2xl border-b border-surface-300/40'
          : 'bg-transparent'
      )}
    >
      <div className="section-padding">
        <div className="section-container">
          <nav className="flex h-16 items-center justify-between lg:h-[72px]">
            {/* Logo — matches brand: dark text + teal "1" */}
            <Link
              href="/"
              className="relative z-50 flex items-center gap-0.5 text-[22px] tracking-tight"
            >
              <span className="font-semibold text-txt-primary">Redemit</span>
              <span className="font-semibold text-brand-400">1</span>
            </Link>

            {/* Desktop Nav — minimal, no backgrounds on items */}
            <div className="hidden items-center gap-8 lg:flex">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-body font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'text-txt-primary'
                      : 'text-txt-muted hover:text-txt-primary'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-4 lg:flex">
              <Link href="/contact">
                <Button variant="primary" size="md">
                  {SITE_CONFIG.booking.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-txt-muted hover:text-txt-primary lg:hidden transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile Menu — full screen, refined */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-surface-50 transition-all duration-500 lg:hidden',
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="space-y-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block py-4 text-[28px] font-semibold tracking-tight transition-colors border-b border-surface-300/30',
                  pathname === item.href
                    ? 'text-txt-primary'
                    : 'text-txt-muted hover:text-txt-primary'
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Link href="/contact" className="block">
              <Button variant="primary" size="xl" className="w-full">
                {SITE_CONFIG.booking.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="mt-10 space-y-1.5 text-body-sm text-txt-muted">
            <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-txt-secondary transition-colors">
              {SITE_CONFIG.email}
            </a>
            <a href={`tel:${SITE_CONFIG.phone}`} className="block hover:text-txt-secondary transition-colors">
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
