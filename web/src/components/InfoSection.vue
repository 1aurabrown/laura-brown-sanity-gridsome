<template>
  <div class="info-section">
    <div class="info-section__content">

      <h2 class="h2 info-section__title" v-html="section.title" />

      <block-content :blocks="section._rawBody"/>
    </div>
  </div>
</template>

<script>
import BlockContent from '~/components/BlockContent'

export default {
  components: {
    BlockContent
  },
  props: {
    section: Object
  }
}
</script>

<style lang="scss">
  .info-section a {
    text-decoration: none;
    position: relative;
    display: inline-block;
    &::after {
      content: '';
      position: absolute;
      border-bottom: 1px solid currentColor;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
</style>
