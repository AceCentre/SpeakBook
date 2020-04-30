<template>
  <div class="speakbook-text-four-color-bkg pos-rel">
    <div class="abs-fill-parent bkg-wrp">
      <div class="purple-bkg"></div>
      <div class="green-bkg"></div>
      <div class="cyan-bkg"></div>
      <div class="yellow-bkg"></div>
    </div>
    <span class="text">{{ text }}</span>
  </div>
</template>

<script>

export default {
  name: 'SpeakBookTextFourColorBkg',
  props: [ 'text' ],
}
</script>

<style lang="scss">
.speakbook-text-four-color-bkg {
  display: inline-block;
  .bkg-wrp {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    & > div {
      flex-grow: 1;
    }
  }
  .text {
    z-index: 1;
    position: relative;
  }
}
</style>
