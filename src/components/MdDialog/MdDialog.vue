<template>
  <md-portal class="md-dialog" :class="[$mdActiveTheme]" md-transition-name="md-dialog" :md-if="mdActive">
    <slot />
  </md-portal>
</template>

<script>
import MdComponent from 'core/MdComponent'
import MdPortal from 'core/MdPortal/MdPortal'

export default new MdComponent({
  name: 'MdDialog',
  components: {
    MdPortal
  },
  props: {
    mdActive: Boolean
  }
})
</script>

<style lang="scss">
  @import "~components/MdAnimation/variables";

  .md-dialog {
    transition: .3s $md-transition-default-timing;
  }
</style>
