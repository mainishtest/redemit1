'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeader } from '@/components/ui/section-header'
import { FAQ_ITEMS } from '@/lib/constants'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-spacing section-padding">
      <div className="section-container">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-20">
          <div className="lg:col-span-2">
            <SectionHeader
              label="FAQ"
              title="Common Questions"
              description="Everything you need to know before we start working together."
              align="left"
            />
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-0">
              {FAQ_ITEMS.map((item, i) => (
                <div key={i} className="border-b border-light-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between text-left py-6 group"
                  >
                    <span className={cn(
                      'text-body-lg font-medium pr-6 transition-colors duration-200',
                      openIndex === i ? 'text-ink-primary' : 'text-ink-secondary group-hover:text-ink-primary'
                    )}>
                      {item.question}
                    </span>
                    <span className={cn(
                      'flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200',
                      openIndex === i
                        ? 'border-brand-400/30 text-brand-500 bg-brand-400/5'
                        : 'border-light-400 text-ink-faint'
                    )}>
                      {openIndex === i
                        ? <Minus className="h-3.5 w-3.5" />
                        : <Plus className="h-3.5 w-3.5" />
                      }
                    </span>
                  </button>
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300 ease-out',
                      openIndex === i ? 'max-h-96 pb-6' : 'max-h-0'
                    )}
                  >
                    <p className="text-body text-ink-secondary leading-relaxed pr-12">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
