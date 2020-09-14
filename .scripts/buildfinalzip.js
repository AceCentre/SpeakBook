const fs = require('fs')
const { exec } = require("child_process");
const mkdirp = require('mkdirp')
const path = require('path')
const archiver = require('archiver');

let langs_info = ["en", "af", "ar", "de", "es", "fr", "mt", "po", "sv", "tr", "zu"].map((name) => ({ name, indir: name == 'en' ? '' : name, outdir: name }))
let default_lang_info = langs_info[0]
let INPUT_DIR = path.resolve(__dirname, '../.vuepress/dist')
let DEST_DIR = path.resolve(__dirname, '../.vuepress/dist-final')
let MODULES_BIN_DIR = path.resolve(__dirname, '../node_modules/.bin')

;(async () => { // main
  // create dirs
  for (let lang_info of langs_info) {
    await mkdirp(path.join(DEST_DIR, lang_info.outdir))
  }
  // build the pages
  await asyncExec(`${MODULES_BIN_DIR}/vuepress build`)
  // buildpdf for each page size
  let page_size_list = [ 'A4', 'Letter' ]
  for (let page_size of page_size_list) {
    await asyncExec(`PAGE_SIZE=${page_size} ${MODULES_BIN_DIR}/vuepress buildpdf`)
    for (let lang_info of langs_info) {
      await copyLangFilesForSize(lang_info, page_size)
    }
  }
  // build the zip file
  await zipFolder(langs_info)
})()

function asyncExec (...args) {
  return new Promise((resolve, reject) => {
    exec(...args, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

async function copyLangFilesForSize (lang_info, size) {
  let copylist = [
    [ 'speakbook/index.pdf', size + '-color-blind.pdf', ],
    [ 'speakbook/classic.pdf', size + '-color.pdf', ],
    [ 'speakbook/printing-instructions.pdf', size + '-printing-instructions.pdf' ],
  ]
  for (let copyentry of copylist) {
    try {
      let src = path.join(INPUT_DIR, lang_info.indir, copyentry[0])
      let dest = path.join(DEST_DIR, lang_info.outdir, copyentry[1])
      await fs.promises.copyFile(src, dest)
    } catch (err) {
      if (err.code == 'ENOENT') {
        // file not found, the pdf is not generated for the lang
        console.warn('Warn: file not found, ' + path.join(lang_info.indir, copyentry[0]) + ', using default lang: ' + default_lang_info.name)
        // use the default lang when the file does not exists
        let src = path.join(INPUT_DIR, default_lang_info.indir, copyentry[0])
        let dest = path.join(DEST_DIR, lang_info.outdir, copyentry[1])
        await fs.promises.copyFile(src, dest)
      } else {
        throw err
      }
    }
  }
}

function zipFolder (langs_info) {
  return new Promise((resolve, reject) => {
    var output = fs.createWriteStream(path.join(DEST_DIR, 'speakbook-final.zip'))
    var archive = archiver('zip')
    output.on('close', function () {
      resolve()
    })
    archive.on('error', function(err){
      reject(err)
    })
    archive.pipe(output)
    for (let lang_info of langs_info) {
      archive.directory(path.join(DEST_DIR, lang_info.outdir), lang_info.outdir)     
    }
    archive.finalize()
  })
}