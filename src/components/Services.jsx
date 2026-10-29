import { ArrowUpRight, Phone } from 'lucide-react'
import { services, site, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Services() {
  const ref = useReveal()
  const [featured, ...rest] = services

  return (
    <section
      id="hizmetler"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] bg-ink-900/40 py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-dots opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000,transparent)]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">
            02 — Hizmetlerimiz
          </p>
          <h2
            data-reveal
            style={{ '--reveal-delay': '60ms' }}
            className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
          >
            Rutin bakımdan karmaşık
            <br className="hidden sm:block" /> onarıma tek çatı altında.
          </h2>
          <p
            data-reveal
            style={{ '--reveal-delay': '110ms' }}
            className="mt-5 text-[14.5px] leading-relaxed text-steel-400"
          >
            Aracınızın ihtiyacı olan işlemi, gereksiz kalem eklemeden ve
            önceden bildirilen fiyatla yapıyoruz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-5">
          {/* Öne çıkan hizmet */}
          <article
            data-reveal
            className="service-card relative flex flex-col justify-between overflow-hidden rounded-3xl border border-signal/25 bg-gradient-to-br from-signal/[0.10] via-ink-850 to-ink-850 p-6 transition-all duration-400 sm:p-8 lg:row-span-2"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-signal/[0.14] blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="service-icon flex h-12 w-12 items-center justify-center rounded-2xl border border-signal/25 bg-signal/[0.10] text-signal transition-all duration-300">
                  <featured.icon className="h-[22px] w-[22px]" strokeWidth={1.9} />
                </span>
                <span className="rounded-full border border-signal/25 bg-signal/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-signal">
                  En çok tercih edilen
                </span>
              </div>

              <h3 className="mt-6 font-display text-[22px] font-semibold leading-snug tracking-[-0.02em] text-white sm:text-2xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-steel-400">
                {featured.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-1.5">
                {featured.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-lg border border-white/[0.09] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[10px] text-steel-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 border-t border-white/10 pt-5">
              <a
                href={whatsappLink(
                  'Merhaba, aracım için periyodik bakım randevusu almak istiyorum.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-full text-[13px]"
              >
                Bakım randevusu al
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
              <p className="mt-3 text-center text-[10.5px] text-steel-500">
                Fiyat, aracınıza göre önceden bildirilir.
              </p>
            </div>
          </article>

          {/* Diğer hizmetler */}
          {rest.map((service, i) => (
            <article
              key={service.id}
              data-reveal
              style={{ '--reveal-delay': `${(i + 1) * 70}ms` }}
              className="service-card group relative flex flex-col rounded-3xl border border-white/[0.08] bg-ink-850/70 p-6 transition-all duration-400"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-steel-300 transition-all duration-300">
                  <service.icon className="h-5 w-5" strokeWidth={1.9} />
                </span>
                <span className="font-mono text-[10px] text-steel-500/70">
                  0{i + 2}
                </span>
              </div>

              <h3 className="mt-5 font-display text-[16.5px] font-semibold leading-snug text-white">
                {service.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] leading-relaxed text-steel-400">
                {service.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-1.5 pt-1">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-white/[0.035] px-2 py-1 font-mono text-[9.5px] text-steel-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Alt CTA bandı */}
        <div
          data-reveal
          className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.025] px-5 py-4 sm:flex-row sm:items-center sm:px-6"
        >
          <p className="text-[13px] leading-relaxed text-steel-400">
            Listede bulamadığınız bir işlem mi var?{' '}
            <span className="text-steel-300">Aracınızı anlatın, birlikte bakalım.</span>
          </p>
          <a
            href={site.phone.href}
            className="link-arrow shrink-0 text-[12.5px] hover:text-signal"
          >
            <Phone className="h-4 w-4" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
