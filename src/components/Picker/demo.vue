<template>
  <div class="picker-demo">
    <mt-cell title="打开选择器" @click.native="a" is-link></mt-cell>
    <mt-cell title="当前选中" :value="currentValue && currentValue.text"></mt-cell>
    <m-picker :slots="solts" :valueKey="valueKey" :visibleItemCount="5" ref="picker" @change="change" name="jybd"></m-picker>
  </div>
</template>

<script>
import Picker from './index'
import { Cell } from 'mint-ui'
export default {
  name: 'picker-demo',
  components: {
    [Picker.name]: Picker,
    [Cell.name]: Cell
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
    a() {
      this.$refs.picker.open()
    },
    change(v) {
      this.currentValue = v[0]
      console.log(this.currentValue)
    }
  }
}
</script>

<style lang="scss">
  
</style>