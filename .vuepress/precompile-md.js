const { split_frontmatter, parse_mdslots_list, parse_bracket_script, rewrite_html_text } = require('../.scripts/common')
const YAML = require('yaml')
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const { eval_external_templates_data } = require('./common')

module.exports = function (source) {
  let [ fm_content, md_content ] = split_frontmatter(source)
  if (fm_content == null) {
    return source
  }
  let newfm = YAML.parse(fm_content)
  let loaded_filenames = []
  newfm.templates_data = eval_external_templates_data(newfm, loaded_filenames)
  loaded_filenames.forEach((fn) => {
    this.addDependency(fn)
  })
  let content_append_list = []
  let external_content_dir = path.join(__dirname, 'content-templates')
  for (let name of newfm.external_append_content || []) {
    let fn = path.join(external_content_dir, name)
    let content = fs.readFileSync(fn).toString('utf8')
    this.addDependency(fn)
    let options = { root: external_content_dir }
    let builder = ejs.compile(content, options)
    content_append_list.push(builder({ frontmatter: newfm }))
  }
  let newmd_content = [ md_content, ...content_append_list ].join('\n')
  /* In case slots needs manipulation
  let newmd_content = parse_mdslots_list(md_content)
    .map((a) => {
      if (a.type == 'slot' && a.content != null) {
        // a.slotname
        return a.start + a.content + a.end
      } else {
        return a.value
      }
    })
    .join('')
  */
  let output = `---\n${YAML.stringify(newfm)}---\n${newmd_content}`
  return output
}
