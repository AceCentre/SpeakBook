const { split_frontmatter } = require('./common')
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')
const child_process = require('child_process')

let MAIN_DIR = path.dirname(__dirname)

function prefill (v, n, a) {
  v = v+''
  while (v.length < n) {
    v = a + v
  }
  return v
}

let langs = [
  'af', 'ar', 'de', 'es', 'fr', 'hr', 'hu', 'mt', 'pl', 'po',
  'sv', 'tr', 'ur', 'zh-CN', 'zu',
// 'bg', 
]
let base_lang = '' // en
let md_files_inf = [ [ 'speakbook/README.md', 'README' ], [ 'speakbook/classic.md', 'classic' ] ]
let parts = [
  { name: 'inst01', s: 'inst', sa: 'inst-01-content' },
  { name: 'inst02', s: 'inst', sa: 'inst-02-content' },

  ...(Array.from((new Array(25)).keys()).map((a) => ({ name: 'grid' + prefill(a+1, 2, '0'), s: 'grid', sa: 'page' + prefill(a+1, 2, '0') })))
]

;(async () => {
  for (let lang of langs) {
    for (let [ fn, name ] of md_files_inf) {
      let a_fn = path.join(MAIN_DIR, base_lang, fn)
      let b_fn = path.join(MAIN_DIR, lang, fn)
      for (let part of parts) {
        let destdir = path.join(MAIN_DIR, 'tmp/diff', lang, name, part.name)
        await build_fm_sub_compare(a_fn, b_fn, part.s, part.sa, destdir)
      }
    }
  }
})()


async function read_fm (fn) {
  let content = (await fs.promises.readFile(fn)).toString()
  let [ fm, md_content ] = split_frontmatter(content)
  if (fm == null) {
    throw new Error("file doesn't have front-matter: " + fn)
  }
  return YAML.parse(fm)
}

async function build_fm_sub_compare (a_fn, b_fn, search, search_arg, destdir) {
  let a_fm = await read_fm(a_fn)
  let b_fm = await read_fm(b_fn)
  let a_subcontent = null
  let b_subcontent = null
  if (search == 'inst') {
    let a_inst = a_fm.instruction_pages.filter((z) => z.content_slotname == search_arg)
    let b_inst = b_fm.instruction_pages.filter((z) => z.content_slotname == search_arg)
    if (!a_inst) {
      throw new Error('a_inst is not defined')
    }
    if (!b_inst) {
      throw new Error('b_inst is not defined')
    }
    a_subcontent = YAML.stringify(a_inst)
    b_subcontent = YAML.stringify(b_inst)
  } else if (search == 'grid') {
    let a_grid = a_fm.grid_pages.filter((z) => z.name == search_arg)
    let b_grid = b_fm.grid_pages.filter((z) => z.name == search_arg)
    if (!a_grid) {
      throw new Error('a_grid is not defined')
    }
    if (!b_grid) {
      throw new Error('b_grid is not defined')
    }
    a_subcontent = YAML.stringify(a_grid)
    b_subcontent = YAML.stringify(b_grid)
  } else {
    throw new Error('unknown search')
  }
  await fs.promises.mkdir(destdir, { recursive: true })
  let a_sub_fn = path.join(destdir, 'a.yaml')
  let b_sub_fn = path.join(destdir, 'b.yaml')
  let diff_fn = path.join(destdir, 'diff.txt')
  await fs.promises.writeFile(a_sub_fn, a_subcontent)
  await fs.promises.writeFile(b_sub_fn, b_subcontent)
  let { diff_content, has_diff } = await (new Promise((resolve, reject) => {
    let shtxt = '/usr/bin/diff ' + [ '-u', a_sub_fn, b_sub_fn ].join(' ')
    let cproc = child_process.spawn('/usr/bin/diff', [ '-u', a_sub_fn, b_sub_fn ])
    let stdout_list = [], stderr_list = []
    cproc.stdout.on('data', (chunk) => {
      stdout_list.push(chunk)
    })
    cproc.stderr.on('data', (chunk) => {
      stderr_list.push(chunk)
    })
    cproc.on('exit', (code) => {
      if (code == 2) {
        reject(new Error(`diff exec [${shtxt}] failed: ` + stderr_list.join('')))
      } else {
        resolve({ diff_content: stdout_list.join(''), has_diff: code != 0 })
      }
    })
  }))
  if (has_diff) {
    await fs.promises.writeFile(diff_fn, diff_content)
  } else {
    try {
      for (let fn of [ a_sub_fn, b_sub_fn, diff_fn ]) {
        try {
          await fs.promises.unlink(fn)
        } catch (err) {
          if (err.code != 'ENOENT') {
            throw err
          }
        }
      }
      await fs.promises.rmdir(destdir)
    } catch (err) {
      // pass
      console.warn(err)
    }
  }
}

