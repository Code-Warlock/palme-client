/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palmeGreen: '#1a5f3a', 
        palmeLight: '#f3f9f5', 
        palmeAccent: '#e8f5e9',
        palmeRed: '#8b1c1c',   
        palmeGold: '#d4af37',
        },
            fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}