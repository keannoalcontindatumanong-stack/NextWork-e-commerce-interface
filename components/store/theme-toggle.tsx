'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggleTheme}
      className={cn(
        'group relative flex h-8 w-8 items-center justify-center border border-border bg-card/60 text-muted-foreground backdrop-blur transition-colors hover:text-foreground',
        'cyber-corners rounded-sm',
      )}
    >
      {/* Render icons only after mount to avoid hydration mismatch */}
      {mounted && (
        <>
          <Sun
            className={cn(
              'h-3.5 w-3.5 transition-all duration-300',
              isDark
                ? 'scale-0 rotate-90 opacity-0'
                : 'scale-100 rotate-0 opacity-100',
            )}
          />
          <Moon
            className={cn(
              'absolute h-3.5 w-3.5 transition-all duration-300',
              isDark
                ? 'scale-100 rotate-0 opacity-100'
                : 'scale-0 -rotate-90 opacity-0',
            )}
          />
        </>
      )}
    </button>
  )
}
