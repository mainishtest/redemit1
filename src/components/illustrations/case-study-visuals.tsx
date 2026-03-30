/**
 * Case Study Illustrations — 3 unique SVGs matching each case study
 * Style: Abstract, geometric, minimal. Surface colors dominant.
 * Teal used only on 1-2 accent elements per illustration.
 */

interface IllustrationProps {
  className?: string
}

/**
 * E-Commerce Scale — Upward revenue trajectory with product/cart abstraction
 * For: DTC Skincare Brand — "From $40K/mo to $280K/mo"
 */
export function EcommerceScaleVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="ecom-glow" x1="0.5" y1="1" x2="0.5" y2="0">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient */}
      <ellipse cx="380" cy="200" rx="180" ry="130" fill="url(#ecom-glow)" />

      {/* Revenue bars — ascending */}
      <g>
        <rect x="60" y="220" width="40" height="60" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <rect x="120" y="190" width="40" height="90" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <rect x="180" y="165" width="40" height="115" rx="4" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="240" y="135" width="40" height="145" rx="4" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="300" y="100" width="40" height="180" rx="4" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="360" y="60" width="40" height="220" rx="4" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.8" />
      </g>

      {/* Bar labels */}
      <g opacity="0.3">
        <text x="80" y="300" textAnchor="middle" fill="#556378" fontSize="9" fontFamily="system-ui">M1</text>
        <text x="140" y="300" textAnchor="middle" fill="#556378" fontSize="9" fontFamily="system-ui">M2</text>
        <text x="200" y="300" textAnchor="middle" fill="#556378" fontSize="9" fontFamily="system-ui">M3</text>
        <text x="260" y="300" textAnchor="middle" fill="#556378" fontSize="9" fontFamily="system-ui">M4</text>
        <text x="320" y="300" textAnchor="middle" fill="#556378" fontSize="9" fontFamily="system-ui">M5</text>
        <text x="380" y="300" textAnchor="middle" fill="#2BBCC0" fontSize="9" fontFamily="system-ui" fontWeight="600" opacity="2">M6</text>
      </g>

      {/* Growth line overlay */}
      <path d="M80 215 L140 185 L200 158 L260 128 L320 92 L380 52" stroke="#2BBCC0" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
      <circle cx="380" cy="52" r="4" fill="#2BBCC0" opacity="0.6" />

      {/* Product card abstractions — floating right */}
      <g>
        <rect x="440" y="80" width="90" height="110" rx="8" fill="#111820" stroke="#253040" strokeWidth="1" />
        <rect x="452" y="92" width="66" height="44" rx="4" fill="#161D27" />
        <rect x="452" y="146" width="48" height="5" rx="2" fill="#253040" />
        <rect x="452" y="157" width="32" height="4" rx="1.5" fill="#1C2432" />
        <rect x="452" y="172" width="40" height="10" rx="3" fill="#2BBCC0" opacity="0.12" stroke="#2BBCC0" strokeWidth="0.5" strokeOpacity="0.3" />
      </g>

      <g opacity="0.5">
        <rect x="460" y="210" width="80" height="90" rx="8" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <rect x="472" y="222" width="56" height="36" rx="4" fill="#161D27" />
        <rect x="472" y="266" width="40" height="5" rx="2" fill="#253040" />
        <rect x="472" y="277" width="28" height="4" rx="1.5" fill="#1C2432" />
      </g>

      {/* Metric callout */}
      <g>
        <rect x="420" y="30" width="70" height="30" rx="6" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <text x="455" y="50" textAnchor="middle" fill="#2BBCC0" fontSize="12" fontWeight="600" fontFamily="system-ui" opacity="0.7">7x</text>
      </g>
    </svg>
  )
}

/**
 * SaaS Acquisition — Funnel optimization / trial conversion visual
 * For: B2B SaaS Platform — "Cut CAC by 60%"
 */
export function SaasAcquisitionVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="saas-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="280" cy="160" rx="200" ry="140" fill="url(#saas-grad)" />

      {/* Dashboard mockup frame */}
      <rect x="60" y="40" width="440" height="240" rx="12" fill="#111820" stroke="#253040" strokeWidth="1.5" />

      {/* Top bar */}
      <rect x="60" y="40" width="440" height="36" rx="12" fill="#161D27" />
      <rect x="60" y="64" width="440" height="12" fill="#161D27" />
      {/* Window dots */}
      <circle cx="82" cy="58" r="4" fill="#253040" />
      <circle cx="96" cy="58" r="4" fill="#253040" />
      <circle cx="110" cy="58" r="4" fill="#253040" />

      {/* Sidebar */}
      <rect x="60" y="76" width="100" height="204" fill="#0D1117" />
      <g opacity="0.4">
        <rect x="76" y="96" width="64" height="6" rx="2" fill="#253040" />
        <rect x="76" y="114" width="48" height="6" rx="2" fill="#253040" />
        <rect x="76" y="132" width="56" height="6" rx="2" fill="#2BBCC0" opacity="0.5" />
        <rect x="76" y="150" width="44" height="6" rx="2" fill="#253040" />
        <rect x="76" y="168" width="52" height="6" rx="2" fill="#253040" />
      </g>

      {/* Main content — metric cards */}
      <g>
        {/* Card 1 — CAC */}
        <rect x="180" y="92" width="140" height="64" rx="8" fill="#0D1117" stroke="#1C2432" strokeWidth="1" />
        <text x="196" y="112" fill="#556378" fontSize="9" fontFamily="system-ui">Cost per Trial</text>
        <text x="196" y="136" fill="#2BBCC0" fontSize="20" fontWeight="600" fontFamily="system-ui" opacity="0.8">$48</text>
        <text x="264" y="136" fill="#556378" fontSize="10" fontFamily="system-ui" opacity="0.5">↓ from $120</text>

        {/* Card 2 — Signups */}
        <rect x="340" y="92" width="140" height="64" rx="8" fill="#0D1117" stroke="#1C2432" strokeWidth="1" />
        <text x="356" y="112" fill="#556378" fontSize="9" fontFamily="system-ui">Trial Signups</text>
        <text x="356" y="136" fill="#E8ECF4" fontSize="20" fontWeight="600" fontFamily="system-ui">3x</text>
      </g>

      {/* Chart area */}
      <g>
        <rect x="180" y="172" width="300" height="92" rx="8" fill="#0D1117" stroke="#1C2432" strokeWidth="1" />

        {/* Before line — higher cost */}
        <path d="M200 196 L240 200 L280 194 L320 202 L360 198 L400 204 L440 196" stroke="#253040" strokeWidth="1.5" strokeDasharray="3 3" />

        {/* After line — lower, teal */}
        <path d="M200 230 L240 226 L280 218 L320 212 L360 206 L400 200 L440 194" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.6" strokeLinecap="round" />

        {/* End point */}
        <circle cx="440" cy="194" r="3.5" fill="#2BBCC0" opacity="0.7" />
      </g>

      {/* Labels */}
      <g opacity="0.25">
        <text x="200" y="250" fill="#556378" fontSize="8" fontFamily="system-ui">Before</text>
        <text x="424" y="250" fill="#2BBCC0" fontSize="8" fontFamily="system-ui">After</text>
      </g>
    </svg>
  )
}

