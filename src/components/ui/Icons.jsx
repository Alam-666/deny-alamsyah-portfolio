const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
}

export function ArrowUpRight({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function ArrowRight({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 12h15m-6-6 6 6-6 6" />
    </svg>
  )
}

export function ArrowDown({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4v15m-6-6 6 6 6-6" />
    </svg>
  )
}

export function Sun({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export function Moon({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5Z" />
    </svg>
  )
}

export function Menu({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function Mail({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6 8.5-6" />
    </svg>
  )
}

export function Phone({ className = 'h-5 w-5' }) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5.5 5.5L16 13l5 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  )
}

export function Copy({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </svg>
  )
}

export function Check({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  )
}

export function Pin({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function Sparkle({ className = 'h-4 w-4' }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
    </svg>
  )
}
