import {
  FileCheck2,
  Quote,
  ReceiptText,
  ShieldCheck,
  Timer,
  Users,
} from 'lucide-react'
import { site, trustPoints, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const icons = {
  receipt: ReceiptText,
  users: Users,
  shield: ShieldCheck,
  timer: Timer,
}

export default function WhyUs() {
  const ref = useReveal()

  return (
    <section id="neden-biz" ref={ref} className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-signal/[0.045] blur-[130px]" />

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Sol kolon */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p data-reveal className="eyebrow">
              03 — Neden Emir Otomotiv?
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '60ms' }}
              className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Güven, söylemle
              <br className="hidden sm:block" /> değil, süreçle kurulur.
            </h2>
            <p
              data-reveal
              style={{ '--reveal-delay': '110ms' }}
              className="mt-5 max-w-md text-[14.5px] leading-relaxed text-steel-400"
            >
              Çorum Sanayi Sitesi'nde, aracınızı teslim ettiğiniz andan geri
              aldığınız ana kadar her adımı açık şekilde yürütüyoruz.
            </p>

            {/* Usta kartı */}
            <div
              data-reveal
              style={{ '--reveal-delay': '170ms' }}
              className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-ink-850"
            >
              <div className="flex items-center gap-4 border-b border-white/[0.07] p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-signal font-display text-[17px] font-bold text-ink-950">
                  MA
                </div>
                <div>
                  <p className="font-display text-[15px] font-semibold text-white">
                    {site.owner}
                  </p>
                  <p className="mt-0.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-steel-500">
                    {site.ownerTitle}
                  </p>
                </div>
              </div>
              <div className="relative p-5">
                <Quote className="absolute right-4 top-4 h-7 w-7 text-white/[0.07]" />
                <p className="relative pr-8 text-[13px] leading-relaxed text-steel-400">
                  “Bizim için işin bitmesi, aracın sorunsuz teslim edilmesiyle
                  başlar. Yaptığımız her işlemin arkasında dururuz.”
                </p>
              </div>
            </div>
          </div>

          {/* Sağ kolon: güven blokları */}
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {trustPoints.map((point, i) => {
              const Icon = icons[point.icon] ?? ShieldCheck
              return (
                <article
                  key={point.id}
                  data-reveal
                  style={{ '--reveal-delay': `${i * 80}ms` }}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-850/60 p-5 transition-colors duration-400 hover:border-white/[0.16] hover:bg-ink-850 sm:p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-signal">
                    <Icon className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <h3 className="mt-5 font-display text-[15.5px] font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-steel-400">
                    {point.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-0 h-px scale-x-0 bg-gradient-to-r from-signal/60 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              )
            })}

            {/* Garanti bandı */}
            <div
              data-reveal
              style={{ '--reveal-delay': '320ms' }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-5 sm:col-span-2 sm:p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-signal/25 bg-signal/[0.09] text-signal">
                    <FileCheck2 className="h-5 w-5" strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-[15.5px] font-semibold text-white">
                      Her işlemde yazılı garanti
                    </h3>
                    <p className="mt-1.5 max-w-sm text-[12.5px] leading-relaxed text-steel-400">
                      Parça ve işçilik detayları, garanti süresi ve teslim
                      tarihi servis formunda yer alır.
                    </p>
                  </div>
                </div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline shrink-0 self-start text-[12.5px] sm:self-auto"
                >
                  Bilgi alın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
