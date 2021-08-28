const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: '#2b1055'
    },
    extend: {

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
