/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#1DB954',
        dark: '#191414',
        gray: '#b3b3b3'
      },
      fontFamily: {
        'book': 'Book'
      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fill,minmax(150px, 200px))'
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
} 