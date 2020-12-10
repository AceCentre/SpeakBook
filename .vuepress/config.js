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
    require('./eval-page-frontmatter.js')
  ],
  chainWebpack (config) {
    let precompile_md_fn = path.resolve(__dirname, './precompile-md.js')
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use(precompile_md_fn)
      .loader(precompile_md_fn)
      .after('markdown-loader')
      .end()
  },
}
