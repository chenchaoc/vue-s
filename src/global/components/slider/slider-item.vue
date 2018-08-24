<template>
  <div class="m-slider-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-slider-item',
  mounted() {
    this.$parent.init()
  }
}
</script>

<style lang="scss">
.m-slider-item {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  a {
    display: block;
  }
  img {
    width: 100%;
  }
}
</style>
