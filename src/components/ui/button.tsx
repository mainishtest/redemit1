import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        // Primary: Solid teal — the ONLY place teal dominates
        primary:
          'bg-brand-400 text-surface-0 rounded-lg hover:bg-brand-300 shadow-glow-sm hover:shadow-glow active:scale-[0.98] font-semibold',
        // Secondary: Light fill, no teal
        secondary:
          'bg-surface-200 text-txt-primary rounded-lg hover:bg-surface-300 border border-surface-400/50 active:scale-[0.98]',
        // Outline: Border only
        outline:
          'border border-surface-400 text-txt-primary rounded-lg hover:bg-surface-100 hover:border-txt-muted active:scale-[0.98]',
        // Ghost: Text only
        ghost:
          'text-txt-secondary rounded-lg hover:text-txt-primary hover:bg-surface-100',
        // Link: Inline
        link:
          'text-txt-secondary underline-offset-4 hover:underline hover:text-txt-primary',
      },
      size: {
        sm: 'h-8 px-3.5 text-body-sm gap-1.5',
        md: 'h-10 px-5 text-body gap-2',
        lg: 'h-12 px-7 text-body gap-2',
        xl: 'h-[52px] px-8 text-body-lg gap-2.5',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
