/**
 * Service Illustrations — 4 unique SVGs for each service
 * Style: Abstract, geometric, minimal. Surface colors dominant.
 * Teal used only on 1-2 accent elements per illustration.
 */

interface IllustrationProps {
  className?: string
}

/**
 * Media Buying — Multi-platform channel distribution visual
 * Shows data flowing from a central hub to multiple platforms
 */
export function MediaBuyingVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="mb-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient */}
      <ellipse cx="240" cy="180" rx="140" ry="120" fill="url(#mb-glow)" />

      {/* Distribution lines from center */}
      <g stroke="#1C2432" strokeWidth="1.5" strokeLinecap="round">
        <line x1="240" y1="180" x2="100" y2="80" />
        <line x1="240" y1="180" x2="380" y2="80" />
        <line x1="240" y1="180" x2="80" y2="240" />
        <line x1="240" y1="180" x2="400" y2="240" />
        <line x1="240" y1="180" x2="160" y2="300" />
        <line x1="240" y1="180" x2="320" y2="300" />
      </g>

      {/* Platform nodes */}
      <g>
        {/* Meta */}
        <rect x="72" y="56" width="56" height="48" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="84" y="68" width="32" height="6" rx="2" fill="#253040" />
        <rect x="84" y="80" width="24" height="4" rx="1.5" fill="#1C2432" />
        <rect x="84" y="88" width="28" height="4" rx="1.5" fill="#1C2432" />

        {/* Google */}
        <rect x="352" y="56" width="56" height="48" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <circle cx="380" cy="74" r="8" stroke="#253040" strokeWidth="1.5" fill="none" />
        <rect x="368" y="86" width="24" height="4" rx="1.5" fill="#1C2432" />

        {/* TikTok */}
        <rect x="52" y="216" width="56" height="48" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <path d="M76 232 L76 248 C76 252 80 256 84 252" stroke="#253040" strokeWidth="1.5" fill="none" />

        {/* YouTube */}
        <rect x="372" y="216" width="56" height="48" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <polygon points="394,234 394,250 408,242" fill="#253040" />

        {/* Bottom channels */}
        <circle cx="160" cy="300" r="16" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <circle cx="320" cy="300" r="16" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
      </g>

      {/* Center hub — teal accent */}
      <circle cx="240" cy="180" r="24" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.8" />
      <circle cx="240" cy="180" r="10" fill="#2BBCC0" opacity="0.4" />
      <circle cx="240" cy="180" r="4" fill="#2BBCC0" opacity="0.7" />

      {/* Data flow pulses */}
      <circle cx="170" cy="130" r="3" fill="#253040" />
      <circle cx="310" cy="130" r="3" fill="#253040" />
      <circle cx="200" cy="240" r="2.5" fill="#253040" />
      <circle cx="280" cy="240" r="2.5" fill="#253040" />
    </svg>
  )
}

/**
 * Offer Creation — Layered value stack visual
 * Shows stacking layers that build up to a compelling offer
 */
