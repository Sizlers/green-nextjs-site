module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
        'viaoda': ['"Viaoda Libre"', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
