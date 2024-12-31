const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{html,js}",
    "./docs/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      emerald: colors.emerald,
      red: colors.red,
    },
    extend: {
      colors: {
        primary: colors.red,
      },
      fontFamily: {
        body: ['Futura-PT', 'Helvetica', 'Arial', 'sans-serif'],
        header: ['Wayfinder-CF', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
