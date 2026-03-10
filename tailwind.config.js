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
        outfit: ['Outfit', 'sans-serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        surface: '#13131a',
        surface2: '#1c1c28',
        border: '#2a2a3d',
        accent: '#6c63ff',
        accent2: '#ff6584',
        accent3: '#43e97b',
        accent4: '#f7971e',
        muted: '#8888aa',
        primary: '#f0f0f8',
        text2: '#8888aa',
        text3: '#55556a',
      },
      animation: {
        'fade-up': 'fadeUp 0.3s ease',
        'pop-in': 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.4s ease',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        popIn: {
          from: { opacity: '0', transform: 'scale(0.82)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
