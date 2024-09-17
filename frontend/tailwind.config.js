/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      primaryBlue: {
        900:'#15136C',
        800:'#0e0a8f',
        700:'#110ca7',
        600:'#130dbf',
        500:'#160fd7',
        400:'#312FA5',
        300:'#2f28f0',
        200:'#4640f2',
        100:'#5d58f3'
      },
      white:{
        900:'#ffffff',
        800:'#f2f2f2',
        700:'#e6e6e6',
        600:'#d9d9d9',
        500:'#cccccc',
        400:'#bfbfbf',
        300:'#b3b3b3',
        200:'#a6a6a6',
        100:'#999999'
      },
    }
  },
  plugins: [],
}

