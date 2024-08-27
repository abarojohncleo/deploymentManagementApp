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
    // colors: {
    //   primary: '#15136C',
    //   secondary:'#312FA5',
    //   white:'#FFFFFF'
    // }
  },
  plugins: [],
}

