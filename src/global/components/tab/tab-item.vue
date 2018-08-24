<template>
  <div class="m-tab-item" :class="{'item-active': selected}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-tab-item',
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    tabKey: String
  },
  data() {
    return {
      selected: this.active
    }
  },
  created() {
    this.$parent.tabItemCreated(this)
  },
  destroyed() {
    this.$parent.tabItemDestroyed(this)
  }
}
</script>

<style lang="scss">
.m-tab-item {
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateX(-100%);
  &.item-active {
    position: relative;
    transform: translateX(0);
    /* transition: transform .3s;
    ~.m-tab-item {
      transform: translateX(100%);
    } */
  }
}
</style>
