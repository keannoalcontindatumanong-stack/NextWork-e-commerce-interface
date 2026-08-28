'use client'

import Image from 'next/image'
import { CyberButton } from './cyber-button'

const specs: [string, string][] = [
  ['Chassis', 'Walnut + brushed ash'],
  ['Compute', 'Neural core · 40 TOPS'],
  ['Audio', '6-mic beamforming array'],
  ['Link', 'Wi-Fi 6E · BT 5.3'],
]

export function ProductView({ onBuy }: { onBuy: () => void }) {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-6 lg:grid-cols-2">
      {/* Left: device */}
      <div className="relative flex h-full items-center justify-center">
        <div
          className="cyber-corners relative flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-xl border border-border"
          style={{
            backgroundImage:
              'radial-gradient(120% 120% at 50% 20%, oklch(0.26 0.03 55) 0%, oklch(0.14 0.004 60) 72%)',
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <Image
            src="/product-device.png"
            alt="KENAI PSYCHE One ambient AI terminal"
            width={460}
            height={460}
            priority
            className="relative z-10 h-auto w-[80%] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* Right: details */}
      <div className="flex flex-col justify-center gap-4">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          SKU · KN-PSY-01 / In stock
        </div>

        <h2 className="text-balance font-sans text-3xl font-semibold tracking-tight text-foreground xl:text-4xl">
          PSYCHE One
        </h2>

        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          An agent you can live with. Solid walnut flanks warm the room while a
          brushed-ash face holds the reasoning core. No screens to stare at —
          just a soft light that tells you it&apos;s thinking.
        </p>

        <dl className="grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border">
          {specs.map(([k, v]) => (
            <div key={k} className="bg-card px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{v}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-2 flex items-end justify-between border-t border-border pt-4">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Price
            </div>
            <div className="font-mono text-3xl text-foreground">$1,290</div>
          </div>
          <CyberButton onClick={onBuy} className="px-8 py-3">
            Buy now →
          </CyberButton>
        </div>
      </div>
    </div>
  )
}
