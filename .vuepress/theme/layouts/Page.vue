<template>
  <Content :class="($page.frontmatter.rtl ? 'rtl' : '')" :style="$page.frontmatter.inlinecss" />
</template>

<script>
export default {
  name: 'Page',
  components: {},
  data () {
    return {
      isSidebarOpen: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
  }
}
</script>
<style lang="scss">
@import "@styles/index.scss";
</style>
