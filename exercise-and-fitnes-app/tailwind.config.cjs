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
          primary: '#84cc16',
          'base-100': '#f3f4f6',
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
