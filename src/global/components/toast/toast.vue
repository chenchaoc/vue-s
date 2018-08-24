<template>
  <transition name="m-toast">
    <div v-show="show" class="m-toast" :class="'toast-'+position">
      <i v-if="icon" class="m-toast-icon iconfont" :class="icon"></i>
      <div class="m-toast-msg" v-html="msg"></div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'm-toast',
  props: {
    msg: String,
    position: {
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) != -1
      },
      default: 'middle'
    },
    icon: String
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
.m-toast {
  position: fixed;
  z-index: 1500;
  left: 50%;
  padding: 8px 16px;
  background-color: rgba(0, 0, 0, .87);
  border-radius: 4px;
  color: #fff;
  max-width: 80%;
  text-align: center;
  transform: translateX(-50%);
  transition: opacity .3s linear;
  &.toast-top {
    top: 50px;
  }
  &.toast-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.toast-bottom {
    bottom: 50px;
  }
  &.m-toast-enter,
  &.m-toast-leave-to {
    opacity: 0;
  }
  &.m-toast-enter-to {
    opacity: 1;
  }
}

.m-toast-icon {
  font-size: 32px;
  ~.m-toast-msg {
    min-width: 68px;
  }
}
</style>
