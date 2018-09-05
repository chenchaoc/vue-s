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
  mounted() {
    console.log(process.env.GLOBAL_ENV)
  },
  methods: {
    goSumbit() {
      let params = {}
      const { list } = this
      for (let i in list) {
        if (list[i].value == '' && list[i].isMust) {
          Toast(list[i].error)
          return
        }
      }
      for (let k in list) {
        if (list[k].reg && list[k].isMust && !(list[k].reg.test(list[k].value))) {
          Toast(list[k].regError)
          return
        }
      }
      for (let j in list) {
        params[list[j].name] = list[j].value
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
