const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const vuepress = require('vuepress')

let options = {
  format: 'A4',
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
  printBackground: true,
}
let outdir = path.join(__dirname, 'dist')

module.exports = {
  name: 'vuepress-plugin-build-pdf',
  extendCli (cli) {
    cli.command('buildpdf [targetdir]', 'export pages to pdf files')
      .action(async (targetdir = '.') => {
        const ctx = await vuepress.dev({
          sourceDir: targetdir,
          clearScreen: false,
        })
	      let pbrowser = await puppeteer.launch()
        let ppage = await pbrowser.newPage()
        for (let page of ctx.pages) {
          let pageurl = `http://${ctx.devProcess.host}:${ctx.devProcess.port}${page.path}`
          let destpath
          if (page.path[page.path.length-1] == '/') {        
            destpath = path.join(outdir, page.path, 'index.pdf')
          } else {
            let tmp = path.parse(page.path)
            destpath = path.join(outdir, path.dirname(page.path), tmp.name + '.pdf')
          }
          await ppage.goto(pageurl, { waitUntil: 'load' })
          await ppage.pdf(
            Object.assign({}, options, { path: destpath })
          )
        }
        await pbrowser.close()
        ctx.devProcess.server.close()
        process.exit(0)
      })
  }
}

