/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secundary: {
          100: '#E2E2D5',
          200: '#888883'
        }, 
        tfc: {
          1: '#97d3a9',
          2: '#fed0d7',
          3: '#58cbcc',
          4: '#fe9890',
          5: '#fecc7f',
          6: '#b8b6c9'
        }
      },
      fontFamily: {
        body: ['Nunito']
      } 
    },
  },
  plugins: [],
}
