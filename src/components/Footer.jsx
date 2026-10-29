import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { brands, navLinks, site, whatsappLink } from '../data/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.08] bg-ink-950 pb-28 pt-14 xl:pb-14">
      <div className="container-x">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8">
          {/* Marka */}
          <div>
            <a href="#top" className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[17px] font-bold tracking-tight text-white">
                  Emir Otomotiv
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-steel-500">
                  Özel Servis · Çorum
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-[12.5px] leading-relaxed text-steel-500">
              Renault, Citroën ve Ford araçlarda markaya özel teşhis, periyodik
              bakım ve mekanik onarım. Mert Akburu güvencesiyle.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em] text-steel-400">
              <span className="h-1.5 w-1.5 rounded-full bg-whatsapp" />
              Randevu için açık
            </p>
          </div>

          {/* Menü */}
          <nav aria-label="Alt menü">
            <h2 className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel-500">
              Sayfalar
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12.5px] text-steel-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Markalar */}
          <div>
            <h2 className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel-500">
              Uzmanlık
            </h2>
            <ul className="mt-4 space-y-2.5">
              {brands.map((brand) => (
                <li key={brand.id}>
                  <a
                    href="#markalar"
                    className="group inline-flex items-center gap-2 text-[12.5px] text-steel-400 transition-colors hover:text-white"
                  >
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ background: brand.color }}
                    />
                    {brand.name} Özel Servis
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h2 className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-steel-500">
              İletişim
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={site.phone.href}
                  className="inline-flex items-start gap-2.5 text-[12.5px] text-steel-300 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                  <span className="font-mono tracking-tight">
                    {site.phone.display}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.maps.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 text-[12.5px] leading-relaxed text-steel-400 transition-colors hover:text-white"
                >
                  <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-signal" />
                  <span>
                    Mimarsinan Mah.
                    <br />
                    Çorum Sanayi Sitesi Cd. No: 136
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-signal transition-opacity hover:opacity-80"
                >
                  WhatsApp randevu
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Yasal */}
        <div className="mt-12 border-t border-white/[0.07] pt-6">
          <p className="text-[10.5px] leading-relaxed text-steel-500">
            Emir Otomotiv, adı geçen markaların bağımsız özel servisidir. Renault,
            Citroën ve Ford markalarının distribütörü, yetkili satıcısı veya
            yetkili servisi değildir. Marka adları yalnızca hizmet verilen araç
            gruplarını belirtmek amacıyla kullanılmıştır.
          </p>

          <div className="mt-5 flex flex-col gap-2 border-t border-white/[0.05] pt-5 text-[10.5px] text-steel-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} Emir Otomotiv. Tüm hakları saklıdır.
            </p>
            <p className="font-mono tracking-wide text-steel-500/80">
              Çorum · Türkiye
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
