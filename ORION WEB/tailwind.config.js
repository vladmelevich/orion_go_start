/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16A086',
          50: '#E0F7F7',
          100: '#B3EAED',
          200: '#80DCE2',
          300: '#4DCED7',
          400: '#26BBCF',
          500: '#1F9CA9',
          600: '#197D85',
          700: '#135E64',
          800: '#0C3F42',
          900: '#062021',
        },
        secondary: {
          DEFAULT: '#333F48',
          50: '#EFF1F2',
          100: '#D8DBDE',
          200: '#BDC3C8',
          300: '#A1AAB2',
          400: '#859199',
          500: '#6B7780',
          600: '#505A60',
          700: '#333F48',
          800: '#1E262D',
          900: '#0A1014',
        },
        accent: {
          DEFAULT: '#27AE60',
          50: '#E3F5E9',
          100: '#C3EBD3',
          200: '#9FDDB8',
          300: '#73CE97',
          400: '#4DBF7D',
          500: '#27AE60',
          600: '#208E4E',
          700: '#196F3D',
          800: '#124F2B',
          900: '#0A301A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};