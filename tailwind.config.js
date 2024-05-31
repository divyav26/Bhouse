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
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
    
  },
  plugins: [],
}