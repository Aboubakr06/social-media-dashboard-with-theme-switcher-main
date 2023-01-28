/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'main-bg' : 'hsl(218, 28%, 13%)',
        'footer-bg': 'hsl(216, 53%, 9%)',
        'elements-bg': 'hsl(217, 28%, 15%)',
        'testimonials-bg': 'hsl(219, 30%, 18%)',

        'blue': 'hsl(198, 60%, 50%)',
        'cyan': 'hsl(176, 68%, 64%)',
        'red-error': 'hsl(0, 100%, 63%)',

        'white': 'hsl(0, 0%, 100%)',
          },
          fontFamily: {
            'sans': ['Open Sans', 'sans-serif'],
            'Raleway': ['Raleway', 'sans-serif'],
          },
    },
  },
  plugins: [],
}
