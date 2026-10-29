import {
  CalendarCheck,
  FileCheck2,
  KeyRound,
  PhoneCall,
  ScanLine,
} from 'lucide-react'
import { processSteps } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const icons = {
  phone: PhoneCall,
  scan: ScanLine,
  file: FileCheck2,
  key: KeyRound,
}

export default function Process() {
  const ref = useReveal()

  return (
    <section
      id="surec"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900/40 py-20 sm:py-24 lg:py-28"
    >
      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p data-reveal className="eyebrow">
              04 — Çalışma Sürecimiz
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '60ms' }}
              className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Dört adımda,
              <br className="hidden sm:block" /> sürprizsiz servis.
            </h2>
          </div>
          <p
            data-reveal
            style={{ '--reveal-delay': '110ms' }}
            className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-steel-400 lg:mb-1.5"
          >
            <CalendarCheck className="h-4 w-4 text-signal" />
            Randevulu çalışma
          </p>
        </div>

        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-4">
          {processSteps.map((step, i) => {
            const Icon = icons[step.icon] ?? CalendarCheck
            return (
              <li
                key={step.step}
                data-reveal
                style={{ '--reveal-delay': `${i * 80}ms` }}
                className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-ink-950/60 p-5 transition-colors duration-300 hover:border-white/[0.16]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-[30px] font-bold leading-none tracking-tight text-stroke transition-all duration-300 group-hover:[-webkit-text-stroke:1px_rgba(255,194,26,0.55)]">
                    {step.step}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.04] text-steel-400 transition-colors duration-300 group-hover:text-signal">
                    <Icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>

                <h3 className="mt-5 font-display text-[15px] font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-steel-400">
                  {step.description}
                </p>

                {i < processSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-2 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent lg:block"
                  />
                )}
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
