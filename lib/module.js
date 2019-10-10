const logger = require('./logger')

module.exports = function (moduleOptions) {
  const options = {
    enableInDev: false,
    imageminOptions: {
      plugins: [
        ['gifsicle', { interlaced: true }],
        ['jpegtran', { progressive: true }],
        ['optipng', { optimizationLevel: 5 }],
        ['svgo', { plugins: [{ removeViewBox: false }] }]
      ]
    },
    ...this.options.imagemin,
    ...moduleOptions
  }

  if (this.options.dev) {
    if (!options.enableInDev) {
      return
    }

    logger.warn('Imagemin is activated in development mode. This could increase the build time.')
  }

  this.extendBuild((config) => {
    const ImageminPlugin = require('imagemin-webpack')

    config.plugins.push(new ImageminPlugin(options))
  })
}

module.exports.meta = require('../package.json')
