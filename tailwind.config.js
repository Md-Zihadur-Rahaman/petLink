/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      poppins : 'poppins',
      cooperLtBt  : 'cooper lt bt ',
    },
    extend: {
      colors: {
      mixGreen: '#35514e',
      lightMixGreen: '#688286',
      lightBrown: '#f4b99f',
      signIn: '#c96439',
      lightGray: '#D0D0D0',
    },   
  
  },
  },
  plugins: [],
}

