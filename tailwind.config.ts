import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand teal — extracted from logo accent on the "1"
        // Use sparingly: CTAs, key metrics, active indicators only
        brand: {
          50:  '#eefcfc',
          100: '#d4f6f7',
          200: '#aeedee',
          300: '#76dee1',
          400: '#2BBCC0', // ← logo teal (primary accent)
          500: '#1ea3a7',
          600: '#17858a',
          700: '#166c71',
          800: '#17575c',
          900: '#184a4e',
          950: '#082e32',
        },
        // Surface system — blue-black tones for depth and premium feel
        surface: {
          0:   '#05070A', // deepest background
          50:  '#080B11', // body background
          100: '#0D1117', // card / elevated surface
          150: '#111820', // card hover / secondary surface
          200: '#161D27', // input backgrounds
          300: '#1C2432', // visible borders
          400: '#253040', // strong borders / dividers
        },
        // Text system — blue-tinted neutrals, softer than pure white/gray
        txt: {
          primary:   '#E8ECF4', // headings, primary body
          secondary: '#8899AC', // supporting text, descriptions
          muted:     '#556378', // labels, captions, meta
          faint:     '#3A4658', // disabled, decorative
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Display scale — tight tracking, controlled line height
        'display-xl': ['4.5rem',  { lineHeight: '1.04', letterSpacing: '-0.035em', fontWeight: '600' }],
        'display-lg': ['3.75rem', { lineHeight: '1.06', letterSpacing: '-0.03em',  fontWeight: '600' }],
        'display':    ['3rem',    { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['2.25rem', { lineHeight: '1.12', letterSpacing: '-0.02em',  fontWeight: '600' }],
        // Heading scale
        'heading-lg': ['1.75rem', { lineHeight: '1.2',  letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading':    ['1.375rem',{ lineHeight: '1.25', letterSpacing: '-0.01em',  fontWeight: '600' }],
        'heading-sm': ['1.125rem',{ lineHeight: '1.3',  letterSpacing: '-0.005em', fontWeight: '600' }],
        // Body scale
        'body-lg':    ['1.0625rem', { lineHeight: '1.65', letterSpacing: '0' }],
        'body':       ['0.9375rem', { lineHeight: '1.6',  letterSpacing: '0' }],
        'body-sm':    ['0.8125rem', { lineHeight: '1.55', letterSpacing: '0.005em' }],
        // Utility
        'caption':    ['0.75rem',   { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'overline':   ['0.6875rem', { lineHeight: '1.2', letterSpacing: '0.08em', fontWeight: '500' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        'DEFAULT': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(43, 188, 192, 0.15)',
        'glow':    '0 0 40px -10px rgba(43, 188, 192, 0.2)',
        'glow-lg': '0 0 60px -15px rgba(43, 188, 192, 0.25)',
        'elevated': '0 1px 2px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2)',
        'elevated-lg': '0 2px 4px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
