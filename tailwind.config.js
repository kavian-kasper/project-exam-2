module.exports = {
  mode: 'jit',
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      primary: "#BADAD1",
      secondary: "#f5e476",
      cta: "#3490DC",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
