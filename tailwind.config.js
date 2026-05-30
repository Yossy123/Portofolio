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
          washi: '#0B1026',      // Deep twilight sky (Itomori night)
          sumi: '#F0E6D3',       // Warm cream text (golden hour glow)
          slate: '#8B9CC0',      // Muted twilight blue for secondary text
          crimson: '#E8734A',    // Comet Tiamat orange-coral
          sage: '#4ECDC4',       // Aurora teal (supernatural glow)
          border: '#1A2240',     // Dark navy border
          card: '#111833',       // Elevated deep surface
          surface: '#0D1229',    // Alternate deep section bg
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'comet-glow': 'radial-gradient(ellipse at 70% 30%, rgba(232, 115, 74, 0.08) 0%, transparent 60%)',
        'aurora-glow': 'radial-gradient(ellipse at 30% 70%, rgba(78, 205, 196, 0.06) 0%, transparent 60%)',
        'twilight-gradient': 'linear-gradient(180deg, #0B1026 0%, #1A1B4B 40%, #3D2B5A 70%, #E8734A 100%)',
      },
      boxShadow: {
        'comet': '0 12px 24px -10px rgba(232, 115, 74, 0.15)',
        'aurora': '0 12px 24px -10px rgba(78, 205, 196, 0.12)',
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
