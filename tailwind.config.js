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
          washi: '#0F1E3D',      // Deep ocean blue (海の青 — Japanese summer sea)
          sumi: '#EDE8E0',       // Warm cloud white (雲白)
          slate: '#8BA3C8',      // Sky blue grey (空色)
          crimson: '#E89B3C',    // Sunlit gold (陽光 — afternoon sun)
          sage: '#C48AB8',       // Sunset pink (夕焼け)
          border: '#1E3058',     // Ocean wave border (波)
          card: '#152847',       // Deep sea surface
          surface: '#111F3A',    // Twilight ocean section bg
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'comet-glow': 'radial-gradient(ellipse at 70% 30%, rgba(232, 155, 60, 0.1) 0%, transparent 60%)',
        'aurora-glow': 'radial-gradient(ellipse at 30% 70%, rgba(196, 138, 184, 0.08) 0%, transparent 60%)',
        'twilight-gradient': 'linear-gradient(180deg, #0F1E3D 0%, #1E3058 40%, #2A4580 70%, #E89B3C 100%)',
      },
      boxShadow: {
        'comet': '0 12px 24px -10px rgba(232, 155, 60, 0.18)',
        'aurora': '0 12px 24px -10px rgba(196, 138, 184, 0.15)',
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
