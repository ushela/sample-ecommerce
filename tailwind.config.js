/** @type {import('tailwindcss').Config} */

// "theme" overwrites styles while "extends" keeps the origin
// info and just adds ontop

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      colors: {
        pizza: '#123456',
      },
      fontSize: {
        huge: ['80rem', { lineHeight: '1' }],
      },
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

//to disable eslint
//eslint-disable-next-line
