import { MessageCircleQuestion, Phone, Plus } from 'lucide-react'
import { faqs, site, whatsappLink } from '../data/site.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Faq() {
  const ref = useReveal()

  return (
    <section
      id="sss"
      ref={ref}
      className="relative overflow-hidden border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_55%_60%_at_50%_50%,#000,transparent)]" />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          {/* Sol kolon */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p data-reveal className="eyebrow">
              05 — Sıkça Sorulanlar
            </p>
            <h2
              data-reveal
              style={{ '--reveal-delay': '60ms' }}
              className="mt-4 text-[clamp(1.75rem,4.6vw,2.9rem)] font-bold leading-[1.08] tracking-[-0.03em]"
            >
              Aklınızda soru
              <br className="hidden sm:block" /> kalmasın.
            </h2>
            <p
              data-reveal
              style={{ '--reveal-delay': '110ms' }}
              className="mt-5 max-w-sm text-[14.5px] leading-relaxed text-steel-400"
            >
              En sık duyduğumuz soruları burada topladık. Cevabını bulamadığınız
              bir konu olursa doğrudan yazabilirsiniz.
            </p>

            <div
              data-reveal
              style={{ '--reveal-delay': '170ms' }}
              className="mt-8 rounded-2xl border border-white/10 bg-ink-850/70 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-signal/25 bg-signal/[0.09] text-signal">
                <MessageCircleQuestion className="h-[18px] w-[18px]" strokeWidth={2} />
              </span>
              <p className="mt-4 text-[13px] leading-relaxed text-steel-400">
                Sorunuz listede yok mu? Aracınızı ve şikâyetinizi kısaca yazın,
                aynı gün dönüş yapalım.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary min-h-10 flex-1 px-4 text-[12px]"
                >
                  WhatsApp'tan sor
                </a>
                <a
                  href={site.phone.href}
                  className="btn btn-outline min-h-10 flex-1 px-4 text-[12px]"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Ara
                </a>
              </div>
            </div>
          </div>

          {/* Sağ kolon: akordeon */}
          <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
            {faqs.map((faq, i) => (
              <details
                key={faq.question}
                data-reveal
                style={{ '--reveal-delay': `${i * 60}ms` }}
                className="group"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 py-5 transition-colors duration-300 hover:text-white [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start gap-3.5">
                    <span className="mt-0.5 font-mono text-[10.5px] text-steel-500">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[14.5px] font-medium leading-snug text-steel-300 transition-colors duration-300 group-open:text-white group-hover:text-white sm:text-[15.5px]">
                      {faq.question}
                    </span>
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/12 text-steel-400 transition-all duration-300 group-open:rotate-45 group-open:border-signal/40 group-open:bg-signal/10 group-open:text-signal">
                    <Plus className="h-4 w-4" strokeWidth={2.2} />
                  </span>
                </summary>
                <div className="pb-6 pl-[30px] pr-10">
                  <p className="text-[13px] leading-relaxed text-steel-400">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
