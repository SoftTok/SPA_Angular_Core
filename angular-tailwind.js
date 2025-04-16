const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // Add the @tailwindcss/postcss package
    require('@tailwindcss/postcss'),
    autoprefixer,
  ],
};
