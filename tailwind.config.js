/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      
      colors:{
        'navHover':'#6FD9D3',
        'h1Color':'#69415A',
        'grayrgba':'rgba(64,64,63,0.8)'
      },
      backgroundImage:{
        'joinZavieh':"url(/imgs/DSC_1654-scaled.jpg)"
      }
    },
  },
  plugins: [],
};
