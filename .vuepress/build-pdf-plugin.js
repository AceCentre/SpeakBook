const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const vuepress = require('vuepress')

let format_info_list = [
  { name: 'A4', width: 210, height: 297 },
  { name: 'Letter', width: 215.9, height: 279.4 },
]
let format = process.env.PAGE_SIZE || 'A4'
let format_info = format_info_list.find((a) => a.name.toLowerCase() == format.toLowerCase())
if (format_info == null) {
  throw new Error('unknown format: ' + format)
}
format = format_info.name
let scale = 1
if (format != 'A4') {
  scale = Math.max(0.1, Math.min(format_info.width / 210, format_info.height / 297)) - 0.005
}
let options = {
  format, scale,
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
	      let pbrowser = await puppeteer.launch({
          headless: true,
          args: ['--no-sandbox']
        })
        let ppage = await pbrowser.newPage()
        let index = 0;
        for (let page of ctx.pages) {
          index++;
          let pageurl = `http://${ctx.devProcess.host}:${ctx.devProcess.port}${page.path}`
          console.log(`Started ${index} of ${ctx.pages.length}: ${pageurl}`);
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
          console.log(`Finished ${index} of ${ctx.pages.length}: ${pageurl}`);
        }
        await pbrowser.close()
        ctx.devProcess.server.close()
        process.exit(0)
      })
  }
}
