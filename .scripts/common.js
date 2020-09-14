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
        ret.push({ type: 'slot', value, slot_match, slotname: slot_match ? slot_match[2] : null })
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

module.exports = { parse_slots, split_frontmatter, split_frontmatter_pttrn, slot_pttrn, parse_mdslots_list }
