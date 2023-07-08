/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
      colors: {
        primary: {
          50: '#eff9ff',
          100: '#def2ff',
          200: '#b6e8ff',
          300: '#75d8ff',
          400: '#2cc4ff',
          500: '#009fe3',
          600: '#008ad4',
          700: '#006eab',
          800: '#005d8d',
          900: '#064d74',
        },
        ...colors,
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
