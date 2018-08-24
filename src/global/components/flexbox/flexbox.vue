<template>
  <div class="m-flexbox" :class="'flexbox-' + direction">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-flexbox',
  props: {
    direction: {
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) != -1
      },
      default: 'horizontal'
    }
  }
}
</script>

<style lang="scss">
.m-flexbox {
  display: flex;
  align-items: center;
  &.flexbox-vertical {
    flex-direction: column;
    height: 100%;
  }
}
</style>
