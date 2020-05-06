let split_frontmatter_pttrn = /^(\s*---\r?\n)(((?!\r?\n---\r?\n).)*)(\r?\n---\r?\n)/ms
function split_frontmatter (data) {
  let match = data.match(split_frontmatter_pttrn)
  if (!match) {
    return [ null, data ]
  }
  return [ match[2], data.slice(match[0].length)]
}

let slot_pttrn = /(:::\s+slot\s+)([^\r\n]+)(\r?\n)(((?!\r?\n:::\r?\n).)*)(\r?\n:::\r?\n)/ms
function parse_slots (data) {
  let slots = {}
  let match
  while ((match = data.match(slot_pttrn)) != null) {
    slots[match[2]] = match[4]
    data = data.slice(match.index + match[0].length)
  }
  return slots
}

module.exports = { parse_slots, split_frontmatter, split_frontmatter_pttrn, slot_pttrn }
