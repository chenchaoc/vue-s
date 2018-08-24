<template>
  <div class="m-btab-item" :class="{'item-active': selected}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'm-btab-item',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    btabKey: String
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
.m-btab-item {
  position: absolute;
  top: 0;
  width: 100%;
  transform: translateX(-100%);
  &.item-active {
    position: relative;
    transform: translateX(0);
  }
}
</style>
