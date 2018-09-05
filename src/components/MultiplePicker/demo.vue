<template>
  <div class="demo-multiple-picker">
    <m-multiple-picker :list="list"></m-multiple-picker>
    <div class="btn-wrapper">
      <div class="btn color-ff" @click="goSumbit">提交</div>
    </div>
  </div>
</template>

<script>
import MultiplePicker from './index'
import PickerList from './pickerList'
import { Toast } from 'mint-ui'
export default {
  components: {
    [MultiplePicker.name]: MultiplePicker
  },
  data() {
    return {
      list: (new PickerList())
    }
  },
  methods: {
    goSumbit() {
      let params = {}
      for (let i in this.list) {
        if (this.list[i].value == '' && this.list[i].isMust) {
          Toast(this.list[i].error)
          return
        }
      }
      for (let k in this.list) {
        if (this.list[k].reg && this.list[k].isMust && !(this.list[k].reg.test(this.list[k].value))) {
          Toast(this.list[k].regError)
          return
        }
      }
      for (let j in this.list) {
        params[this.list[j].name] = this.list[j].value
      }
      console.log(params)
    }
  }
}
</script>

<style>
  @import '../../global/style/color';
  .btn-wrapper{
    padding: 16px;
  }
  .btn{
    background-color: #3b82f3;
    line-height: 48px;
    text-align: center;
    border-radius: 4px;
  }
</style>
