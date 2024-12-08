/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          400: '#FFE566',
          500: '#FFD700',
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

