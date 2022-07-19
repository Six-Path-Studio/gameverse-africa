module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '700px' },
        'md': '700px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
  },
  plugins: [],
}