export function OfferCreationVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Stacked layers — bottom to top */}
      <g>
        {/* Base layer */}
        <rect x="100" y="260" width="280" height="50" rx="8" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <rect x="120" y="275" width="80" height="6" rx="2" fill="#253040" />
        <rect x="120" y="287" width="60" height="4" rx="1.5" fill="#1C2432" />
        <text x="350" y="290" textAnchor="end" fill="#556378" fontSize="12" fontFamily="system-ui" fontWeight="500">Base</text>

        {/* Second layer */}
        <rect x="115" y="200" width="250" height="50" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="135" y="215" width="70" height="6" rx="2" fill="#253040" />
        <rect x="135" y="227" width="50" height="4" rx="1.5" fill="#1C2432" />
        <text x="335" y="230" textAnchor="end" fill="#556378" fontSize="12" fontFamily="system-ui" fontWeight="500">Bonus</text>

        {/* Third layer */}
        <rect x="130" y="140" width="220" height="50" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <rect x="150" y="155" width="60" height="6" rx="2" fill="#253040" />
        <rect x="150" y="167" width="44" height="4" rx="1.5" fill="#1C2432" />
        <text x="320" y="170" textAnchor="end" fill="#556378" fontSize="12" fontFamily="system-ui" fontWeight="500">Urgency</text>

        {/* Top layer — teal accent for the premium offer */}
        <rect x="145" y="80" width="190" height="50" rx="8" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.8" />
        <rect x="165" y="95" width="50" height="6" rx="2" fill="#2BBCC0" opacity="0.3" />
        <rect x="165" y="107" width="36" height="4" rx="1.5" fill="#2BBCC0" opacity="0.2" />
        <text x="305" y="110" textAnchor="end" fill="#2BBCC0" fontSize="12" fontFamily="system-ui" fontWeight="600" opacity="0.7">Offer</text>
      </g>

      {/* Upward arrow — growth indication */}
      <g opacity="0.4">
        <line x1="420" y1="290" x2="420" y2="80" stroke="#253040" strokeWidth="1.5" strokeDasharray="4 4" />
        <polygon points="414,85 420,70 426,85" fill="#253040" />
      </g>

      {/* Value indicators */}
      <g opacity="0.35">
        <text x="55" y="290" fill="#556378" fontSize="10" fontFamily="system-ui">$29</text>
        <text x="55" y="230" fill="#556378" fontSize="10" fontFamily="system-ui">$79</text>
        <text x="55" y="170" fill="#556378" fontSize="10" fontFamily="system-ui">$149</text>
        <text x="55" y="110" fill="#2BBCC0" fontSize="11" fontFamily="system-ui" fontWeight="600">$297</text>
      </g>
    </svg>
  )
}

/**
 * Funnel Strategy — Multi-stage funnel architecture
 * Shows the narrowing journey from traffic to conversion
 */
export function FunnelStrategyVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="funnel-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1C2432" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Funnel shape */}
      <path
        d="M100 60 L380 60 L320 140 L160 140 Z"
        fill="#111820" stroke="#253040" strokeWidth="1.5"
      />
      <path
        d="M160 150 L320 150 L290 220 L190 220 Z"
        fill="#111820" stroke="#253040" strokeWidth="1.5"
      />
      <path
        d="M190 230 L290 230 L270 300 L210 300 Z"
        fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.7"
      />

      {/* Stage labels */}
      <g opacity="0.5">
        <text x="240" y="105" textAnchor="middle" fill="#8899AC" fontSize="11" fontFamily="system-ui" fontWeight="500">AWARENESS</text>
        <text x="240" y="190" textAnchor="middle" fill="#8899AC" fontSize="11" fontFamily="system-ui" fontWeight="500">CONSIDERATION</text>
        <text x="240" y="272" textAnchor="middle" fill="#2BBCC0" fontSize="11" fontFamily="system-ui" fontWeight="600" opacity="1.4">CONVERSION</text>
      </g>

      {/* Traffic dots entering the top */}
      <g opacity="0.4">
        <circle cx="140" cy="40" r="2.5" fill="#556378" />
        <circle cx="180" cy="35" r="2" fill="#556378" />
        <circle cx="220" cy="38" r="3" fill="#556378" />
        <circle cx="260" cy="34" r="2.5" fill="#556378" />
        <circle cx="300" cy="40" r="2" fill="#556378" />
        <circle cx="340" cy="36" r="2.5" fill="#556378" />
      </g>

      {/* Conversion indicator — teal */}
      <circle cx="240" cy="320" r="8" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.8" />
      <circle cx="240" cy="320" r="3" fill="#2BBCC0" opacity="0.6" />

      {/* Side metrics */}
      <g opacity="0.3">
        <text x="410" y="100" fill="#556378" fontSize="10" fontFamily="system-ui">10,000</text>
        <text x="410" y="190" fill="#556378" fontSize="10" fontFamily="system-ui">2,400</text>
        <text x="410" y="270" fill="#2BBCC0" fontSize="10" fontFamily="system-ui" fontWeight="600">840</text>
      </g>

      {/* Drop-off arrows */}
      <g stroke="#1C2432" strokeWidth="0.8" opacity="0.4">
        <line x1="130" y1="100" x2="100" y2="120" />
        <line x1="350" y1="100" x2="380" y2="120" />
        <line x1="170" y1="185" x2="150" y2="200" />
        <line x1="310" y1="185" x2="330" y2="200" />
      </g>
    </svg>
  )
}

