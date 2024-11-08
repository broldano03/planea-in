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
        customBlue: '#000B58',
        customPurple: '#2E073F',
        customGreen: '#006A67',
        customBrown: '#003161',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

