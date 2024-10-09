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
      green:{
        900:'#008000',
        800:'#009900',
        700:'#00b300',
        600:'#00e600',
        500:'#1aff1a',
        400:'#4dff4d',
        300:'#80ff80',
        200:'#b3ffb3',
        100:'#ccffcc',
      },
      red:{
        900:'#ff0000',
        800:'#ff1a1a',
        700:'#ff3333',
        600:'#ff4d4d',
        500:'#ff6666',
        400:'#ff8080',
        300:'#ff9999',
        200:'#ffb3b3',
        100:'#ffcccc',
      }
    }
  },
  plugins: [],
}

