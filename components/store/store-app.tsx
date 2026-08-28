'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { HeroView } from './hero-view'
import { ProductView } from './product-view'
import { CheckoutView } from './checkout-view'

type View = 'home' | 'product' | 'checkout'

const steps: { id: View; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'product', label: 'Product' },
  { id: 'checkout', label: 'Checkout' },
]

export function StoreApp() {
  const [view, setView] = useState<View>('home')

  return (
    <main className="relative flex h-dvh flex-col overflow-hidden bg-background">
      {/* ambient background layers */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/bg-charcoal.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'url(/wood-texture.png)',
          backgroundSize: 'cover',
          mixBlendMode: 'overlay',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 0%, transparent 40%, oklch(0.1 0.004 60 / 70%) 100%)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-border px-5 py-3.5 sm:px-8">
        <button
          onClick={() => setView('home')}
          className="flex items-center gap-2.5"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-sm border border-accent-foreground/40 bg-accent/20 font-mono text-[11px] text-accent-foreground">
            K
          </span>
          <span className="font-mono text-sm uppercase tracking-[0.4em] text-foreground">
            KENAI
          </span>
        </button>

        {/* Step nav */}
        <nav className="flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur">
          {steps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setView(s.id)}
              className={cn(
                'flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] transition-colors',
                view === s.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <span className="opacity-60">{`0${i + 1}`}</span>
              <span className="hidden sm:inline">{s.label}</span>
            </button>
          ))}
        </nav>

        <div className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block">
          agent · online
        </div>
      </header>

      {/* View area */}
      <section className="relative z-10 min-h-0 flex-1 px-5 py-5 sm:px-8 sm:py-6">
        <div key={view} className="h-full animate-in fade-in duration-500">
          {view === 'home' && (
            <HeroView onEnter={() => setView('product')} />
          )}
          {view === 'product' && (
            <ProductView onBuy={() => setView('checkout')} />
          )}
          {view === 'checkout' && <CheckoutView />}
        </div>
      </section>

      {/* Footer status bar */}
      <footer className="relative z-10 flex shrink-0 items-center justify-between border-t border-border px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
        <span>© KENAI · PSYCHE One</span>
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-foreground" />
          secure session
        </span>
      </footer>
    </main>
  )
}
