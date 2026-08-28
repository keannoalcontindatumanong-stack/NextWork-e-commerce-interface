'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CyberButton } from './cyber-button'
import { cn } from '@/lib/utils'

function Field({
  label,
  id,
  ...props
}: {
  label: string
  id: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'h-10 rounded-sm border border-input bg-background/60 px-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/50 focus:border-accent-foreground focus:bg-background',
        )}
        {...props}
      />
    </div>
  )
}

export function CheckoutView() {
  const [paid, setPaid] = useState(false)

  if (paid) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-foreground/50 font-mono text-2xl text-accent-foreground">
          ✓
        </div>
        <h2 className="font-sans text-3xl font-semibold tracking-tight text-foreground text-glow">
          Order confirmed
        </h2>
        <p className="max-w-sm text-pretty text-sm text-muted-foreground">
          Your PSYCHE One is being prepared. A tracking link is on its way to
          your inbox — we&apos;ll keep the lights warm.
        </p>
        <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Ref · KN-{Math.random().toString(36).slice(2, 8).toUpperCase()}
        </div>
      </div>
    )
  }

  return (
    <div className="grid h-full grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_0.8fr]">
      {/* Payment form */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          setPaid(true)
        }}
        className="flex flex-col justify-center gap-4"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          Secure checkout · encrypted
        </div>
        <h2 className="font-sans text-2xl font-semibold tracking-tight text-foreground xl:text-3xl">
          Payment details
        </h2>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Field
              label="Email"
              id="email"
              type="email"
              required
              placeholder="you@domain.com"
            />
          </div>
          <div className="sm:col-span-2">
            <Field
              label="Card number"
              id="card"
              inputMode="numeric"
              required
              placeholder="4242 4242 4242 4242"
            />
          </div>
          <Field label="Expiry" id="exp" required placeholder="MM / YY" />
          <Field
            label="CVC"
            id="cvc"
            inputMode="numeric"
            required
            placeholder="123"
          />
          <div className="sm:col-span-2">
            <Field
              label="Name on card"
              id="name"
              required
              placeholder="Ada Lovelace"
            />
          </div>
        </div>

        <CyberButton type="submit" className="mt-1 w-full py-3">
          Pay $1,290
        </CyberButton>
      </form>

      {/* Order summary */}
      <aside className="hidden h-full flex-col justify-center lg:flex">
        <div className="cyber-corners rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md border border-border bg-background">
              <Image
                src="/product-device.png"
                alt="KENAI PSYCHE One"
                fill
                className="object-contain p-1.5"
              />
            </div>
            <div>
              <div className="text-sm font-medium text-foreground">
                PSYCHE One
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                Walnut · Qty 1
              </div>
            </div>
          </div>

          <dl className="flex flex-col gap-2 py-4 text-sm">
            {[
              ['Subtotal', '$1,290'],
              ['Shipping', 'Free'],
              ['Tax', '$103'],
            ].map(([k, v]) => (
              <div
                key={k}
                className="flex items-center justify-between text-muted-foreground"
              >
                <dt>{k}</dt>
                <dd className="font-mono text-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Total
            </span>
            <span className="font-mono text-2xl text-foreground">$1,393</span>
          </div>
        </div>
      </aside>
    </div>
  )
}
