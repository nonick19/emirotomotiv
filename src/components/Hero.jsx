import { ArrowRight, BadgeCheck, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { site, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

const stats = [
  { value: '3', label: 'Uzman marka' },
  { value: '100%', label: 'Şeffaf fiyat' },
  { value: 'Çorum', label: 'Yerel servis' },
]

export default function Hero() {
  const ref = useReveal()

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 pt-[calc(var(--header-h)+4px)]"
    >
      {/* Arka plan katmanları */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid mask-radial opacity-[0.55]" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-signal/[0.055] blur-[130px]" />
        <div className="absolute -right-32 top-40 h-[420px] w-[420px] rounded-full bg-ford/[0.10] blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-citroen/[0.08] blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-14 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:py-24 xl:gap-16">
          {/* Metin kolonu */}
          <div>
            <div
              data-reveal
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.035] py-1.5 pl-1.5 pr-4 backdrop-blur"
            >
              <span className="flex items-center gap-1.5 rounded-full bg-signal px-2.5 py-1 font-mono text-[9.5px] font-bold uppercase tracking-[0.12em] text-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-ink-950/70" />
                Çorum
              </span>
              <span className="text-[11.5px] font-medium tracking-wide text-steel-300">
                Renault · Citroën · Ford Özel Servis
              </span>
            </div>

            <h1
              data-reveal
              style={{ '--reveal-delay': '70ms' }}
              className="mt-6 text-[clamp(2.15rem,7.4vw,4.15rem)] font-bold leading-[1.03] tracking-[-0.035em]"
            >
              Renault, Citroën ve Ford
              <br className="hidden sm:block" />{' '}
              araçlarınız için{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Çorum'da</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1.5 z-0 h-[0.22em] rounded-sm bg-signal/85 sm:bottom-2"
                />
              </span>{' '}
              güvenilir özel servis.
            </h1>

            <p
              data-reveal
              style={{ '--reveal-delay': '140ms' }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-steel-400 sm:text-base"
            >
              Markaya özel orijinal diagnostik cihazlar, üretici standartlarında
              periyodik bakım ve{' '}
              <span className="font-medium text-steel-300">Mert Akburu</span>{' '}
              güvencesiyle garantili işçilik. Aracınızı yetkili servis
              titizliğinde, özel servis samimiyetiyle teslim ediyoruz.
            </p>

            {/* CTA'lar */}
            <div
              data-reveal
              style={{ '--reveal-delay': '210ms' }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a href={site.phone.href} className="btn btn-primary group w-full sm:w-auto">
                <Phone className="h-[17px] w-[17px]" strokeWidth={2.4} />
                Hemen Ara
                <span className="font-mono text-[11px] font-medium tracking-wide opacity-70">
                  {site.phone.display}
                </span>
              </a>
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline group w-full sm:w-auto"
              >
                <MapPin className="h-[17px] w-[17px]" />
                Yol Tarifi Al
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div
              data-reveal
              style={{ '--reveal-delay': '270ms' }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12px] text-steel-400"
            >
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-signal" />
                Garantili işçilik
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="inline-flex items-center gap-1.5">
                <BadgeCheck className="h-4 w-4 text-signal" />
                Onaysız işlem yok
              </span>
              <span className="h-3 w-px bg-white/15" />
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-steel-300 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white hover:decoration-signal"
              >
                WhatsApp'tan yazın
              </a>
            </div>

            <dl
              data-reveal
              style={{ '--reveal-delay': '330ms' }}
              className="mt-10 grid max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06]"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="bg-ink-950/90 px-4 py-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.15em] text-steel-500">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold text-white sm:text-xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Diagnostik panel görseli */}
          <div
            data-reveal
            style={{ '--reveal-delay': '180ms' }}
            className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
          >
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-b from-white/[0.07] to-transparent blur-2xl" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/[0.13] bg-ink-900/90 shadow-[0_50px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm">
              {/* Panel başlığı */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-citroen/80" />
                  <span className="h-2 w-2 rounded-full bg-signal/80" />
                  <span className="h-2 w-2 rounded-full bg-whatsapp/70" />
                </div>
                <span className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-steel-500">
                  Diagnostics Online
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9.5px] text-whatsapp">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-whatsapp" />
                  READY
                </span>
              </div>

              <div className="scanline p-5 sm:p-6">
                {/* Gösterge + araç */}
                <div className="grid grid-cols-[auto_1fr] items-center gap-5">
                  <Gauge />

                  <div className="min-w-0">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel-500">
                      Sistem durumu
                    </p>
                    <p className="mt-1 font-display text-[19px] font-semibold leading-tight text-white">
                      Tüm modüller
                      <br />
                      kontrol edildi
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {['Motor', 'ABS', 'Klima', 'Şanzıman'].map((m) => (
                        <span
                          key={m}
                          className="rounded-md bg-whatsapp/[0.12] px-2 py-1 font-mono text-[9.5px] text-[#5fe397] ring-1 ring-inset ring-whatsapp/20"
                        >
                          {m} ✓
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Canlı veri satırları */}
                <div className="mt-5 space-y-2.5 rounded-xl border border-white/[0.07] bg-ink-950/60 p-4">
                  {[
                    { label: 'Renault CLIP', value: 'Bağlı', pct: 100, color: '#ffcc33' },
                    { label: 'Citroën DiagBox', value: 'Hazır', pct: 92, color: '#ef4a3d' },
                    { label: 'Ford IDS / FDRS', value: 'Hazır', pct: 96, color: '#4b83f7' },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between font-mono text-[10px]">
                        <span className="text-steel-400">{row.label}</span>
                        <span className="text-steel-500">{row.value}</span>
                      </div>
                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/[0.07]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${row.pct}%`,
                            background: row.color,
                            opacity: 0.85,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-signal/20 bg-signal/[0.06] px-4 py-3">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-signal/80">
                      Mert Akburu
                    </p>
                    <p className="mt-0.5 text-[12.5px] font-medium text-white">
                      Servis danışmanınız
                    </p>
                  </div>
                  <a
                    href={site.phone.href}
                    aria-label="Servisi ara"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-signal text-ink-950 transition-transform hover:scale-105"
                  >
                    <Phone className="h-4 w-4" strokeWidth={2.5} />
                  </a>
                </div>
              </div>
            </div>

            {/* Panel altı ölçüm şeridi — normal akışta, hiçbir metnin üzerine binmez */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-white/10 bg-ink-850/80 px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel-400">
                  Ortalama teşhis
                </p>
                <p className="mt-1 font-display text-[15px] font-semibold leading-none text-white">
                  30 dakika
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-ink-850/80 px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-steel-400">
                  Garanti
                </p>
                <p className="mt-1 font-display text-[15px] font-semibold leading-none text-white">
                  Parça + işçilik
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Marka şeridi */}
        <div className="relative border-t border-white/[0.08] py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.2em] text-steel-500">
              Uzmanlık alanımız
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { name: 'RENAULT', color: '#ffcc33' },
                { name: 'CITROËN', color: '#ef4a3d' },
                { name: 'FORD', color: '#4b83f7' },
              ].map((b) => (
                <a
                  key={b.name}
                  href="#markalar"
                  className="group flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-100 sm:opacity-80"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{ background: b.color }}
                  />
                  <span className="font-display text-[15px] font-semibold tracking-[0.16em] text-steel-300 transition-colors group-hover:text-white">
                    {b.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Gauge() {
  return (
    <div className="relative h-[104px] w-[104px] shrink-0">
      <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
        <circle
          cx="70"
          cy="70"
          r="58"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="9"
          strokeDasharray="364.42"
          strokeDashoffset="-44"
        />
        <circle
          cx="70"
          cy="70"
          r="58"
          fill="none"
          stroke="url(#gauge-grad)"
          strokeWidth="9"
          strokeLinecap="round"
          className="gauge-arc"
        />
        <defs>
          <linearGradient id="gauge-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffd45c" />
            <stop offset="100%" stopColor="#ffb300" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-display text-[22px] font-bold leading-none text-white">
          88
        </span>
        <span className="mt-1 font-mono text-[8px] uppercase tracking-[0.14em] text-steel-500">
          Sağlık
        </span>
      </div>
    </div>
  )
}
