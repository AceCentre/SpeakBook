<template>
  <div class="pos-rel height-100ph grey-color">
    <div class="height-100ph mx-auto flex-v fsize-8 v-oneline-fsize-8 bold" :style="textstyle">
      <div v-for="i in parseInt(textlen)" class="wmode-vertical-lr rotate-180 flex-grow-1 text-center">{{ text }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'CutOutSideGuide',
  props: [ 'textlen', 'text', 'textstyle' ],
}
</script>
