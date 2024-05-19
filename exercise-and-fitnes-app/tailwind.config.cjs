/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#e879f9',
          secondary: '#84cc16',
          accent: '#000000',
          'base-100': '#fdfdfd',
        },
      },
      {
        darkTheme: {
          primary: '#84cc16',
          'base-100': '#6b7280',
        },
      },
    ],
  },
}
