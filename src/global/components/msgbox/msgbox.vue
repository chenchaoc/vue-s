<template>
  <transition name="m-msgbox">
    <div v-show="show" class="m-msgbox" @touchmove.stop.prevent>
      <div class="m-msgbox-box">
        <div v-if="title" class="m-msgbox-title" v-html="title"></div>
        <div v-if="msg" class="m-msgbox-msg" v-html="msg"></div>
        <div class="m-msgbox-btns">
          <div class="m-msgbox-btn-cancel" v-if="cancelText" @click.stop="cancel" v-html="cancelText"></div>
          <div class="m-msgbox-btn-confirm" @click.stop="confirm" v-html="confirmText || '确认'"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'm-msgbox',
  props: {
    title: String,
    msg: String,
    confirmText: String,
    cancelText: String,
    cancel: Function,
    confirm: Function
  },
  data() {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss">
.m-msgbox {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .54);
  &.m-msgbox-enter{
    .m-msgbox-box {
      transform: scale(.8);
    }
  }
}

.m-msgbox-box {
  width: 288px;
  background-color: #fff;
  border-radius: 12px;
  text-align: center;
  opacity: .87;
  padding-top: 24px;
  transition: transform .3s;
}

.m-msgbox-title {
  font-size: 16px;
  padding: 0 24px;
}

.m-msgbox-msg {
  color: #757575;
  padding: 8px 24px 0;
}

.m-msgbox-btns {
  display: flex;
  border-top: 1px solid #BEC1C5;
  font-size: 16px;
  color: #007AFF;
  margin-top: 24px;
}

.m-msgbox-btn-cancel,
.m-msgbox-btn-confirm {
  flex: 1;
  padding: 14px 24px;
}

.m-msgbox-btn-cancel {
  border-right: 1px solid #BEC1C5;
}

// .m-msgbox-btn-confirm {
//   font-weight: bold;
// }
</style>
