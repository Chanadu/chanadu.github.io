/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}', './*.html', './src/js/*.{js,ts}', './src/js/dist/*.js'],
  theme: {
    extend: {
      colors: {
        cyan: {
          350: '00ffff',
        },
      },
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