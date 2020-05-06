const fs = require('fs')
const gettextparser = require("gettext-parser");
const YAML = require('yaml')
const { split_frontmatter_pttrn, slot_pttrn } = require('./common.js')

if (process.argv.length != 4) {
  console.log('usage: apply-po-to-md.js <po_file> <md_file>')
  return
}

let pofn = process.argv[2]
let potxt = fs.readFileSync(pofn).toString('utf8')
let podata = gettextparser.po.parse(potxt)

let mdfn = process.argv[3]
let mddata = fs.readFileSync(mdfn).toString('utf8')


let fmmatch = mddata.match(split_frontmatter_pttrn)
if (!fmmatch) {
  throw new Error('Could not find front-matter!')
}
let mdtxt = mddata.slice(fmmatch[0].length)
let newfm = YAML.parse(fmmatch[2])
let newslots = {}
let newtext = {}
for (let key in podata.translations['']) {
  if (podata.translations[''].hasOwnProperty(key)) {
    if (key == '') {
      continue
    }
    let value = podata.translations[''][key].msgstr[0]
    if (!key.startsWith('__slot_')) {
      newtext[key] = value
    } else {
      newslots[key.slice('__slot_'.length)] = value
    }
  }
}
Object.assign(newfm.text, newtext)
// update mddata frontmatter
mddata = fmmatch[1] + YAML.stringify(newfm) + fmmatch[4]
// update slots
let idx = 0
let match
while ((match = mdtxt.slice(idx).match(slot_pttrn)) != null) {
  let slotname = match[2]
  if (slotname in newslots) {
    let tmp = match.slice(1, 4).join('') + newslots[slotname] + match[6]
    mdtxt = mdtxt.slice(0, idx + match.index) + tmp + mdtxt.slice(idx + match[0].length)
    idx += match.index + tmp.length
  } else {
    idx += match.index + match[0].length
  }
}
mddata = mddata + mdtxt

process.stdout.write(mddata)
