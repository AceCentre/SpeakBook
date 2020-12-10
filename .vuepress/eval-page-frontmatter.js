const { eval_external_templates_data } = require('./common')

module.exports = (options = {}, context) => ({
  extendPageData ($page) {
    if ($page.frontmatter) {
      $page.frontmatter.templates_data = eval_external_templates_data($page.frontmatter)
    }
  }
})
