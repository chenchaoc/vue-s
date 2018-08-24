<template>
  <transition name="m-actionsheet">
    <div class="m-actionsheet" v-show="active" @click.stop="close" @touchmove.stop.prevent>
      <div class="m-actionsheet-body">
        <div class="m-actionsheet-item" v-for="(item, i) in items" :key="i" v-html="item.label" @click.stop="onItemClick(item, i)"></div>
        <div v-if="cancel" class="m-actionsheet-item actionsheet-item-cancel" v-html="cancel===true ? '取消': cancel" @click.stop="close"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'm-actionsheet',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array, // [{label: '菜单项目名称', method: Function, close: true}]
      required: true
    },
    cancel: [Boolean, String]
  },
  computed: {
    active() {
      return this.show
    }
  },
  methods: {
    close() {
      this.$emit('update:show', false)
    },
    onItemClick(item, index) {
      if (typeof item.method === 'function') {
        item.method(item, index)
      }
      if (item.close !== false) {
        this.close()
      }
    }
  }
}
</script>

<style lang="scss">
.m-actionsheet {
  background-color: rgba(0, 0, 0, .54);
  position: fixed;
  z-index: 500;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
}

.m-actionsheet-enter,
.m-actionsheet-leave-to {
  background-color: transparent;
  .m-actionsheet-body {
    transform: translate3d(0, 100%, 0);
  }
}

.m-actionsheet-body {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 500;
  background-color: #E6E6E6;
  text-align: center;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transition: transform .3s;
}

.m-actionsheet-item {
  background-color: #fff;
  padding: 13px 16px;
  font-size: 15px;
  margin-top: 1px;
  &.actionsheet-item-cancel {
    margin-top: 8px;
  }
}
</style>
