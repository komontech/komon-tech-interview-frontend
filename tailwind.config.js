/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './assets/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        brand: '#6941C6',
        lightbg: '#F9FAFB',
        lighttext: '#667085',
        light:'#D0D5DD'
      },
      zIndex: {
        'less': '-1'
      },
      gridTemplateColumns: {
        // Simple max-content
        'max-2': 'repeat(2, max-content)',
        'max-3': 'repeat(3, max-content)',
        'max-4': 'repeat(4, max-content)',
        'min-fr': ' min-content 1fr',
        'fr-max': '1fr max-content',
        'max-fr': ' max-content 1fr',
        '100-fr': '100px 1fr',
        'min-3': 'repeat(3, min-content)',
        auto: 'repeat( auto-fit, minmax(10vw, max-content) )',
      },
      screens: {
        'max-sm': { max: '650px' },
        'max-md': { max: '768px' },
        'max-tb': { max: '900px' },
        'max-lg': { max: '1024px' },
        'max-xl': { max: '1280px' },
        'max-2xl': { max: '1536px' },
      },
    },
  },
  plugins: [],
}
