const path = require('path')
const fs = require('fs')

module.exports = {
  title: 'SpeakBook',
  themeConfig: {
    navbar: false,
    sidebar: false,
    nextLinks: false,
    prevLinks: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@styles': path.resolve(__dirname, 'theme/styles'),
      },
    },
  },
  plugins: [
    require('./build-pdf-plugin.js'),
  ],
}
