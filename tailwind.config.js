/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slideDown: 'slideDown 2s ease-out forwards',
        slideUp: 'slideUp 2s ease-out forwards',
      },
      keyframes:{
        slideDown:{
          '0%':{
            transform:'translateY(0)'
          },
          '100%':{
            transform:'translateY(25%)'
          },
        },
        slideUp:{
          '100%':{
            transform:'translateY(75%)'
          },
          '0%':{
            transform:'translateY(100%)'
          },
        },
      },
    },
  },
  plugins: [],
}
