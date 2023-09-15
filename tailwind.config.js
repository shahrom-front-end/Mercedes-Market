/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'sd':'300px',
      'sm': '600px',
      'md': '850px',
      'lg': '1090px',
      'xl': '1330px',
      '2xl': '1530px',
    }
  },
  plugins: [],
}

