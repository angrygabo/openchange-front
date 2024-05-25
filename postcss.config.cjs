module.exports = {
    plugins: [
      require('autoprefixer'),
      // Configuración de PurgeCSS
      process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.html', './src/**/*.js'], // Archivos en los que buscar clases CSS utilizadas
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] // Extractor de clases CSS
      })
    ]
  }
  