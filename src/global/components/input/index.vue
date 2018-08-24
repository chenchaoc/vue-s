<template>
  <div class="m-input">
    <input ref="input" :type="type" :pattern="pattern" :value="value" :placeholder="placeholder" :disabled="disabled"
      :readonly="readonly" :maxlength="maxlength" @input.stop.prevent="onInput" @keyup.stop.prevent="onKeyup"
      @paste="onPaste" @focus.stop.prevent="onFocus" @blur.stop.prevent="onBlur" @click.stop.prevent="onClick">
    <i class="iconfont if-close" :class="{visible: showClear && focused && value}" @touchstart.stop="onClearClick"></i>
  </div>
</template>

<script>
export default {
  name: 'm-input',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    pattern: String,
    value: [Number, String],
    format: Function,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    maxlength: Number,
    showClear: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      focused: false
    }
  },
  mounted() {
    this.updateValue(this.value) // 格式化初始值
  },
  methods: {
    updateValue(value) {
      if (this.format) {
        const formattedValue = this.format(value)
        if (formattedValue != value) {
          value = formattedValue
          this.$refs.input.value = formattedValue
        }
      }
      this.$emit('input', value, event)
    },
    onInput(event) {
      if (this.$os.isIos) { // iOS使用input事件回调更新值
        this.updateValue(event.target.value)
      } else {
        this.$emit('input', event.target.value, event)
      }
    },
    onKeyup(event) {
      if (this.$os.isAndroid) { // Android使用keyup事件回调更新值，否则光标位置不正确
        this.updateValue(event.target.value)
      }
      this.$emit('keyup', event)
    },
    onPaste(event) { // 粘贴事件回调更新值
      this.updateValue((event.clipboardData || window.clipboardData).getData('text'))
      this.$emit('paste', event)
    },
    onFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },
    onBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },
    onClearClick() {
      setTimeout(() => { // 清空输入框后聚焦
        this.$refs.input.focus()
      }, 500)
      this.$nextTick(() => {
        // this.value = ''
        this.$emit('input', '')
      })
    },
    onClick(event) { // 防止键盘遮挡输入框
      setTimeout(function () {
        event.target.scrollIntoViewIfNeeded ? event.target.scrollIntoViewIfNeeded() : event.target.scrollIntoView(false)
      }, 0)
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss">
.m-input {
  display: flex;
  align-items: center;
  width: 100%;
  >input {
    flex: 1;
    color: #212121;
  }
  >.if-close {
    width: 20px;
    margin-left: 12px;
    color: #CCCCCC;
    visibility: hidden;
    &.visible {
      visibility: visible;
    }
  }
  .cell-right & {
    margin-left: 12px;
  }
}
</style>
