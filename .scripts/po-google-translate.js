const gettextParser = require("gettext-parser")
const fs = require('fs')
const translate = require('@vitalets/google-translate-api')
const parse5 = require('parse5')
const Parse5SerializerStream = require('parse5-serializer-stream')
const { parse_bracket_script, rewrite_html_text } = require('./common')

if (process.argv.length != 6) {
  console.error('Usage: po-google-translate.js <input-po-file> <output-po-file> <from> <to>')
  process.exit(1)
}

let inpfn = process.argv[2]
let outfn = process.argv[3]
let fromlang = process.argv[4]
let tolang = process.argv[5]

;(async () => {

  let data = gettextParser.po.parse(await fs.promises.readFile(inpfn), 'utf8')
  data.charset = 'utf8'

  for (let item of Object.values(data.translations[''])) {
    if (item['msgid'] && item['msgstr']) {
      for (let i = 0; i < item['msgstr'].length; i++) {
        if(item['msgstr'][i]) {
          let msgstr = item['msgstr'][i]
          item['msgstr'][i] = await rewrite_html_text(item['msgstr'][i], async (itext) => {
            console.log('translate: ', itext)
            return (await translate(itext, { from: fromlang, to: tolang })).text
          })
          
        }
      }
    }
  }
  
  let outpo = gettextParser.po.compile(data, {})
  await fs.promises.writeFile(outfn, outpo)

})()
