const fs = require('fs')
const gettextparser = require("gettext-parser");
const YAML = require('yaml')
const { split_frontmatter, parse_slots } = require('./common.js')

if (process.argv.length != 3) {
  console.log('usage: po-from-md.js <md_file>')
  return
}

let mdfn = process.argv[2]
let mddata = fs.readFileSync(mdfn).toString('utf8')

let [ fm_data, slots_data ] = split_frontmatter(mddata)
if (!fm_data) {
  throw new Error('Could not find front-matter!')
}
let fm = YAML.parse(fm_data)
let slots = parse_slots(slots_data)
let podict = Object.assign({}, fm.text)
if (fm.slots_in_need_for_translation) {
  for (let slotname of fm.slots_in_need_for_translation) {
    podict['__slot_' + slotname] = slots[slotname]
  }
}
let podata = {
  charset: "UTF-8",
  headers: {
    "content-type": "text/html; charset=UTF-8",
  },
  translations: {
    "": { },
  }
}
for (let key in podict) {
  if (podict.hasOwnProperty(key)) {
    podata.translations[""][key] = {
      "msgid": key,
      "msgstr": [podict[key]],
    }
  }
}
process.stdout.write(gettextparser.po.compile(podata, { foldLength: false }))