/**
 * Creative & Copy — Ad creative composition visual
 * Shows layered ad formats and copy elements
 */
export function CreativeCopyVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 480 360" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Background ad frame — large */}
      <rect x="80" y="40" width="200" height="280" rx="12" fill="#111820" stroke="#253040" strokeWidth="1.5" />
      {/* Image area */}
      <rect x="92" y="52" width="176" height="140" rx="6" fill="#161D27" />
      {/* Play button overlay */}
      <circle cx="180" cy="122" r="18" fill="#253040" opacity="0.8" />
      <polygon points="175,112 175,132 192,122" fill="#556378" />
      {/* Text lines */}
      <rect x="92" y="204" width="130" height="8" rx="3" fill="#253040" />
      <rect x="92" y="220" width="100" height="6" rx="2" fill="#1C2432" />
      <rect x="92" y="234" width="120" height="6" rx="2" fill="#1C2432" />
      {/* CTA button */}
      <rect x="92" y="260" width="90" height="32" rx="6" fill="#2BBCC0" opacity="0.15" stroke="#2BBCC0" strokeWidth="1" strokeOpacity="0.3" />
      <rect x="108" y="272" width="58" height="6" rx="2" fill="#2BBCC0" opacity="0.4" />

      {/* Second ad frame — overlapping, smaller */}
      <rect x="240" y="80" width="170" height="230" rx="12" fill="#111820" stroke="#253040" strokeWidth="1.5" />
      {/* Image area */}
      <rect x="252" y="92" width="146" height="110" rx="6" fill="#161D27" />
      {/* Carousel dots */}
      <circle cx="305" cy="210" r="3" fill="#2BBCC0" opacity="0.5" />
      <circle cx="318" cy="210" r="3" fill="#253040" />
      <circle cx="331" cy="210" r="3" fill="#253040" />
      {/* Text lines */}
      <rect x="252" y="226" width="110" height="7" rx="2.5" fill="#253040" />
      <rect x="252" y="240" width="80" height="5" rx="2" fill="#1C2432" />
      {/* CTA */}
      <rect x="252" y="262" width="80" height="28" rx="6" fill="#253040" />
      <rect x="266" y="272" width="52" height="5" rx="2" fill="#556378" />

      {/* Floating engagement metrics */}
      <g>
        <rect x="340" y="40" width="100" height="36" rx="8" fill="#111820" stroke="#253040" strokeWidth="1" />
        <text x="360" y="62" fill="#2BBCC0" fontSize="13" fontWeight="600" fontFamily="system-ui" opacity="0.7">CTR 4.8%</text>
      </g>

      <g>
        <rect x="60" y="330" width="90" height="28" rx="6" fill="#111820" stroke="#1C2432" strokeWidth="1" opacity="0.6" />
        <text x="76" y="348" fill="#556378" fontSize="10" fontFamily="system-ui">Hook rate 62%</text>
      </g>

      {/* Cursor / interaction indicator */}
      <g opacity="0.4" transform="translate(200, 285)">
        <path d="M0 0 L0 16 L5 12 L10 20 L13 18 L8 10 L14 10 Z" fill="#8899AC" />
      </g>
    </svg>
  )
}
