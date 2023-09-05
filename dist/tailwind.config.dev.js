"use strict";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        100: '28rem'
      },
      width: {
        100: '28rem'
      }
    }
  },
  plugins: []
};