const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          darkest: '#130317',
          dark: '#1a041f',
          DEFAULT: '#1c0522',
          light: '#24072c',
          lightest: '#390b46'
        },
        green: colors.emerald,
        yellow: colors.amber,
        purple: colors.violet,
        blueGray: colors.slate
      },
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography')]
}
