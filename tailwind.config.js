const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Orbitron', 'Space Mono', ...defaultTheme.fontFamily.sans],
        mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
        orbitron: ['Orbitron', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Neon color palette
        neon: {
          cyan: '#00fff5',
          magenta: '#ff00ff',
          lime: '#39ff14',
          blue: '#0066ff',
          purple: '#b300ff',
          red: '#ff0033',
        },
        // Cyberpunk dark theme
        cyber: {
          black: '#0a0a0f',
          darker: '#12121f',
          dark: '#1a1a2f',
          primary: '#2a2a4f',
          secondary: '#3a3a6f',
          accent: '#4a4a8f',
        },
        // Holographic effects
        holo: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.15)',
          strong: 'rgba(255, 255, 255, 0.2)',
        },
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(to right, #1a1a2f 1px, transparent 1px), linear-gradient(to bottom, #1a1a2f 1px, transparent 1px)',
        'glow-cyan': 'radial-gradient(circle at center, rgba(0, 255, 245, 0.15) 0%, transparent 70%)',
        'glow-magenta': 'radial-gradient(circle at center, rgba(255, 0, 255, 0.15) 0%, transparent 70%)',
        'glow-lime': 'radial-gradient(circle at center, rgba(57, 255, 20, 0.15) 0%, transparent 70%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'hologram': 'hologram 3s ease-in-out infinite',
        'glitch': 'glitch 3s infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'hologram': {
          '0%, 100%': { filter: 'hue-rotate(0deg) brightness(1)' },
          '50%': { filter: 'hue-rotate(180deg) brightness(1.2)' },
        },
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme(colors.neon.cyan), 0 0 20px theme(colors.neon.cyan)',
        'neon-magenta': '0 0 5px theme(colors.neon.magenta), 0 0 20px theme(colors.neon.magenta)',
        'neon-lime': '0 0 5px theme(colors.neon.lime), 0 0 20px theme(colors.neon.lime)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 