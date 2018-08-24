<template>
  <button class="m-btn" :class="size" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'm-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) != -1
      }
    }
  }
}
</script>

<style lang="scss">
.m-btn {
  background-color: #E84A01;
  color: #FFFFFF;
  line-height: 40px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 3px;
  // padding: 0 12px;
  display: block;
  width: 100%;
  &:disabled {
    opacity: .3;
  }
  &.small {
    line-height: 32px;
    font-size: 14px;
    // padding: 0 8px;
    border-radius: 2px;
  }
  &.large {
    line-height: 48px;
    // padding: 0 16px;
  }
}
</style>
