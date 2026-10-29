import { MapPin, MessageCircle, Navigation } from 'lucide-react'
import { serviceAreas, site, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function ServiceAreas() {
  const ref = useReveal()

  return (
    <section
      id="bolgeler"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute -left-32 bottom-0 h-[340px] w-[340px] rounded-full bg-signal/[0.04] blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <p data-reveal className="eyebrow">
              Hizmet Bölgemiz
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '60ms' }}
              className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Çorum merkez ve
              <br className="hidden sm:block" /> tüm ilçelerden gelen araçlara
              hizmet veriyoruz.
            </h2>

            <div
              data-reveal
              style={{ '--reveal-delay': '110ms' }}
              className="mt-6 space-y-4 text-[14.5px] leading-relaxed text-steel-400"
            >
              <p>
                Atölyemiz{' '}
                <strong className="font-semibold text-steel-300">
                  Çorum Sanayi Sitesi
                </strong>{' '}
                içinde, Mimarsinan Mahallesi Sanayi Sitesi Caddesi No: 136
                adresinde. Çorum merkezden ve Sanayi Sitesi'ne yakın
                mahallelerden gelen araçlar için ulaşım doğrudan; şehir
                merkezinden araçla kısa bir mesafede.
              </p>
              <p>
                Osmancık, Sungurlu, Alaca, İskilip gibi ilçelerden gelen
                müşterilerimiz için randevuyu önceden planlıyoruz. Böylece
                diagnostik kontrol ve bakım işlemleri aynı gün içinde
                tamamlanabiliyor, yolunuz iki kez gitmek zorunda kalmıyorsunuz.
              </p>
            </div>

            <div
              data-reveal
              style={{ '--reveal-delay': '170ms' }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {[serviceAreas.central, ...serviceAreas.districts].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] text-steel-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Konum kartı */}
          <div
            data-reveal
            style={{ '--reveal-delay': '140ms' }}
            className="rounded-2xl border border-white/10 bg-ink-850/80 p-5 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-signal/10 text-signal">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-[15px] font-semibold text-white">
                  Emir Otomotiv · Çorum Sanayi Sitesi
                </h3>
                <p className="mt-1 text-[13px] leading-relaxed text-steel-400">
                  {site.address.full}
                </p>
              </div>
            </div>

            <dl className="mt-5 space-y-2 border-t border-white/[0.07] pt-4">
              {site.hours.map((row) => (
                <div
                  key={row.days}
                  className="flex items-center justify-between gap-4 text-[12.5px]"
                >
                  <dt className="text-steel-400">{row.days}</dt>
                  <dd
                    className={
                      row.closed
                        ? 'font-medium text-steel-400'
                        : 'font-mono text-steel-300'
                    }
                  >
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={site.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-full"
              >
                <Navigation className="h-4 w-4" />
                Yol Tarifi Al
              </a>
              <a
                href={whatsappLink(
                  'Merhaba, Çorum dışından geliyorum. Randevu planlaması için yazıyorum.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full"
              >
                <MessageCircle className="h-4 w-4" />
                Randevu Planla
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
