module.exports = {
  purge: {
    content: [
      './public/**/*.js',
      './public/**/*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'caveat': ['Caveat', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
