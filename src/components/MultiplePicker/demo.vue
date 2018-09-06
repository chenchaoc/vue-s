<template>
  <div class="demo-multiple-picker">
    <m-header title="demo-multiple-picker"></m-header>
    <div class="multiple-picker-wrapper">
      <m-multiple-picker :list="list"></m-multiple-picker>
    </div>
    <div class="btn-wrapper">
      <div class="btn color-ff" @click="goSumbit">提交</div>
    </div>
  </div>
</template>

<script>
import MultiplePicker from './index'
import PickerList from './pickerList'
import Header from '../Header/index'
import { Toast } from 'mint-ui'
export default {
  components: {
    [MultiplePicker.name]: MultiplePicker,
    [Header.name]: Header
  },
  data() {
    return {
      list: (new PickerList())
    }
  },
  mounted() {
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
        if (list[k].isMust && list[k].reg && !(list[k].reg.test(list[k].value))) {
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
  .multiple-picker-wrapper{
    margin-top: 8px;
  }
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
