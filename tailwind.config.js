/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}', './*.html', './src/js/*.{js,ts}', './src/js/dist/*.js'],
  theme: {
    extend: {
      height: {
        100: '28rem',
      },
      width: {
        100: '28rem',
      }
    },
  },
  plugins: [],
}

