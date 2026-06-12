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
        brand: {
          50:  '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe',
          300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1',
          600: '#4f46e5', 700: '#4338ca', 800: '#3730a3',
          900: '#312e81', 950: '#1e1b4b',
        },
        accent: { 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7' },
        surface: {
          DEFAULT: '#0f0f1a',
          card:    '#151528',
          border:  '#1e1e3a',
          hover:   '#1c1c35',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':       'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 70%)',
        'brand-gradient':  'linear-gradient(135deg, #6366f1 0%, #0ea5e9 100%)',
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'slide-up':   'slideUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.8s ease forwards',
        'shimmer':    'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-14px)' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
      },
      boxShadow: {
        'glow':       '0 0 40px rgba(99,102,241,0.25)',
        'glow-lg':    '0 0 80px rgba(99,102,241,0.3)',
        'card':       '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 48px rgba(99,102,241,0.25)',
      },
    },
  },
  plugins: [],
}
export default config
