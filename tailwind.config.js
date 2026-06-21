/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zen: {
          washi: '#070D1E',      // Deep indigo-black (夏の夜空 — summer night sky)
          sumi: '#E8DDD0',       // Warm washi paper (和紙)
          slate: '#7B8FB8',      // Moonlit blue-grey (月明かり)
          crimson: '#D4944A',    // Lantern amber-gold (提灯 — natsu matsuri)
          sage: '#B87DA0',       // Soft sakura pink (桜)
          border: '#15203A',     // Indigo-navy border (海の闇)
          card: '#0E1A35',       // Deep blue card surface
          surface: '#0A1425',    // Ocean-deep section bg
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'comet-glow': 'radial-gradient(ellipse at 70% 30%, rgba(212, 148, 74, 0.08) 0%, transparent 60%)',
        'aurora-glow': 'radial-gradient(ellipse at 30% 70%, rgba(184, 125, 160, 0.06) 0%, transparent 60%)',
        'twilight-gradient': 'linear-gradient(180deg, #070D1E 0%, #15203A 40%, #2A3B6A 70%, #D4944A 100%)',
      },
      boxShadow: {
        'comet': '0 12px 24px -10px rgba(212, 148, 74, 0.15)',
        'aurora': '0 12px 24px -10px rgba(184, 125, 160, 0.12)',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite alternate',
        'shooting-star': 'shootingStar 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
        shootingStar: {
          '0%': { transform: 'translateX(0) translateY(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '30%': { transform: 'translateX(100px) translateY(50px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
