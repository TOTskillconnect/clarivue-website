/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'clarivue-blue': '#1E2A78',
        'clarivue-light-blue': '#5F9DF7',
        'clarivue-bg': '#F2F9FF',
      },
      gradients: {
        'clarivue': 'linear-gradient(135deg, #1E2A78 0%, #5F9DF7 100%)',
      }
    },
  },
  plugins: [],
} 