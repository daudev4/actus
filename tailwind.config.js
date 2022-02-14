module.exports = {
  content: [
      './public/**/*.html',
      './src/**/*.css',
  ],
  theme: {
    fontSize: {
      base: ['14px', '16px'],
    },
    borderRadius: {
      DEFAULT: '5px',
    },
    extend: {
      colors: {
        'gray-100': '#f8f8f8',
        'gray-200': '#E5E5E5',
        'gray-300': '#D6D6D6',
        'gray-400': '#787878',
      },
      gridTemplateColumns: {
        'header': 'minmax(auto, 1fr) auto minmax(auto, 1fr)'
      },
    },
  },
  plugins: [],
}
