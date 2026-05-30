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
          washi: '#0F0F0F',      // Deep dark background
          sumi: '#E8E4DD',       // Light cream text (inverted)
          slate: '#9B9790',      // Muted warm grey for secondary text
          crimson: '#D4615A',    // Softened crimson for dark bg
          sage: '#7FA882',       // Brighter sage for dark bg
          border: '#2A2825',     // Dark border
          card: '#1A1917',       // Slightly elevated dark surface
          surface: '#141312',    // Alternate section bg
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Shippori Mincho"', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
