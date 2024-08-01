/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myPurpel: 'rgb(66,103,178)',
      },
    },
    
  },
  plugins: [],
}

