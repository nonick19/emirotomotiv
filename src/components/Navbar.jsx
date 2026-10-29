import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import Logo from './Logo.jsx'
import { navLinks, site, whatsappLink } from '../data/site.js'
import { useActiveSection, useScrolled } from '../hooks/useReveal.js'

const sectionIds = ['markalar', 'hizmetler', 'neden-biz', 'surec', 'sss', 'iletisim']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(20)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const mobileNavVisible = open

  return (
    <>
      <a href="#main" className="skip-link">
        İçeriğe geç
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/10 bg-ink-950/90 backdrop-blur-xl'
            : 'border-b border-transparent bg-gradient-to-b from-ink-950/80 to-transparent'
        }`}
      >
        <nav
          className="container-x flex h-[72px] items-center justify-between gap-6 lg:h-[84px]"
          aria-label="Ana menü"
        >
          {/* Marka */}
          <a href="#top" className="group flex shrink-0 items-center gap-3">
            <Logo className="h-10 w-10 transition-transform duration-500 group-hover:-translate-y-0.5 lg:h-11 lg:w-11" />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-bold tracking-tight text-white lg:text-[19px]">
                Emir Otomotiv
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-steel-500 lg:text-[10px]">
                Özel Servis · Çorum
              </span>
            </span>
          </a>

          {/* Masaüstü menü */}
          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = active === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative rounded-full px-4 py-2.5 text-[13.5px] font-medium transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-steel-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px bg-signal transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Masaüstü CTA */}
          <div className="hidden items-center gap-2.5 xl:flex">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline min-h-10 px-5 text-[13px]"
            >
              WhatsApp
            </a>
            <a href={site.phone.href} className="btn btn-primary min-h-10 px-5 text-[13px]">
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              {site.phone.display}
            </a>
          </div>

          {/* Mobil menü düğmesi */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition-colors hover:bg-white/10 xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobil menü paneli */}
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-white/10 bg-ink-950/98 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-out xl:hidden ${
            mobileNavVisible ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="container-x flex flex-col py-4">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.06] py-4 text-[15px] font-medium text-steel-300 transition-colors hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-steel-500">
                      0{i + 1}
                    </span>
                    {link.label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-steel-500" />
                </a>
              </li>
            ))}
          </ul>

          <div className="container-x grid grid-cols-2 gap-2.5 pb-6">
            <a
              href={site.phone.href}
              className="btn btn-primary text-[12.5px]"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-4 w-4" strokeWidth={2.4} />
              Hemen Ara
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline text-[12.5px]"
              onClick={() => setOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Mobilde yapışkan hızlı erişim çubuğu */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/95 px-3 pb-[max(0.6rem,env(safe-area-inset-bottom))] pt-2.5 backdrop-blur-xl xl:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={site.phone.href}
            className="btn btn-primary min-h-12 rounded-2xl text-[13px]"
          >
            <Phone className="h-[17px] w-[17px]" strokeWidth={2.5} />
            Hemen Ara
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn min-h-12 rounded-2xl bg-whatsapp/[0.14] text-[13px] text-[#4be08a] ring-1 ring-inset ring-whatsapp/30 hover:bg-whatsapp/20"
          >
            <WhatsAppGlyph />
            WhatsApp Randevu
          </a>
        </div>
      </div>
    </>
  )
}

function WhatsAppGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.97-.94-.27-.1-.46-.15-.66.15-.19.29-.75.93-.92 1.12-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.56-.47-.49-.65-.5h-.55c-.19 0-.5.07-.76.36-.26.29-1 .97-1 2.37s1.02 2.75 1.17 2.94c.15.19 2.01 3.2 4.89 4.36 2.87 1.16 2.87.77 3.39.72.51-.05 1.66-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.34Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 5.83 2.42 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Z" />
    </svg>
  )
}
