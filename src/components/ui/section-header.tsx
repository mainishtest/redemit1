import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {label && (
        <p className="text-overline uppercase text-txt-muted mb-4 tracking-widest">
          {label}
        </p>
      )}
      <h2 className="text-display-sm text-txt-primary text-balance md:text-display">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-body-lg text-txt-secondary text-pretty leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
