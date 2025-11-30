/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // New Dark Mode Palette
        midnight: {
          900: '#050E3C', // Main Background
          800: '#002455', // Card/Component Background
        },
        // New Red Accents
        danger: {
          500: '#FF3838', // Bright Red
          600: '#DC0000', // Dark Red
        },
        // Existing Palette (kept for Light Mode / Hybrid)
        teal: {
          DEFAULT: '#6DC3BB',
          50: '#6DC3BB', 
          100: '#6DC3BB',
          200: '#6DC3BB',
          300: '#6DC3BB',
          400: '#6DC3BB',
          500: '#6DC3BB', 
          600: '#6DC3BB', 
          700: '#5aa39c', 
          800: '#48827d',
          900: '#36615d',
        },
        navy: {
          DEFAULT: '#393D7E',
          500: '#393D7E',
          600: '#393D7E',
          700: '#393D7E',
          800: '#393D7E',
          900: '#393D7E', 
        },
        indigo: {
          50: '#eff0fb',
          100: '#dfe1f7',
          200: '#c0c4ee',
          300: '#a0a7e5',
          400: '#818adc',
          500: '#5459AC', 
          600: '#5459AC',
          700: '#43478a',
          800: '#323567',
          900: '#222445',
        },
        slate: {
           800: '#393D7E',
           900: '#393D7E',
        },
        pink: {
          DEFAULT: '#F2AEBB',
          500: '#F2AEBB', 
          600: '#F2AEBB',
          700: '#d18f9c',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};