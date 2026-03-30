import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'brand' | 'outline'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-0.5 text-overline uppercase',
        {
          'bg-surface-200 text-txt-secondary': variant === 'default',
          'bg-brand-400/8 text-brand-400 ring-1 ring-brand-400/15': variant === 'brand',
          'ring-1 ring-surface-400 text-txt-muted': variant === 'outline',
        },
        className
      )}
      {...props}
    />
  )
}
