<template>
  <div class="m-flexbox-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-flexbox-item'
}
</script>

<style lang="scss">
.m-flexbox-item {
  flex: 1;
  .m-flexbox.flexbox-vertical & {
    width: 100%;
  }
}
</style>
