/**
 * About Page Visual — Team/Operator network
 * Represents connected operators working as a unified system.
 * Abstract node cluster with multiple interconnected points,
 * suggesting collaboration and coordinated execution.
 * Teal accent on 1-2 central "command" nodes only.
 */

interface IllustrationProps {
  className?: string
}

export function TeamNetworkVisual({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="team-glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#2BBCC0" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#2BBCC0" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Ambient glow */}
      <ellipse cx="300" cy="200" rx="220" ry="160" fill="url(#team-glow)" />

      {/* Connection lines — team network */}
      <g stroke="#1C2432" strokeWidth="1" opacity="0.5">
        {/* Central connections */}
        <line x1="300" y1="180" x2="180" y2="120" />
        <line x1="300" y1="180" x2="420" y2="120" />
        <line x1="300" y1="180" x2="160" y2="240" />
        <line x1="300" y1="180" x2="440" y2="240" />
        <line x1="300" y1="180" x2="220" y2="300" />
        <line x1="300" y1="180" x2="380" y2="300" />

        {/* Cross-connections between team nodes */}
        <line x1="180" y1="120" x2="160" y2="240" />
        <line x1="420" y1="120" x2="440" y2="240" />
        <line x1="160" y1="240" x2="220" y2="300" />
        <line x1="440" y1="240" x2="380" y2="300" />
        <line x1="180" y1="120" x2="420" y2="120" />
        <line x1="220" y1="300" x2="380" y2="300" />

        {/* Outer connections */}
        <line x1="180" y1="120" x2="100" y2="80" />
        <line x1="420" y1="120" x2="500" y2="80" />
        <line x1="160" y1="240" x2="80" y2="280" />
        <line x1="440" y1="240" x2="520" y2="280" />
      </g>

      {/* Operator cards — abstract person representations */}
      <g>
        {/* Top-left operator */}
        <rect x="148" y="92" width="64" height="56" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <circle cx="180" cy="108" r="8" fill="#161D27" stroke="#253040" strokeWidth="1" />
        <rect x="160" y="124" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="164" y="134" width="32" height="3" rx="1" fill="#1C2432" />

        {/* Top-right operator */}
        <rect x="388" y="92" width="64" height="56" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <circle cx="420" cy="108" r="8" fill="#161D27" stroke="#253040" strokeWidth="1" />
        <rect x="400" y="124" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="404" y="134" width="32" height="3" rx="1" fill="#1C2432" />

        {/* Left operator */}
        <rect x="128" y="212" width="64" height="56" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <circle cx="160" cy="228" r="8" fill="#161D27" stroke="#253040" strokeWidth="1" />
        <rect x="140" y="244" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="144" y="254" width="32" height="3" rx="1" fill="#1C2432" />

        {/* Right operator */}
        <rect x="408" y="212" width="64" height="56" rx="8" fill="#111820" stroke="#253040" strokeWidth="1.5" />
        <circle cx="440" cy="228" r="8" fill="#161D27" stroke="#253040" strokeWidth="1" />
        <rect x="420" y="244" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="424" y="254" width="32" height="3" rx="1" fill="#1C2432" />

        {/* Bottom-left operator */}
        <rect x="188" y="272" width="64" height="56" rx="8" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <circle cx="220" cy="288" r="8" fill="#161D27" stroke="#1C2432" strokeWidth="1" />
        <rect x="200" y="304" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="204" y="314" width="32" height="3" rx="1" fill="#1C2432" />

        {/* Bottom-right operator */}
        <rect x="348" y="272" width="64" height="56" rx="8" fill="#111820" stroke="#1C2432" strokeWidth="1.5" />
        <circle cx="380" cy="288" r="8" fill="#161D27" stroke="#1C2432" strokeWidth="1" />
        <rect x="360" y="304" width="40" height="4" rx="1.5" fill="#253040" />
        <rect x="364" y="314" width="32" height="3" rx="1" fill="#1C2432" />
      </g>

      {/* Central command node — teal accent */}
      <circle cx="300" cy="180" r="28" fill="#111820" stroke="#2BBCC0" strokeWidth="1.5" opacity="0.8" />
      <circle cx="300" cy="180" r="12" fill="#2BBCC0" opacity="0.15" />
      <circle cx="300" cy="180" r="5" fill="#2BBCC0" opacity="0.6" />

      {/* Outer endpoint nodes */}
      <g opacity="0.4">
        <circle cx="100" cy="80" r="5" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="500" cy="80" r="5" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="80" cy="280" r="4" fill="#253040" stroke="#1C2432" strokeWidth="1" />
        <circle cx="520" cy="280" r="4" fill="#253040" stroke="#1C2432" strokeWidth="1" />
      </g>

      {/* Data flow dots — pulse indicators */}
      <g opacity="0.3">
        <circle cx="240" cy="150" r="2" fill="#556378" />
        <circle cx="360" cy="150" r="2" fill="#556378" />
        <circle cx="230" cy="210" r="2" fill="#556378" />
        <circle cx="370" cy="210" r="2" fill="#556378" />
        <circle cx="260" cy="240" r="1.5" fill="#556378" />
        <circle cx="340" cy="240" r="1.5" fill="#556378" />
      </g>

      {/* Status label */}
      <g opacity="0.4">
        <rect x="268" y="215" width="64" height="20" rx="4" fill="#111820" stroke="#1C2432" strokeWidth="0.8" />
        <text x="300" y="229" textAnchor="middle" fill="#2BBCC0" fontSize="8" fontFamily="system-ui" fontWeight="500" opacity="1.5">CONNECTED</text>
      </g>
    </svg>
  )
}
