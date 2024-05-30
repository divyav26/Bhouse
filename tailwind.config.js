/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5f3afc',
      },
      borderRadius: {
        extraLarge: '4rem'
      }
    },
  },
  plugins: [],
}