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
          <SpeakBookTextFourColorBkg class="speakbook-title fsize-13 p-2 bold" :text="$page.frontmatter.text.speakbook"></SpeakBookTextFourColorBkg>
          <div class="edition">
            <Content slot-key="star-16p-bkg" class="abs-fill-parent" />
            <div class="text abs-fill-parent flex-v items-align-center">
              <span class="nth">{{ $page.frontmatter.text.edition_nth }}</span>
              <SpeakBookTextFourColorBkg class="edition-label" :text="$page.frontmatter.text.edition"></SpeakBookTextFourColorBkg>
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
    <div v-for="(ipage, ipageindex) in $page.frontmatter.instruction_pages" class="page instruction-page">
      <div v-for="fltelm in ipage.floating_elements" :class="'floating-element float-' + fltelm.dir + ' floating-element-' + (fltelm.mode||'default') + '-mode'" :style="fltelm.inlinecss">
        <Content v-if="fltelm.slotname" class="floating-element-body" :slot-key="fltelm.slotname" />
      </div>
      <div>
        <Content :slot-key="ipage.content_slotname" />
      </div>
    </div>
    <!-- figure page 01 -->
    <div class="page flex-h">
      <div class="flex-v flex-grow-1">
        <div class="pos-rel" style="height:7cm">
          <div class="rotate-90 abs-fill-parent">
            <table class="speakbook-table-01 rotate-90">
              <tbody>
                <tr>
                  <td><img src="heart" /></td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex-grow-1 flex-v pos-rel">
          <div class="rotate-90 abs-fill-parent">
            <div class="flex-grow"></div>
            <img class="" src="square" />
            <h2 class="allcap">{{ $page.frontmatter.text.home_page }}</h2>
          </div>
        </div>
        <div class="pos-rel">
          <div class="rotate-90 abs-fill-parent">
            <table class="speakbook-table-01 flex-grow-1">
              <tbody>
                <tr>
                  <td><img src="heart" /></td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div class="flex-v flex-grow-1">
        <div class="fig1"></div>
        <div class="flex-grow-1"></div>
        <div class="fig2"></div>
      </div>

      <div class="flex-v flex-grow-1">
        <div class="pos-rel" style="height:7cm">
          <div class="rotate-90 abs-fill-parent">
            <table class="speakbook-table-01 rotate-90">
              <tbody>
                <tr>
                  <td><img src="heart" /></td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex-grow-1 flex-v pos-rel">
          <div class="rotate-90 abs-fill-parent">
            <div class="flex-grow"></div>
            <img class="" src="square" />
            <h2>{{ $page.frontmatter.text.home_page }}</h2>
          </div>
        </div>
        <div class="flex-grow-1 pos-rel">
          <div class="rotate-90 abs-fill-parent">
            <table class="speakbook-table-01 flex-grow-1">
              <tbody>
                <tr>
                  <td><img src="heart" /></td>
                  <td>Text</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  </div>
      <!--
      polygon(0 calc(50% - 1cm), 0 calc(50% + 1cm),
              100% calc(50% + 1cm), 100% calc(50% - 1cm))
-->
</template>

<script>
import SpeakBookTextFourColorBkg from '@theme/global-components/SpeakBookTextFourColorBkg.vue'

export default {
  name: 'SpeakBook',

  components: {
    SpeakBookTextFourColorBkg,
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
        font-size: 15pt;
      }
      .small-text {
        font-size: 6pt;
      }
      .speakbook-text-four-color-bkg {
        border: 1px solid $dark-stroke;
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

</style>
