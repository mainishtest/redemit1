import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-40',
  {
    variants: {
      variant: {
        // Primary: Solid teal — premium hover lift effect
        primary:
          'bg-brand-400 text-ink-primary rounded-[10px] hover:bg-brand-500 shadow-glow-sm hover:shadow-glow hover:-translate-y-[1px] active:translate-y-0 active:shadow-glow-sm font-semibold',
        // Secondary: Light fill, subtle
        secondary:
          'bg-surface-200 text-txt-primary rounded-[10px] hover:bg-surface-300 border border-surface-400/50 hover:-translate-y-[1px] active:translate-y-0',
        // Outline: White bg, light border, clean hover
        outline:
          'border border-[#E2E8F0] bg-white text-txt-primary rounded-[10px] hover:bg-[#F1F5F9] hover:border-[#CBD5E1] hover:-translate-y-[1px] active:translate-y-0',
        // Ghost: Text only
        ghost:
          'text-txt-secondary rounded-[10px] hover:text-txt-primary hover:bg-surface-100',
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
