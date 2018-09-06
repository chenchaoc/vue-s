<template>
  <div class="demo-picker">
    <m-header title="demo-picker"></m-header>
    <div class="picker-wrapper">
      <mt-cell title="打开选择器" @click.native="showPicker" is-link></mt-cell>
      <mt-cell title="当前选中" :value="currentValue && currentValue.text"></mt-cell>
      <m-picker :slots="solts" :valueKey="valueKey" :visibleItemCount="5" ref="picker" @change="change" @confirm="confirm" name="jybd"></m-picker>
    </div>
  </div>
</template>

<script>
import Picker from './index'
import { Cell } from 'mint-ui'
import Header from '../Header/index'
export default {
  name: 'picker-demo',
  components: {
    [Picker.name]: Picker,
    [Cell.name]: Cell,
    [Header.name]: Header
  },
  data() {
    return {
      solts: [{
        values: [
          {
            text: '甲',
            mode: 1,
          }, {
            text: '乙',
            mode: 2
          }, {
            text: '丙',
            mode: 3
          }, {
            text: '丁',
            mode: 4
          }
        ],
        defaultIndex: 2
      }],
      valueKey: 'text',
      currentValue: null
    }
  },
  methods: {
    showPicker() {
      this.$refs.picker.open()
    },
    confirm(v) {
      console.log(v)
      this.currentValue = v[0]
    },
    change(v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss">
  .picker-wrapper{
    margin-top: 8px;
  }
</style>