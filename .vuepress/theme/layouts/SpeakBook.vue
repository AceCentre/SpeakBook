<template>
  <div :style="$page.frontmatter.inlinecss">
    <div class="page speakbook-cover-page">
      <div class="float-left">
        <div class="flex-v height-100ph fsize-3 grey-color v-oneline-fsize-3">
          <div v-for="i in 5" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">
            {{ $page.frontmatter.text.ring_bind_edge }}
          </div>
        </div>
      </div>
      <div class="float-right">
        <Content slot-key="cut-out-right-side-guide-01" />
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
    <div v-for="(ipage, ipageindex) in $page.frontmatter.instruction_pages" class="page instruction-page fsize-4_5">
      <div v-for="fltelm in ipage.floating_elements" :class="'floating-element float-' + fltelm.dir + ' floating-element-' + (fltelm.mode||'default') + '-mode'" :style="fltelm.inlinecss">
        <Content v-if="fltelm.slotname" class="floating-element-body" :slot-key="fltelm.slotname" />
      </div>
      <div>
        <Content :slot-key="ipage.content_slotname" />
      </div>
    </div>
    <!-- grid pages -->
    <div v-for="(gdata, pageindex) in eval_grid_pages($page.frontmatter.grid_pages)" class="page flex-h" :style="gdata.inlinecss">
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

  mounted () {
  },

  methods: {
    eval_grid_pages (pages) {
      let pagesByName = {}
      for (let page of pages) {
        if (page.name) {
          pagesByName[page.name] = page
        }
      }
      return pages.map((page) => {
        if (page.copyof && page.copyof in pagesByName) {
          let src_page = pagesByName[page.copyof]
          return copyof_sub(src_page, page)
        } else {
          return page
        }
      })
      function copyof_sub (src, dest) {
        if (Array.isArray(src)) {
          let out = []
          if (Array.isArray(dest)) {
            for (let i = 0; i < src.length; i++) {
              out.push(copyof_sub(src[i], dest[i]))
            }
          } else if (dest) {
            for (let i = 0; i < src.length; i++) {
              out.push(copyof_sub(src[i], dest[i+'']))
            }
          } else {
            for (let i = 0; i < src.length; i++) {
              out.push(copyof_sub(src[i], undefined))
            }
          }
          return out
        } else if (typeof src == 'object') {
          let out = {}
          for (let key in src) {
            if (src.hasOwnProperty(key)) {
              out[key] = copyof_sub(src[key], dest ? dest[key] : undefined)
            }
          }
          return out
        } else {
          return dest === undefined ? src : dest
        }
      }
    },
  }
}
</script>
<style lang="scss">
@import "@styles/index.scss";

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
