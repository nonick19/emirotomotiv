import { useEffect, useRef, useState } from 'react'

/**
 * Basit IntersectionObserver tabanlı görünme animasyonu.
 * Dönen ref'i hedef elemana (veya `data-reveal` içeren kapsayıcıya) bağlayın.
 */
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const targets = root.querySelectorAll('[data-reveal]')
    if (!targets.length) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    )

    targets.forEach((el) => observer.observe(el))

    // Güvenlik ağı: görünür alandaki öğeler, observer herhangi bir nedenle
    // tetiklenmezse (arka planda açılan sekme vb.) 1,2 sn sonra görünür olsun.
    const guard = window.setTimeout(() => {
      targets.forEach((el) => {
        if (el.classList.contains('is-visible')) return
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-visible')
        }
      })
    }, 1200)

    return () => {
      window.clearTimeout(guard)
      observer.disconnect()
    }
  }, [])

  return ref
}

/** Sayfa kaydırma konumunu (y scroll) döner. */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

/** Navigasyonda aktif bölümü takip eder. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [ids])

  return active
}
