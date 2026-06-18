import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary — Microsoft Blue
        brand: {
          50:  '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe',
          300: '#93c5fd', 400: '#5b9bf2', 500: '#2563eb',
          600: '#1d4ed8', 700: '#1e40af', 800: '#1e3a8a',
          900: '#172554', 950: '#0f1a3d',
        },
        // Secondary — Azure Blue
        accent: { 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1' },
        // Tertiary accent — Subtle Purple (used sparingly: AI / automation cues)
        violet: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
        // Status colors
        success: { 50: '#f0fdf4', 400: '#4ade80', 500: '#16a34a', 600: '#15803d' },
        warn:    { 50: '#fffbeb', 400: '#fbbf24', 500: '#f59e0b', 600: '#ea580c' },
        // Light enterprise surfaces
        surface: {
          DEFAULT:     '#ffffff',
          subtle:      '#f8fafc',
          card:        '#ffffff',
          border:      '#e2e8f0',
          borderStrong:'#cbd5e1',
          hover:       '#f1f5f9',
          // Deep navy — reserved for the footer and intentional dark accent bands
          dark:        '#0b1220',
          darkCard:    '#121a2c',
          darkBorder:  '#1f2a40',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':       'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,99,235,0.10) 0%, transparent 70%)',
        'brand-gradient':  'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
        'dark-gradient':   'linear-gradient(180deg, #0b1220 0%, #060a14 100%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'slide-up':   'slideUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.8s ease forwards',
        'shimmer':    'shimmer 2.5s linear infinite',
        'grow-bar':   'growBar 1s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        growBar: { from: { transform: 'scaleY(0)' }, to: { transform: 'scaleY(1)' } },
      },
      boxShadow: {
        'glow':       '0 0 40px rgba(37,99,235,0.12)',
        'glow-lg':    '0 0 80px rgba(37,99,235,0.16)',
        'card':       '0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 4px 8px rgba(15,23,42,0.04), 0 16px 40px rgba(37,99,235,0.10)',
        'panel':      '0 20px 60px rgba(15,23,42,0.10)',
      },
    },
  },
  plugins: [],
}
export default config
