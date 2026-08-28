'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CyberButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'wood' | 'outline' | 'ghost'
  children: ReactNode
}

export function CyberButton({
  variant = 'wood',
  className,
  children,
  ...props
}: CyberButtonProps) {
  const isWood = variant === 'wood'
  return (
    <button
      className={cn(
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40',
        variant === 'solid' &&
          'bg-primary text-primary-foreground hover:bg-foreground',
        isWood &&
          'border border-wood-foreground/15 text-wood-foreground shadow-[inset_0_1px_0_oklch(0.6_0.03_60/12%),0_10px_30px_-12px_rgba(0,0,0,0.9)] hover:border-accent-foreground/50',
        variant === 'outline' &&
          'border border-border bg-transparent text-foreground hover:border-accent-foreground hover:bg-accent/20',
        variant === 'ghost' &&
          'bg-transparent text-muted-foreground hover:text-foreground',
        className,
      )}
      style={
        isWood
          ? {
              backgroundImage: 'url(/wood-button.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
      {...props}
    >
      {/* corner ticks */}
      <span className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t border-current opacity-60" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-current opacity-60" />
      {/* sheen */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      {children}
    </button>
  )
}
