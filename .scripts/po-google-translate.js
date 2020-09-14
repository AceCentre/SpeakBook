const gettextParser = require("gettext-parser")
const fs = require('fs')
const translate = require('@vitalets/google-translate-api')
const parse5 = require('parse5')
const Parse5SerializerStream = require('parse5-serializer-stream')

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

function parse_bracket_script (txt) {
  let ret = []
  let idx = 0
  let inbracket = false
  while (true) {
    if (inbracket) {
      let idx2 = txt.indexOf('}}', idx)
      if (idx2 != -1) {
        ret.push({ type: 'bracket', value: txt.substring(idx-2, idx2+2) })
        inbracket = false
        idx = idx2+2
      } else {
        ret.push({ type: 'bracket', value: txt.substring(idx-2) })
        break
      }
    } else {
      let idx2 = txt.indexOf('{{', idx)
      if (idx2 != -1) {
        ret.push({ type: 'txt', value: txt.substring(idx, idx2) })
        idx = idx2+2
        inbracket = true
      } else {
        ret.push({ type: 'txt', value: txt.substring(idx) })
        break
      }
    }
  }
  return ret
}

function rewrite_html_text (inputtext, callback) {
  return new Promise(async (resolve, reject) => {
    async function processNode (node) {
      if (node.childNodes && node.childNodes.length > 0) {
        for (let cnode of node.childNodes) {
          await processNode(cnode)
        }
      }
      if (node.nodeName == '#text') {
        node.value = (await Promise.all(
          parse_bracket_script(node.value)
            .map((a) => {
              if (a.type == 'txt' && a.value.trim().length > 0) {
                return callback(a.value)
              } else {
                return Promise.resolve(a.value)
              }
            })))
          .join('')
      }
    }
    try {
      const node = parse5.parseFragment(inputtext)
      await processNode(node)
      const serializer = new Parse5SerializerStream(node)
      let data = ''
      serializer.on('error', (err) => {
        reject(err)
      })
      serializer.on('data', (chunk) => {
        data += chunk
      })
      serializer.on('end', () => {
        resolve(data)
      })
    } catch (err) {
      reject(err)
    }
  })
}
