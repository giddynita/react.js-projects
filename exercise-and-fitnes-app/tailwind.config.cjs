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
          primary: '#a3e635',
          'base-100': '#e5e7eb',
        },
      },
      {
        darkTheme: {
          primary: '#a3e635',
          'base-100': '#6b7280',
        },
      },
    ],
  },
}
