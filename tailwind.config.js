/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/**.js', './components/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Space Mono', 'monospace']
      }
    },
    colors: {
      blue: '#373e98',
      pink: '#f16775',
      yellow: '#fee36e',
      'yellow-dark': '#ceb92c',
      gray: '#8492a6',
      black: '#2a2a2a'
    }
  },
  plugins: []
}
