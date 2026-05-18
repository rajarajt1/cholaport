/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        dark: {
          bg: '#0f172a',
          card: '#1e293b',
          text: '#e2e8f0'
        }
      }
    },
  },
  plugins: [],
}
