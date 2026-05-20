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
        primary: '#d2103e',
        navy: '#0d1b2a',
        dark: {
          bg: '#0d1117',
          card: '#161b22',
          border: '#21262d',
          text: '#f0f6fc',
        },
      },
    },
  },
  plugins: [],
}