/**
 * Info Product Launch — Launch trajectory with revenue spike
 * For: Education Company — "$1.2M Launch"
 */
export function InfoProductLaunchVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 560 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="launch-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="launch-fill" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient */}
      <ellipse cx="360" cy="120" rx="160" ry="120" fill="url(#launch-glow)" />

      {/* Grid lines */}
      <g stroke="#1C2432" strokeWidth="0.5" opacity="0.3">
        <line x1="60" y1="80" x2="500" y2="80" />
        <line x1="60" y1="140" x2="500" y2="140" />
        <line x1="60" y1="200" x2="500" y2="200" />
        <line x1="60" y1="260" x2="500" y2="260" />
      </g>

      {/* Revenue area fill */}
      <path
        d="M80 260 L140 255 L200 248 L260 240 L300 230 L330 180 L350 100 L370 60 L390 70 L420 110 L460 130 L500 140 L500 260 Z"
        fill="url(#launch-fill)"
      />

      {/* Revenue line */}
      <path
        d="M80 260 L140 255 L200 248 L260 240 L300 230 L330 180 L350 100 L370 60 L390 70 L420 110 L460 130 L500 140"
        stroke="#253040"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Launch spike — teal highlight section */}
      <path
        d="M300 230 L330 180 L350 100 L370 60"
        stroke="#2BBCC0"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* Peak node */}
      <circle cx="370" cy="60" r="6" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.9" />
      <circle cx="370" cy="60" r="2.5" fill="#2BBCC0" opacity="0.7" />

      {/* Launch day marker */}
      <line x1="330" y1="40" x2="330" y2="260" stroke="#253040" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <g>
        <rect x="306" y="28" width="50" height="18" rx="4" fill="#111820" stroke="#253040" strokeWidth="0.8" />
        <text x="331" y="41" textAnchor="middle" fill="#556378" fontSize="8" fontFamily="system-ui" fontWeight="500">LAUNCH</text>
      </g>

      {/* Revenue callout at peak */}
      <g>
        <rect x="388" y="42" width="80" height="30" rx="6" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <text x="428" y="62" textAnchor="middle" fill="#2BBCC0" fontSize="13" fontWeight="600" fontFamily="system-ui" opacity="0.7">$1.2M</text>
      </g>

      {/* Email list growth — secondary element */}
      <g opacity="0.5">
        <rect x="60" y="30" width="120" height="50" rx="8" fill="#111820" stroke="#1C2432" strokeWidth="1" />
        <text x="76" y="48" fill="#556378" fontSize="8" fontFamily="system-ui">Email List</text>
        <text x="76" y="66" fill="#E8ECF4" fontSize="14" fontWeight="600" fontFamily="system-ui">+18,000</text>
      </g>

      {/* Funnel stages — bottom abstract */}
      <g opacity="0.35">
        <rect x="80" y="275" width="100" height="28" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="0.8" />
        <text x="130" y="293" textAnchor="middle" fill="#556378" fontSize="8" fontFamily="system-ui">Opt-in</text>

        <rect x="200" y="275" width="80" height="28" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="0.8" />
        <text x="240" y="293" textAnchor="middle" fill="#556378" fontSize="8" fontFamily="system-ui">Webinar</text>

        <rect x="300" y="275" width="80" height="28" rx="4" fill="#111820" stroke="#253040" strokeWidth="0.8" />
        <text x="340" y="293" textAnchor="middle" fill="#556378" fontSize="8" fontFamily="system-ui">Sales</text>

        <rect x="400" y="275" width="80" height="28" rx="4" fill="#111820" stroke="#2BBCC0" strokeWidth="0.8" opacity="0.6" />
        <text x="440" y="293" textAnchor="middle" fill="#2BBCC0" fontSize="8" fontFamily="system-ui" opacity="0.8">Close</text>

        {/* Arrows between stages */}
        <path d="M182 289 L198 289" stroke="#1C2432" strokeWidth="1" />
        <path d="M282 289 L298 289" stroke="#1C2432" strokeWidth="1" />
        <path d="M382 289 L398 289" stroke="#253040" strokeWidth="1" />
      </g>
    </svg>
  )
}
