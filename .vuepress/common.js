const path = require('path')
const fs = require('fs')
const YAML = require('yaml')

function eval_external_templates_data (frontmatter, loaded_filenames) {
  let templates_data = Object.assign({}, frontmatter.templates_data)
  let external_templates_data = frontmatter.external_templates_data || {}
  for (let name of Object.keys(external_templates_data)) {
    let tmpl_fn = path.join(__dirname, 'frontmatter-templates', external_templates_data[name])
    let template_data = YAML.parse(fs.readFileSync(tmpl_fn).toString('utf8'))
    if (Array.isArray(loaded_filenames)) {
      loaded_filenames.push(tmpl_fn)
    }
    templates_data[name] = template_data
  }
  return templates_data
}

module.exports = {
  eval_external_templates_data
}
