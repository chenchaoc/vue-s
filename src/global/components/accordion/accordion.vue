<template>
  <m-panel class="m-accordion" :title="title">
    <template v-if="$slots.title" slot="title">
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </m-panel>
</template>

<script>
import Panel from 'ui/panel'

export default {
  name: 'm-accordion',
  components: {
    [Panel.name]: Panel
  },
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.m-accordion {
  margin-top: 8px;
  &.m-panel>.panel-body {
    padding: 0 0 0 16px;
  }
}
</style>
