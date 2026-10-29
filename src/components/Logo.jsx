import { useId } from 'react'

/**
 * Emir Otomotiv kurumsal logosu.
 * Saf SVG — harici görsel isteği yok, her ölçekte net.
 * Gradient id'leri useId ile tekil tutulur (aynı sayfada birden fazla logo için).
 */
export default function Logo({ className = 'h-10 w-10' }) {
  const uid = useId().replace(/[:]/g, '')
  const metal = `eo-metal-${uid}`
  const signal = `eo-signal-${uid}`

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Emir Otomotiv logosu"
    >
      <defs>
        <linearGradient id={metal} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#d5dee5" />
          <stop offset="100%" stopColor="#8d9aa5" />
        </linearGradient>
        <linearGradient id={signal} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffd45c" />
          <stop offset="100%" stopColor="#ffb300" />
        </linearGradient>
      </defs>

      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="13"
        fill="#0d1319"
        stroke="rgba(255,255,255,0.14)"
      />
      <path
        d="M13 31.5 24 12l11 19.5"
        fill="none"
        stroke={`url(#${metal})`}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.2 26.5h11.6"
        stroke={`url(#${metal})`}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <rect
        x="15"
        y="36.5"
        width="18"
        height="3"
        rx="1.5"
        fill={`url(#${signal})`}
      />
    </svg>
  )
}
