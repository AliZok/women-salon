/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-pink': {
          50: '#fef2f4',
          100: '#fde6ea',
          200: '#fbd0d9',
          300: '#f7a8b8',
          400: '#f2758f',
          500: '#fc006f',
          600: '#e6005f',
          700: '#c2004f',
          800: '#a10042',
          900: '#850036',
        },
      },
    },
  },
  plugins: [],
} 