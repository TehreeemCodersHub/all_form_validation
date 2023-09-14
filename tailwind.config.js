/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    screen: {
      // we have to define flex for medium or diffrent screens
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      }
    },
  },
  plugins: [],
}

