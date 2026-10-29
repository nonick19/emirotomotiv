import { ArrowUpRight, Check, Wrench } from 'lucide-react'
import { brands, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Brands() {
  const ref = useReveal()

  return (
    <section id="markalar" ref={ref} className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-x relative">
        {/* Başlık */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow">
              01 — Marka Uzmanlığı
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '60ms' }}
              className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Her markaya kendi
              <br className="hidden sm:block" /> protokolüyle yaklaşıyoruz.
            </h2>
          </div>
          <p
            data-reveal
            style={{ '--reveal-delay': '120ms' }}
            className="max-w-sm text-[14.5px] leading-relaxed text-steel-400 lg:pb-1.5"
          >
            Genel bir arıza okuyucu yerine, ilgili markanın orijinal
            diagnostik altyapısını kullanıyoruz. Doğru cihaz, doğru teşhis,
            doğru parça.
          </p>
        </div>

        {/* Marka kartları */}
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-5">
          {brands.map((brand, i) => (
            <article
              key={brand.id}
              data-reveal
              style={{ '--brand': brand.color, '--reveal-delay': `${i * 90}ms` }}
              className="brand-card group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-850 p-6 sm:p-7"
            >
              {/* Marka rengi üst çizgi */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[2px] opacity-70"
                style={{
                  background: `linear-gradient(to right, ${brand.color}, transparent 85%)`,
                }}
              />
              <div
                aria-hidden="true"
                className="brand-glow pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-0 blur-3xl transition-opacity duration-500"
                style={{ background: brand.color }}
              />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel-400">
                    Özel Servis
                  </p>
                  <h3 className="mt-2 font-display text-[26px] font-bold tracking-[-0.02em] text-white">
                    {brand.name}
                  </h3>
                </div>
                <span
                  className="shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10.5px] font-medium tracking-wide"
                  style={{
                    color: brand.color,
                    borderColor: `color-mix(in srgb, ${brand.color} 32%, transparent)`,
                    background: `color-mix(in srgb, ${brand.color} 9%, transparent)`,
                  }}
                >
                  {brand.tool}
                </span>
              </div>

              <p className="relative mt-4 text-[13.5px] leading-relaxed text-steel-400">
                {brand.description}
              </p>

              <ul className="relative mt-5 space-y-2.5 border-t border-white/[0.07] pt-5">
                {brand.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-[15px] w-[15px] shrink-0"
                      style={{ color: brand.color }}
                      strokeWidth={2.6}
                    />
                    <span className="text-[12.5px] leading-relaxed text-steel-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-auto pt-6">
                <a
                  href={whatsappLink(brand.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] px-4 py-3 transition-colors duration-300 hover:bg-white/[0.05]"
                  aria-label={`${brand.name} aracım için WhatsApp randevu`}
                >
                  <span className="flex items-center gap-2 text-[12px] font-medium text-steel-300">
                    <Wrench className="h-4 w-4" style={{ color: brand.color }} />
                    {brand.name} randevusu
                  </span>
                  <ArrowUpRight
                    className="brand-arrow h-4 w-4 text-steel-400 transition-all duration-300"
                    strokeWidth={2.2}
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <p
          data-reveal
          style={{ '--reveal-delay': '120ms' }}
          className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-steel-400"
        >
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-steel-500" />
          Emir Otomotiv, adı geçen markaların bağımsız özel servisidir; marka
          distribütörü veya yetkili servisi değildir.
        </p>
      </div>
    </section>
  )
}
