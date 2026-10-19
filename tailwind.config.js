/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F4F7F4',
          100: '#E6EDE5',
          200: '#D0DDD0',
          300: '#AFC3AF',
          400: '#8DA88C',
          500: '#6E8B6D',
          600: '#567155',
          700: '#435842',
          800: '#344533',
          900: '#263325',
          950: '#151D15',
        },
        olive: {
          50: '#F7F8F2',
          100: '#EEF0E2',
          200: '#DCE1C4',
          300: '#C2CD9F',
          400: '#A4B476',
          500: '#839653',
          600: '#67773E',
          700: '#4F5C31',
          800: '#3D4727',
          900: '#2A311B',
        },
        gold: {
          50: '#FCF9EE',
          100: '#F7F0D5',
          200: '#EFE1AA',
          300: '#E4CD7A',
          400: '#D6B74E',
          500: '#C5A02E', // Classic Champagne Gold
          600: '#A78220',
          700: '#836219',
          800: '#644A17',
          900: '#4B3714',
          foil: '#D4AF37',
        },
        ivory: {
          50: '#FFFEFA',
          100: '#FCFBF5',
          200: '#F7F4EB',
          300: '#EFEADE',
          400: '#E5DDCF',
          DEFAULT: '#FAF8F2',
        },
        linen: '#F4EFEB',
        charcoal: '#2D342E',
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        pinyon: ['"Pinyon Script"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Montserrat"', 'system-ui', 'sans-serif'],
        malayalam: ['"Noto Serif Malayalam"', '"Manjari"', 'serif'],
      },
      boxShadow: {
        'paper': '0 2px 15px -3px rgba(45, 57, 43, 0.08), 0 10px 30px -4px rgba(45, 57, 43, 0.12)',
        'paper-lg': '0 20px 45px -10px rgba(45, 57, 43, 0.18), 0 2px 10px 0 rgba(45, 57, 43, 0.06)',
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.35)',
        'inner-paper': 'inset 0 1px 4px rgba(0,0,0,0.06)',
      },
      backgroundImage: {
        'paper-texture': "radial-gradient(#d6cfc4 0.75px, transparent 0.75px), radial-gradient(#d6cfc4 0.75px, #faf8f2 0.75px)",
      },
    },
  },
  plugins: [],
}
