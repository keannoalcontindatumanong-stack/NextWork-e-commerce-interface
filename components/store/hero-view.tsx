'use client'

import Image from 'next/image'
import { CyberButton } from './cyber-button'

export function HeroView({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      {/* Left: copy */}
      <div className="flex flex-col justify-center gap-5">
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent-foreground" />
          Ambient intelligence · v1.0
        </div>

        <h1 className="text-balance font-sans text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-glow sm:text-5xl xl:text-6xl">
          A calmer way to
          <br />
          think with a machine.
        </h1>

        <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
          PSYCHE One by KENAI is a desk-bound agent wrapped in dark walnut and
          brushed ash. It listens, reasons, and acts — quietly, in the corner of
          the room you actually like being in.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <CyberButton onClick={onEnter}>Explore the device</CyberButton>
          <CyberButton variant="outline" onClick={onEnter}>
            Buy now
          </CyberButton>
        </div>

        <dl className="mt-4 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
          {[
            ['Latency', '120ms'],
            ['On-device', '100%'],
            ['Warranty', '5 yrs'],
          ].map(([k, v]) => (
            <div key={k} className="bg-card px-4 py-3">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {k}
              </dt>
              <dd className="mt-1 font-mono text-lg text-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Right: device on wood pedestal */}
      <div className="relative hidden h-full items-center justify-center lg:flex">
        <div
          className="cyber-corners relative flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-xl border border-border"
          style={{
            backgroundImage:
              'radial-gradient(120% 120% at 50% 20%, oklch(0.24 0.02 55) 0%, oklch(0.14 0.004 60) 70%)',
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <Image
            src="/product-device.png"
            alt="KENAI PSYCHE One ambient AI terminal in dark walnut and brushed ash"
            width={420}
            height={420}
            priority
            className="relative z-10 h-auto w-[78%] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
          />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            PSYCHE · ONE
          </span>
        </div>
      </div>
    </div>
  )
}
