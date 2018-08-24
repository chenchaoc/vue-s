<template>
  <div class="m-cell-item">
    <div class="cell-left" v-if="$slots.left">
      <slot name="left"></slot>
    </div>
    <slot></slot>
    <div class="cell-right" v-if="$slots.right || icon">
      <slot name="right"></slot>
      <i class="cell-icon iconfont" :class="icon" v-if="icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-cell-item',
  props: {
    icon: String
  }
}
</script>

<style lang="scss">
.m-cell-item {
  position: relative;
  display: flex;
  overflow: hidden;
  padding: 12px 16px;
  background-color: #fff;
  &:first-of-type {
    border-top: 1px solid #E6E6E6;
  }
  &:not(:last-child):after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-left: 16px;
    border-bottom: 1px solid #E6E6E6;
  }
  >.cell-left {
    display: flex;
  }
  >.cell-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    color: #757575;
    >.cell-icon {
      width: 14px;
      margin-left: 8px;
    }
  }
}
</style>
