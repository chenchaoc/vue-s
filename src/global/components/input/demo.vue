<template>
  <div class="demo-input">
    <m-cell>
      <m-cell-item v-for="i in 1" :key="i">
        <label slot="left">姓名</label>
        <m-input slot="right" v-model="name" placeholder="请输入姓名"></m-input>
      </m-cell-item>
      <m-cell-item>姓名：{{name}}</m-cell-item>
      <m-cell-item>
        <label slot="left">银行卡号</label>
        <m-input slot="right" v-model="cardNo" type="tel" placeholder="请输入银行卡号" :format="format"></m-input>
      </m-cell-item>
      <m-cell-item>银行卡号：{{cardNo}}</m-cell-item>
    </m-cell>
  </div>
</template>

<script>
import { Cell, CellItem } from 'ui/cell'
import Input from 'ui/input'

export default {
  name: 'demo-input',
  components: {
    [Cell.name]: Cell,
    [CellItem.name]: CellItem,
    [Input.name]: Input,
  },
  data() {
    return {
      name: '小亲冈',
      cardNo: '1234567890'
    }
  },
  methods: {
    format(value) {
      return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    }
  }
}
</script>

<style lang="scss">
.demo-input {}
</style>
