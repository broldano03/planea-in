/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'quarter':'25%',
      },
      colors: {
        customBlue: '#55638F',
        customPurple: '#7D558F',
        customGreen: '#558A8F',
        customBrown: '#8F6455',
      }
    },
  },
  plugins: [],
}

