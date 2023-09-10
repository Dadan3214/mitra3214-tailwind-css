/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
      container: {
      center: true,
      padding: '16px',
    },
    extend: {
      backgroundImage: {
        
        'footer-ST2023': "url('ST2023.png')",
      },
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a'
      },
      screens: {
        '2xl': '1320px',
      },
      
    },
  },
  plugins: [],
}

