import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
} from 'lucide-react'
import { site, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section
      id="iletisim"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-whatsapp/[0.05] blur-[130px]" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] rounded-full bg-signal/[0.04] blur-[110px]" />
      </div>

      <div className="container-x relative">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">
            06 — İletişim & Konum
          </p>
          <h2
            data-reveal
            style={{ '--reveal-delay': '60ms' }}
            className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
          >
            Çorum Sanayi Sitesi'nde
            <br className="hidden sm:block" /> sizi bekliyoruz.
          </h2>
          <p
            data-reveal
            style={{ '--reveal-delay': '110ms' }}
            className="mt-5 text-[14.5px] leading-relaxed text-steel-400"
          >
            Telefonla arayın, WhatsApp'tan yazın veya doğrudan atölyeye uğrayın.
            Randevulu gelen araçlar için işlem süresi kısalır.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-5">
          {/* Sol: iletişim kartları */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Telefon */}
            <a
              data-reveal
              href={site.phone.href}
              className="group relative overflow-hidden rounded-2xl border border-signal/25 bg-gradient-to-br from-signal/[0.10] to-ink-850 p-5 transition-colors duration-300 hover:border-signal/45 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-signal/80">
                    Telefon · Hemen ara
                  </p>
                  <p className="mt-2 font-display text-[23px] font-bold tracking-tight text-white sm:text-[26px]">
                    {site.phone.display}
                  </p>
                  <p className="mt-1.5 text-[12px] text-steel-400">
                    {site.owner} ile doğrudan görüşün
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal text-ink-950 transition-transform duration-300 group-hover:scale-105">
                  <Phone className="h-5 w-5" strokeWidth={2.3} />
                </span>
              </div>
            </a>

            {/* Adres */}
            <div
              data-reveal
              style={{ '--reveal-delay': '70ms' }}
              className="rounded-2xl border border-white/[0.08] bg-ink-850/70 p-5 sm:p-6"
            >
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-steel-300">
                  <MapPin className="h-4 w-4" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-steel-400">
                    Adres
                  </p>
                  <address className="mt-1.5 text-[13px] not-italic leading-relaxed text-steel-300">
                    {site.address.neighborhood}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}
                  </address>
                  <a
                    href={site.maps.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-signal transition-opacity hover:opacity-80"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Yol tarifi al
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Çalışma saatleri */}
            <div
              data-reveal
              style={{ '--reveal-delay': '140ms' }}
              className="rounded-2xl border border-white/[0.08] bg-ink-850/70 p-5 sm:p-6"
            >
              <div className="flex items-start gap-3.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.035] text-steel-300">
                  <Clock className="h-4 w-4" strokeWidth={2} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-steel-400">
                    Çalışma saatleri
                  </p>
                  <dl className="mt-2 space-y-1.5">
                    {site.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-baseline justify-between gap-4 text-[12.5px]"
                      >
                        <dt className="text-steel-400">{row.days}</dt>
                        <dd
                          className={`font-mono text-[11.5px] tabular-nums ${
                            row.closed ? 'text-citroen/90' : 'text-steel-300'
                          }`}
                        >
                          {row.time}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              data-reveal
              style={{ '--reveal-delay': '210ms' }}
              href={whatsappLink(
                'Merhaba, aracım için servis randevusu almak istiyorum. Aracım: ',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 rounded-2xl bg-whatsapp p-5 text-ink-950 transition-transform duration-300 hover:-translate-y-0.5 sm:p-6"
            >
              <div>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-950/60">
                  WhatsApp randevu
                </p>
                <p className="mt-1 font-display text-[16px] font-bold leading-snug">
                  Aracınızı yazın, uygun saati ayarlayalım.
                </p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink-950 text-whatsapp">
                <WhatsAppGlyph className="h-5 w-5" />
              </span>
            </a>
          </div>

          {/* Sağ: harita */}
          <div
            data-reveal
            style={{ '--reveal-delay': '100ms' }}
            className="relative min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-ink-850 lg:min-h-full"
          >
            <iframe
              title="Emir Otomotiv konumu — Çorum Sanayi Sitesi"
              src={site.maps.embed}
              className="absolute inset-0 h-full w-full grayscale-[0.35] contrast-[1.05]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            {/* Harita üzeri bilgi kartı */}
            <div className="pointer-events-none absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
              <div className="pointer-events-auto flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-ink-950/90 px-4 py-3.5 backdrop-blur-xl">
                <div className="min-w-0">
                  <p className="font-display text-[13.5px] font-semibold text-white">
                    Emir Otomotiv
                  </p>
                  <p className="mt-0.5 truncate font-mono text-[10px] text-steel-400">
                    Çorum Sanayi Sitesi Cd. No: 136
                  </p>
                </div>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary min-h-9 shrink-0 rounded-full px-4 text-[11.5px]"
                >
                  <Navigation className="h-3.5 w-3.5" strokeWidth={2.4} />
                  Git
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsAppGlyph({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.02 2.75 1.17 2.94c.15.19 2.01 3.2 4.89 4.36 2.87 1.16 2.87.77 3.39.72.51-.05 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Z" />
    </svg>
  )
}
