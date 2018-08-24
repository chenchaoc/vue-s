<template>
  <div class="m-accordion-item" :class="{'accordion-item-opened': opened}">
    <div class="accordion-title" @click="toggleOpened">
      <div class="accordion-left">
        <slot name="title">{{title}}</slot>
      </div>
      <i class="accordion-icon iconfont if-arrow-down"></i>
    </div>
    <div class="accordion-body" v-show="opened">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-accordion-item',
  props: {
    title: String,
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      opened: this.isOpen
    }
  },
  methods: {
    toggleOpened() {
      this.$parent.$children.forEach(item => {
        if (item !== this) {
          item.opened = false
        }
      })
      this.opened = !this.opened
    }
  }
}
</script>

<style lang="scss">
.m-accordion-item {
  border-bottom: 1px solid #E8E8E8;
  >.accordion-title {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 16px;
    >.accordion-left {
      flex: 1;
      color: #212121;
    }
  }
  >.accordion-body {
    color: #757575;
  }
  &:last-child {
    border-bottom: none;
  }
  .accordion-icon{
    transition: transform 0.3s;
  }
  &.accordion-item-opened {
    >.accordion-body {
      padding: 10px 10px 10px 0;
      border-top: 1px solid #E8E8E8;
    }
    .accordion-icon {
      transform: rotate(180deg);
    }
  }
}
</style>
