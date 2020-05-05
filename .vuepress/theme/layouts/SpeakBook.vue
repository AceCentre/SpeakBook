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
            <div class="text abs-fill-parent flex-v items-align-center">
              <span class="nth">{{ $page.frontmatter.text.edition_nth }}</span>
              <SpeakBookTextFourColorBkg class="edition-label" :text="$page.frontmatter.text.EDITION"></SpeakBookTextFourColorBkg>
              <span class="small-text">{{ $page.frontmatter.text.color_blind }}</span>
              <span class="small-text">{{ $page.frontmatter.text.friendly }}</span>
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
    <div class="page last-page flex-h">
      <div style="width: 10mm;"></div>
      <div class="flex-v block-holder b10x">
        <Content slot-key="last-page-heading" />
        <div class="flex-v mt-2"> <!-- split between letters keys and others -->
          <div class="flex-h">
            <div class="flex-v block-holder b3x">
              <div class="block b0x flex-grow-1" style="margin-left: 8mm;"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="flex-h flex-wrap">
                <div class="block">{{ $page.frontmatter.text._GBP }}</div>
                <div class="block">{{ $page.frontmatter.text._USD }}</div>
                <div class="block">{{ $page.frontmatter.text._percent }}</div>
                <div class="block">{{ $page.frontmatter.text._plus }}</div>
                <div class="block">{{ $page.frontmatter.text._minus }}</div>
                <div class="block">{{ $page.frontmatter.text._slash }}</div>
                <div class="block">{{ $page.frontmatter.text._X }}</div>
                <div class="block">{{ $page.frontmatter.text._equal }}</div>
                <div class="block">{{ $page.frontmatter.text._question_mark }}</div>
              </div>
              <div class="block b3x white-color black-bkg">{{ $page.frontmatter.text.HOME }}</div>
              <div class="block b3x yellow-bkg" style="font-size: 18pt;">{{ $page.frontmatter.text.THANK_YOU }}</div>
            </div>
            <div class="flex-v block-holder b4x">
              <div class="block b4x">
              </div>
              <div class="flex-grow-1"></div>
            </div>
            <div class="flex-v block-holder b3x">
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="block b3x"></div>
              <div class="flex-h flex-wrap">
                <div class="block pink-bkg">{{ $page.frontmatter.text._one }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._two }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._three }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._four }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._five }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._six }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._seven }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._eight }}</div>
                <div class="block pink-bkg">{{ $page.frontmatter.text._nine }}</div>
                <Content class="block" slot-key="redheart-img" />
                <div class="block pink-bkg">{{ $page.frontmatter.text._zero }}</div>
                <Content class="block" slot-key="smileyface-img" />
              </div>
            </div>
          </div>
          <div class="flex-h flex-wrap">
            <div class="block cyan-bkg">{{ $page.frontmatter.text.Q }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.W }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.E }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.R }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.T }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.Y }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.U }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.I }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.O }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.P }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.A }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.S }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.D }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.F }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.G }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.H }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.J }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.K }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.L }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text._atsign }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.Z }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.X }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.C }}</div>
            <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.YES }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.V }}</div>
            <div class="block b1_5x yellow-bkg">{{ $page.frontmatter.text.NO }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.B }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.N }}</div>
            <div class="block cyan-bkg">{{ $page.frontmatter.text.M }}</div>
          </div>
        </div>
      </div>
    </div>
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
  }
}
.speakbook-cover-page {
  .content__cover-footer {
    margin-bottom: 1cm;
  }
}
.block-holder {
  --block-width: 17mm;
  --block-height: 17mm;
  --block-margin: 0.7mm;
  &.b1x {
    width: calc(var(--block-width) + var(--block-margin));
    height: calc(var(--block-width) + var(--block-margin));
  }
  &.b0x {
    width: auto;
  }
  &.b1_5x {
    width: calc(var(--block-width) * 1.5 + var(--block-margin) * 0.5);
  }
  &.b3x {
    width: calc(var(--block-width) * 3 + var(--block-margin) * 3);
  }
  &.b4x {
    width: calc(var(--block-width) * 4 + var(--block-margin) * 4);
  }
  &.b10x {
    width: calc(var(--block-width) * 10 + var(--block-margin) * 10);
  }
  .block {
    box-sizing: border-box;
    margin: calc(var(--block-margin) / 2);
    border: 0.25mm solid var(--color-black);
    border-radius: 2mm;
    text-align: center;
    font-size: 28pt;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    // default b1x
    width: var(--block-width);
    height: var(--block-height);
    &.b1x {
      width: var(--block-width);
      height: var(--block-width);
    }
    &.b0x {
      width: auto;
    }
    &.b1_5x {
      width: calc(var(--block-width) * 1.5 + var(--block-margin) * 0.5);
    }
    &.b3x {
      width: calc(var(--block-width) * 3 + var(--block-margin) * 2);
    }
    &.b4x {
      width: calc(var(--block-width) * 4 + var(--block-margin) * 3);
    }
    &.b10x {
      width: calc(var(--block-width) * 10 + var(--block-margin) * 9);
    }
  }
}
</style>
