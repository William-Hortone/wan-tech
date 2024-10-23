/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontBase: ['primaryFont', 'sans-serif'],
        fontAlt: ['secondaryFont', 'sans-serif'],
        cormorant: ['"Cormorant Upright"', 'serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
      },
      colors:{
          primary:"#FBC1D4",
          secondary:"#E2E2E2",
          basic:"#ffff",
          // basic:"#E2E2E2",
          black:"#1E1E1E",
      },
      fontSize: {
        '6vw': '8vw',
      },
      keyframes: {
        textRotation: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        textRotation: 'textRotation 8s linear infinite',
      },
    },
  },
  plugins: [],
};
