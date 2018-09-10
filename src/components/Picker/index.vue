<template>
  <mt-popup v-model="visible" position="bottom" class="m-picker" style="width: 100%;" @touchmove.native.prevent>
    <mt-picker
      :slots="slots"
      ref="picker"
      :valueKey="valueKey"
      :itemHeight="itemHeight"
      :visible-item-count="visibleItemCount"
      @change="handleChange"
      :name="name"
      show-toolbar
    >
      <div class="picker-toolbar-box flex">
        <span class="mint-datetime-action f16 flex-1 text-center" @click.stop="handleCancel">{{cancelText}}</span>
        <span class="mint-datetime-action f16 flex-1 text-center" @click.stop="handleConfirm">{{confirmText}}</span>
      </div>
    </mt-picker>
  </mt-popup>
</template>

<script>
import { Popup, Picker } from 'mint-ui'
export default {
  name: 'm-picker',
  components: {
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  props: {
    cancelText: {
      type: String,
      default: '取消'
    },
    itemHeight: {
      type: Number,
      default: 48
    },
    name: String,
    confirmText: {
      type: String,
      default: '确定'
    },
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: String,
    value: null, //接受父组件传递过来的v-model的值
    slots: {
      type: Array
    }
  },
  data() {
    return {
      visible: false,
      values: [],
      $picker: null,
      selectedValues: []
    }
  },
  mounted() {
    this.$picker = this.$refs.picker
    this.initValues()
  },
  methods: {
    open() {
      this.visible = true
    },
    initValues() {
      let { values } = this
      this.slots.forEach((slot, index) => {
        values[index] = slot.values[slot.defaultIndex]
      })
      this.selectedValues = values
    },
    handleConfirm() {
      this.visible = false
      this.selectedValues = [...this.values]
      this.$emit('confirm', this.values, this.name)
    },
    handleCancel() {
      this.visible = false
      this.selectedValues.forEach((item, index) => {
        this.$picker.setSlotValue(index, item)
      })
    },
    handleChange(picker, values) {
      this.values = picker.values
      this.$emit('change', this.values)
    }
  },
}
</script>

<style lang="scss">
  .picker-toolbar-box{
    position: relative;
    color: #26a2ff;
    line-height: 40px;
    &::before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      transform: scaleY(0.5);
      background-color: #eaeaea;
    }
  }
</style>
