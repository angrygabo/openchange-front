const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss({
      content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      safelist: [/^Mui/, /^makeStyles/, /^withStyles/]
    })] : [])
  ]
};
