<template>
  <md-portal class="md-overlay" :class="{ 'md-fixed' : mdFixed}" v-on="$listeners" md-transition-name="md-overlay" :md-if="mdVisible"></md-portal>
</template>

<script>
  import MdPortal from 'core/MdPortal/MdPortal'

  export default {
    name: 'MdOverlay',
    components: {
      MdPortal
    },
    props: {
      mdVisible: Boolean,
      mdFixed: Boolean
    }
  }
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: rgba(#000, .6);
    transition: .4s $md-transition-default-timing;
    transition-property: opacity;
    will-change: opacity;

    &.md-fixed {
      position: fixed;
    }
  }

  .md-overlay-enter,
  .md-overlay-leave-active {
    opacity: 0;
  }
</style>
