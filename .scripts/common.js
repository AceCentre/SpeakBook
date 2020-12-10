const parse5 = require('parse5')
const Parse5SerializerStream = require('parse5-serializer-stream')

let split_frontmatter_pttrn = /^(\s*---\r?\n)(((?!\r?\n---\r?\n).)*)(\r?\n---\r?\n)/ms
function split_frontmatter (data) {
  let match = data.match(split_frontmatter_pttrn)
  if (!match) {
    return [ null, data ]
  }
  return [ match[2], data.slice(match[0].length)]
}

let slot_pttrn = /(:::\s+slot\s+)([^\r\n]+)(\r?\n)(((?!\r?\n:::\r?\n).)*)(\r?\n:::\r?\n?)/ms
function parse_slots (data) {
  let slots = {}
  let match
  while ((match = data.match(slot_pttrn)) != null) {
    slots[match[2]] = match[4]
    data = data.slice(match.index + match[0].length)
  }
  return slots
}

function parse_mdslots_list (txt) {
  let ret = []
  let idx = 0
  let inbracket = false
  while (true) {
    if (inbracket) {
      let idx2 = txt.indexOf(':::', idx)
      if (idx2 != -1) {
        let value = txt.substring(idx-3, idx2+3)
        let slot_match = value.match(slot_pttrn)
        let start, content, end
        if (slot_match != null) {
          start = slot_match.slice(1, 4).join('')
          content = slot_match[5]
          end = slot_match[6]
        }
        ret.push({ type: 'slot', value, slot_match, slotname: slot_match ? slot_match[2] : null, start, content, end })
        inbracket = false
        idx = idx2+3
      } else {
        ret.push({ type: 'slot', value: txt.substring(idx-3) })
        break
      }
    } else {
      let idx2 = txt.indexOf(':::', idx)
      if (idx2 != -1) {
        ret.push({ type: 'txt', value: txt.substring(idx, idx2) })
        idx = idx2+3
        inbracket = true
      } else {
        ret.push({ type: 'txt', value: txt.substring(idx) })
        break
      }
    }
  }
  return ret
}

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


module.exports = { parse_slots, split_frontmatter, split_frontmatter_pttrn, slot_pttrn, parse_mdslots_list, parse_bracket_script, rewrite_html_text }
