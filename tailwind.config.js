const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      primary: {
        darkest: '#130317',
        dark: '#1a041f',
        DEFAULT: '#1c0522',
        light: '#24072c',
        lightest: '#390b46',
      }
    },
    extend: {

    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
