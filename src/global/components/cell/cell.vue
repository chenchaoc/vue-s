<template>
  <div class="m-cell">
    <div v-if="title" class="cell-title" v-html="title"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-cell',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.m-cell {
  border-bottom: 1px solid #E6E6E6;
  >.cell-title {
    padding: 8px 16px;
    color: #757575;
    border-bottom: 1px solid #E6E6E6;
  }
}
</style>
