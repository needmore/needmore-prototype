/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./docs/**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
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
