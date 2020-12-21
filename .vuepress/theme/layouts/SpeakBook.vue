<template>
  <div :class="($page.frontmatter.rtl ? 'rtl' : '')" :style="$page.frontmatter.inlinecss">
    <div class="page speakbook-cover-page">
      <div class="float-left">
        <div class="flex-v height-100ph fsize-3 grey-color v-oneline-fsize-3">
          <div v-for="i in 5" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
            {{ $page.frontmatter.text.ring_bind_edge }}
          </div>
        </div>
      </div>
      <div class="float-right">
        <Content :slot-key="'cut-out-'+($page.frontmatter.rtl?'left':'right')+'-side-guide-01'" />
      </div>
      <div class="abs-fill-parent flex-v items-align-center">
        <div class="speakbook-logo">
          <SpeakBookTextFourColorBkg class="speakbook-title fsize-13 p-2 bold" :text="$page.frontmatter.text.SPEAKBOOK"></SpeakBookTextFourColorBkg>
          <div class="edition">
            <Content slot-key="star-16p-bkg" class="abs-fill-parent" />
            <div v-if="!$page.frontmatter.classic_edition" class="text abs-fill-parent flex-v items-align-center">
              <span class="nth">{{ $page.frontmatter.text.edition_nth }}</span>
              <SpeakBookTextFourColorBkg class="edition-label" :text="$page.frontmatter.text.EDITION"></SpeakBookTextFourColorBkg>
              <span class="small-text">{{ $page.frontmatter.text.color_blind }}</span>
              <span class="small-text">{{ $page.frontmatter.text.friendly }}</span>
            </div>
            <div v-if="$page.frontmatter.classic_edition" class="text abs-fill-parent flex-v items-align-center classic-edition">
              <span>{{ $page.frontmatter.text.classic }}</span>
              <SpeakBookTextFourColorBkg class="edition-label" :text="$page.frontmatter.text.EDITION"></SpeakBookTextFourColorBkg>
            </div>
          </div>
        </div>
        <div class="flex-grow-1"></div>
        <Content slot-key="cover-footer" />
      </div>
      <Content class="abs-at-center" slot-key="cut-out-center-guide" />
    </div>
    <div v-for="(ipage, ipageindex) in eval_instruction_pages($page.frontmatter.instruction_pages)" class="page instruction-page fsize-4_5" :style="ipage.inlinecss">
      <div v-for="fltelm in ipage.floating_elements" :class="'floating-element float-' + fltelm.dir + ' floating-element-' + (fltelm.mode||'default') + '-mode'" :style="fltelm.inlinecss">
        <Content v-if="fltelm.slotname" class="floating-element-body" :slot-key="fltelm.slotname" />
      </div>
      <div>
        <Content :slot-key="ipage.content_slotname" />
      </div>
    </div>
    <!-- grid pages -->
    <div v-for="(gdata, pageindex) in eval_grid_pages($page.frontmatter.grid_pages)" class="page flex-h" :style="gdata.inlinecss" :x-name="gdata.name" :x-comment="gdata.comment">
      <div style="width:10mm;" class="flex-v">
        <Content class="flex-grow-1" v-if="gdata.start_spacing_slotname" :slot-key="gdata.start_spacing_slotname" :style="gdata.start_spacing_inlinecss" />
      </div>
      <div v-for="(column, columnindex) in gdata.columns" class="flex-v" :style="column.inlinecss">
        <GridPageItem v-for="(row, rowindex) in column.rows" :style="row.inlinecss" :item="row" />
      </div>
    </div>
    <Content class="page last-page flex-h" slot-key="last-page-content" />
  </div>
</template>

<script>
import SpeakBookTextFourColorBkg from '@theme/global-components/SpeakBookTextFourColorBkg.vue'
import GridPageItem from '@theme/components/GridPageItem.vue'

