/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600',
    'bg-gradient-to-br from-fuchsia-900 via-fuchsia-850 to-fuchsia-600',
    'bg-gradient-to-br from-teal-800 via-teal-700 to-teal-600',
    'bg-gradient-to-br from-sky-950 via-sky-900 to-sky-700',
    
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

