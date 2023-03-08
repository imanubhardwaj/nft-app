const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        secondary: '#374151',
        link: colors.blue['500'],
      },
      fontFamily: {
        campton: ['campton', 'sans-serif'],
      },
      fontSize: {
        '3xs': '.5rem',
        '2xs': '.625rem',
      },
    },
  },
};
