<template>
  <div :class="'pos-rel grid-page-item item-type-' + (item.type||'none')">
    <div v-if="item.type == 'table'" class="abs-fill-parent overflow-hidden">
      <table :class="'table rotate-90 ' + (item.table_extra_classes||'')">
        <tbody>
          <tr v-for="row in item.rows">
            <td>
              <div class="pos-rel flex-h items-align-center overflow-hidden" :style="Object.assign({'height':item.rowheight,'flex-direction':item.reverserow?'row-reverse':'row'}, item.row_inlinecss, row.inlinecss)">
                <Content v-if="row.image" class="img-wrp ml-1 p-1" :style="Object.assign({}, item.image_inlinecss, row.image_inlinecss)" :slot-key="row.image" />
                <div v-if="row.text_key" class="abs-fill-parent text-center fsize-12 line-height-1 bold" :style="Object.assign({}, item.text_inlinecss, row.text_inlinecss)">{{ $page.frontmatter.text[row.text_key] }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="item.type == 'fig'" :class="'rotate-90 fig flex-v justify-content-center items-align-center' + (item.fixed ? ' fixed-fig' : '')">
      <div v-if="item.text_key && item.text_at_top" class="item-txt fsize-10" :style="item.text_inlinecss">{{ $page.frontmatter.text[item.text_key] }}</div>
      <Content v-if="item.image" class="img-wrp" :style="item.image_inlinecss" :slot-key="item.image" />
      <div v-if="item.text_key && !item.text_at_top" class="item-txt fsize-10" :style="item.text_inlinecss">{{ $page.frontmatter.text[item.text_key] }}</div>
      <Content v-if="item.text_slotname" :style="item.text_inlinecss" :slot-key="item.text_slotname" />
    </div>
    <div v-if="item.type == 'custom'">
      <Content :slot-key="item.slotname" />
    </div>
    <div v-if="item.type == 'letters-grid'" class="letters-grid rotate-90 flex-h flex-wrap text-black-stroke-1 fsize-13 bold items-align-center p-3" :style="item.lg_inlinecss">
      <div v-for="entry in item.entries" class="entry" :style="entry.inlinecss">
        {{ $page.frontmatter.text[entry.text_key] }}
      </div>
    </div>

    <div v-if="item.type == 'table02'" class="abs-fill-parent overflow-hidden">
      <table :class="'table rotate-90 ' + (item.table_extra_classes||'')">
        <tbody>
          <tr v-for="row in item.rows">
            <td>
              <div class="pos-rel flex-h items-align-center overflow-hidden" :style="Object.assign({'height':item.rowheight,'flex-direction':item.reverserow?'row-reverse':'row'}, item.row_inlinecss, row.inlinecss)">
                <Content v-if="row.image" class="img-wrp ml-1 p-1" :style="Object.assign({}, item.image_inlinecss, row.image_inlinecss)" :slot-key="row.image" />
                <div v-if="row.text_key" class="mx-2 fsize-9 line-height-1 bold" :style="Object.assign({}, item.text_inlinecss, row.text_inlinecss)">{{ $page.frontmatter.text[row.text_key] }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Content v-if="item.overlay_slotname" :slot-key="item.overlay_slotname" />
    </div>

    <div v-if="item.type == 'coloured-table'" class="abs-fill-parent overflow-hidden">
      <table :class="'table rotate-90 ' + (item.table_extra_classes||'')">
        <tbody>
          <tr v-for="(row,index) in (item.rows||[{},{},{},{}]).slice(0, 4)" :class="'r'+(index+1)">
            <td>
              <div class="flex-h items-align-center" :style="Object.assign({'height':item.rowheight}, item.row_inlinecss, row.inlinecss)">
                <div v-if="row.text_key" class="flex-grow-1 text-center fsize-12 line-height-1 bold" :style="Object.assign({}, item.text_inlinecss, row.text_inlinecss)">{{ $page.frontmatter.text[row.text_key] }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="item.type == 'coloured-table02'" class="abs-fill-parent overflow-hidden">
      <table :class="'table rotate-90 ' + (item.table_extra_classes||'')">
        <tbody>
          <tr v-for="(row,index) in (item.rows||[{},{},{},{}]).slice(0, 4)" :class="'r'+(index+1)">
            <td>
              <div class="flex-h items-align-center" :style="Object.assign({'height':item.rowheight}, item.row_inlinecss, row.inlinecss)">
                <div v-if="row.text_key" class="flex-grow-1 text-center fsize-9 line-height-1 bold" :style="Object.assign({}, item.text_inlinecss, row.text_inlinecss)">{{ $page.frontmatter.text[row.text_key] }}</div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Content v-if="item.overlay_slotname" :slot-key="item.overlay_slotname" />
    </div>

    <div v-if="item.type == 'coloured-circle'" :class="['circle',item.colour].join(' ')">
    </div>

    <div v-if="item.type == 'text-with-coloured-circle'" :class="['rotate-90',item.fixed?'fixed':''].filter((a)=>!!a).join(' ')">
      <div v-if="item.text_key && item.text_at_top" class="item-txt fsize-10" :style="item.text_inlinecss">{{ $page.frontmatter.text[item.text_key] }}</div>
      <div class="circle-wrp">
        <div :class="['circle',item.colour].join(' ')"></div>
      </div>
      <div v-if="item.text_key && !item.text_at_top" class="item-txt fsize-10" :style="item.text_inlinecss">{{ $page.frontmatter.text[item.text_key] }}</div>
      <Content v-if="item.text_slotname" :style="item.text_inlinecss" :slot-key="item.text_slotname" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'GridPageItem',
  props: [ 'item' ],
}
</script>

<style lang="scss">
.grid-page-item {
  &.item-type-coloured-circle {
    display: flex;
    flex-direction: row;
    align-items: center;
    .circle {
      margin: 0 auto;
      width: 30mm;
      height: 30mm;
      border-radius: 15mm;
      &.purple { background-color: var(--color-purple); }
      &.green { background-color: var(--color-green); }
      &.cyan { background-color: var(--color-cyan); }
      &.yellow { background-color: var(--color-yellow); }
    }
  }
  &.item-type-text-with-coloured-circle {
    .circle-wrp {
      display: flex;
      flex-direction: row;
      align-items: center;
      .circle {
        margin: 0 auto;
        width: 30mm;
        height: 30mm;
        border-radius: 15mm;
        &.purple { background-color: var(--color-purple); }
        &.green { background-color: var(--color-green); }
        &.cyan { background-color: var(--color-cyan); }
        &.yellow { background-color: var(--color-yellow); }
      }
    }
    .fixed {
      width: calc(var(--grid-item-height) - 1mm);
      height: calc(var(--grid-item-width) - 1mm);
      box-sizing: content-box;
      &.rotate-90 {
        transform-origin: 0 0;
        transform: rotate(90deg) translate(0.5mm, calc(-1 * var(--grid-item-width) + 0.5mm));
      }
    }
  }
  &.item-type-coloured-table,
  &.item-type-coloured-table02 {
    .table {
      .r1 { background-color: var(--color-purple); }
      .r2 { background-color: var(--color-green); }
      .r3 { background-color: var(--color-cyan); }
      .r4 { background-color: var(--color-yellow); }
      td {
        border: none;
      }
    }
  }
  .table {
    width: calc(var(--grid-item-height) - 1mm);
    height: calc(var(--grid-item-width) - 1mm);
    box-sizing: content-box;
    &.rotate-90 {
      transform-origin: 0 0;
      transform: rotate(90deg) translate(0.5mm, calc(-1 * var(--grid-item-width) + 0.5mm));
    }
    border-collapse: collapse;
    td {
      border: 0.5mm solid var(--color-black);
      .img-wrp {
        display: inline-block;
        transform: rotate(-90deg);
      }
    }
  }
  .fixed-fig {
    width: calc(var(--grid-item-height) - 1mm);
    height: calc(var(--grid-item-width) - 1mm);
    box-sizing: content-box;
    &.rotate-90 {
      transform-origin: 0 0;
      transform: rotate(90deg) translate(0.5mm, calc(-1 * var(--grid-item-width) + 0.5mm));
    }
  }
  .fig {
    .img-wrp {
      display:inline-block;
      transform: rotate(-90deg);
    }
    .item-txt {
      white-space: nowrap;
    }
  }
  &.item-type-custom {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .letters-grid {
    width: var(--grid-item-height);
    height: var(--grid-item-width);
    box-sizing: border-box;
    &.rotate-90 {
      transform-origin: 0 0;
      transform: rotate(90deg) translate(0, calc(-1 * var(--grid-item-width)));
    }
    .entry {
      width: 33%;
      text-align: center;
    }
  }
}
.rtl {
  .letters-grid {
    &.rotate-90 {
      transform: translate(calc(var(--grid-item-height) - var(--grid-item-width)), calc(var(--grid-item-height))) rotate(-90deg);
    }
  }
  .fig {
    &.rotate-90 { transform: rotate(-90deg); }
  }
  .fixed-fig {
    &.rotate-90 {
      transform: translate(calc(var(--grid-item-height) - var(--grid-item-width) - 0.5mm), calc(var(--grid-item-height) - 0.5mm)) rotate(-90deg);
    }
  }
  .grid-page-item {
    .table {
      &.rotate-90 {
        transform-origin: 0 0;
        transform: translate(100%, 0) rotate(90deg) translate(0.5mm, 0.5mm);
      }
    }
  }
}
</style>
