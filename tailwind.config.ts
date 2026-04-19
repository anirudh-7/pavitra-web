import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#C15330',
          50:  '#FEF3EE',
          100: '#FDE0D2',
          200: '#FBBFA5',
          300: '#F89476',
          400: '#F4694B',
          500: '#C15330',
          600: '#A84525',
          700: '#8E381C',
          800: '#742C14',
          900: '#5A200E',
          dark: '#9A3C1F',
          light: '#D9694B',
        },
        charcoal: {
          DEFAULT: '#1C2333',
          50:  '#F4F5F7',
          100: '#E8EAF0',
          200: '#C9CDD8',
          300: '#A9B0C0',
          400: '#6D788F',
          500: '#4A5568',
          600: '#3D4A5C',
          700: '#2D3748',
          800: '#1C2333',
          900: '#131A27',
        },
        warm: {
          50: '#FAF8F5',
          100: '#F5F1EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.14)',
        nav: '0 2px 16px rgba(0,0,0,0.10)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1C2333 0%, #2D3748 55%, #4A2010 100%)',
        'brand-gradient': 'linear-gradient(135deg, #C15330 0%, #9A3C1F 100%)',
        'cta-gradient': 'linear-gradient(135deg, #C15330 0%, #8E381C 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
        'count-up': 'countUp 1s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
