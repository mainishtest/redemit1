'use client'

/**
 * Hero Visual — Abstract growth network / constellation
 * Represents interconnected scaling systems. Nodes represent channels,
 * lines represent data flow, the upward trajectory represents growth.
 * Uses brand teal on key nodes only, surface colors for structure.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Grid background — subtle structure */}
      <defs>
        <linearGradient id="hero-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C2432" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#1C2432" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hero-teal-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1C2432" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#253040" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1C2432" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ambient glow behind main cluster */}
      <ellipse cx="400" cy="220" rx="250" ry="180" fill="url(#hero-teal-glow)" />

      {/* Connection lines — the network */}
      <g opacity="0.5">
        {/* Primary ascending path */}
        <path d="M120 380 L240 300 L360 260 L480 180 L600 120 L700 80" stroke="#1C2432" strokeWidth="1.5" strokeLinecap="round" />
        {/* Secondary paths */}
        <path d="M160 420 L280 340 L400 280 L520 200 L640 160" stroke="#1C2432" strokeWidth="1" strokeLinecap="round" strokeDasharray="4 6" />
        <path d="M200 360 L320 320 L440 240 L560 160 L680 100" stroke="#1C2432" strokeWidth="1" strokeLinecap="round" />

        {/* Cross connections */}
        <line x1="240" y1="300" x2="280" y2="340" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="360" y1="260" x2="320" y2="320" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="360" y1="260" x2="400" y2="280" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="480" y1="180" x2="520" y2="200" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="480" y1="180" x2="440" y2="240" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="600" y1="120" x2="640" y2="160" stroke="#1C2432" strokeWidth="0.8" />
        <line x1="600" y1="120" x2="560" y2="160" stroke="#1C2432" strokeWidth="0.8" />
      </g>

      {/* Data flow highlight — teal accent line */}
      <path
        d="M120 380 L240 300 L360 260 L480 180 L600 120 L700 80"
        stroke="#14B8A6"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        filter="url(#glow)"
      />

      {/* Nodes — mostly surface, teal only on peaks */}
      <g>
        {/* Base nodes — surface colors */}
        <circle cx="120" cy="380" r="5" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="160" cy="420" r="3" fill="#1C2432" />
        <circle cx="200" cy="360" r="4" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="240" cy="300" r="6" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="280" cy="340" r="3" fill="#1C2432" />
        <circle cx="320" cy="320" r="4" fill="#253040" stroke="#1C2432" strokeWidth="1" />

        {/* Mid nodes — slightly brighter */}
        <circle cx="360" cy="260" r="7" fill="#253040" stroke="#556378" strokeWidth="1" />
        <circle cx="400" cy="280" r="3.5" fill="#253040" />
        <circle cx="440" cy="240" r="4" fill="#253040" stroke="#1C2432" strokeWidth="1" />

        {/* Growth nodes — getting closer to teal */}
        <circle cx="480" cy="180" r="8" fill="#111820" stroke="#556378" strokeWidth="1.5" />
        <circle cx="520" cy="200" r="4" fill="#253040" />
        <circle cx="560" cy="160" r="5" fill="#253040" stroke="#556378" strokeWidth="1" />

        {/* Peak nodes — teal accent */}
        <circle cx="600" cy="120" r="9" fill="#111820" stroke="#14B8A6" strokeWidth="1.5" opacity="0.8" />
        <circle cx="600" cy="120" r="4" fill="#14B8A6" opacity="0.6" />
        <circle cx="640" cy="160" r="4" fill="#253040" stroke="#14B8A6" strokeWidth="0.8" opacity="0.5" />
        <circle cx="700" cy="80" r="10" fill="#111820" stroke="#14B8A6" strokeWidth="2" opacity="0.9" />
        <circle cx="700" cy="80" r="4.5" fill="#14B8A6" opacity="0.7" />
      </g>

      {/* Floating data points — subtle ambient detail */}
      <g opacity="0.25">
        <circle cx="150" cy="200" r="1.5" fill="#556378" />
        <circle cx="300" cy="150" r="2" fill="#556378" />
        <circle cx="500" cy="100" r="1.5" fill="#556378" />
        <circle cx="650" cy="250" r="2" fill="#556378" />
        <circle cx="350" cy="400" r="1.5" fill="#556378" />
        <circle cx="550" cy="350" r="1.5" fill="#556378" />
        <circle cx="100" cy="250" r="1" fill="#556378" />
        <circle cx="750" cy="200" r="1" fill="#556378" />
      </g>

      {/* Metric callout boxes — subtle dashboard feel */}
      <g opacity="0.4">
        {/* Box near peak */}
        <rect x="720" y="60" width="60" height="28" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <text x="750" y="77" textAnchor="middle" fill="#14B8A6" fontSize="11" fontWeight="600" fontFamily="system-ui">4.2x</text>

        {/* Box mid-path */}
        <rect x="490" y="145" width="52" height="24" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <text x="516" y="161" textAnchor="middle" fill="#8899AC" fontSize="10" fontWeight="500" fontFamily="system-ui">+340%</text>
      </g>
    </svg>
  )
}