export default {
  name: 'SpeakBook',

  components: {
    SpeakBookTextFourColorBkg,
    GridPageItem,
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {

  },

  beforeMount () {
    // eval frontmatter text dict 
    this.$page.frontmatter.text = this._eval_fm_data(this.$page.frontmatter.text, this.$page.frontmatter.templates_data)
  },

  mounted () {
  },

  methods: {
    eval_instruction_pages (pages) {
      let templates = Object.assign({}, this.$page.frontmatter.templates_data)
      return pages.map((page) => {
        return this._eval_fm_data(page, templates)
      })
    },
    eval_grid_pages (pages) {
      let templates = Object.assign({}, this.$page.frontmatter.templates_data)
      for (let page of pages) {
        if (page.name) {
          templates[page.name] = page
        }
      }
      let grid_pages = pages.map((page) => {
        return this._eval_fm_data(page, templates)
      })
      return grid_pages
    },
    _eval_fm_data (page, templates) {
      let copyoflist = []
      let tmp = page
      while (typeof tmp.copyof == 'string' && tmp.copyof && tmp.copyof in templates) {
        if (copyoflist.indexOf(tmp.copyof) != -1) {
          throw new Error('Exit eval grid due to loopback copyof: ' + copyoflist.join(' => '))
        }
        copyoflist.push(tmp.copyof)
        tmp = templates[tmp.copyof]
      }
      let compiled_template = null
      for (let i = copyoflist.length - 1; i >= 0; i--) {
        let name = copyoflist[i]
        let data = JSON.parse(JSON.stringify(templates[name])) // copy
        if (compiled_template == null) {
          compiled_template = data
        } else {
          compiled_template = this._copyof(compiled_template, data)
        }
      }
      let dest_page = JSON.parse(JSON.stringify(page)) // copy
      if (compiled_template != null) {
        dest_page = this._copyof(compiled_template, dest_page)
      }
      delete dest_page.copyof
      return dest_page
    },
    _copyof (src, dest) {
      if (Array.isArray(src)) {
        let out = []
        if (Array.isArray(dest)) {
          for (let i = 0; i < src.length; i++) {
            out.push(this._copyof(src[i], dest[i]))
          }
        } else if (dest) {
          for (let i = 0; i < src.length; i++) {
            out.push(this._copyof(src[i], dest[i+'']))
          }
        } else {
          for (let i = 0; i < src.length; i++) {
            out.push(this._copyof(src[i], undefined))
          }
        }
        return out
      } else if (typeof src == 'object' && src != null) {
        // start with dest entries
        let out = Object.assign({}, dest)
        for (let key of Object.keys(src)) {
          let owkey = '__OVERWRITE_' + key
          if (dest && owkey in dest) {
            out[key] = dest[owkey]
            delete out[owkey]
          } else if (key in src) {
            out[key] = this._copyof(src[key], dest ? dest[key] : undefined)
          }
        }
        return out
      } else {
        return dest === undefined ? src : dest
      }
    }
  }
}
</script>
<style lang="scss">
@import "@styles/index.scss";

.rtl {
  .speakbook-logo {
    .edition {
      left: auto;
      right: 0.8cm;
      transform: translate(100%, -100%);
      > .text {
        transform: rotate(30deg);
      }
    }
  }
}

.speakbook-logo {
  position: relative;
  display: inline-block;
  margin-top: 3cm;
  .edition {
    position: absolute;
    left: 0.8cm;
    top: 0.8cm;
    transform: translate(-100%, -100%);
    z-index: 1;
    width: 2.5cm;
    height: 2.5cm;
    box-sizing: border-box;
    > .text {
      z-index: 2;
      transform: rotate(-30deg);
      font-size: 90%;
      font-weight: bold;
      justify-content: center;
      span {
        white-space: nowrap;
      }
      .nth {
        font-size: 18pt;
      }
      .small-text {
        font-size: 6pt;
      }
      .speakbook-text-four-color-bkg {
        border: 0.5mm solid var(--color-dark-stroke);
        font-size: 6pt;
      }
    }
    > .text.classic-edition {
      font-size: 12pt;
      .speakbook-text-four-color-bkg {
        font-size: 8pt;
      }
    }
  }
}
.speakbook-cover-page {
  .content__cover-footer {
    margin-bottom: 1cm;
  }
}
</style>
