<template>
  <div class="m-multiple-picker bg-c-ff">
    <div class="picker-cell flex" v-for="(item, index) in list" :key="index">
      <span class="cell-title" v-if="item.title">{{item.title}}</span>
      <input class="flex-1 text-right" v-if="['text', 'tel'].includes(item.type) && !['mobile', 'bankCardNo'].includes(item.name)" :type="item.type" :maxlength="item.maxlength"  :placeholder="item.placeholder" v-model="item.value" :disabled="item.disabled" @input="formatInput($event, item)">
      <input class="flex-1 text-right" v-if="['mobile', 'bankCardNo'].includes(item.name)" type="tel" :maxlength="item.maxlength"  :placeholder="item.placeholder" v-model="item.showValue" :disabled="item.disabled" @input="formatInput($event, item)">
      <span class="cell-choose flex-1 text-right" v-if="['datetime', 'date', 'choose'].includes(item.type)" @click="openPicker(item.name, item.value, item.disabled)">
        <span v-if="item.showValue">{{item.showValue}}</span>
        <span v-else class="no-value">请选择</span>
      </span>
      <textarea v-if="item.type == 'textarea'" cols="100" rows="5" :placeholder="item.placeholder" v-model="item.value" :disabled="item.disabled"></textarea>
      <i class="cell-icon iconfont if-arrow-right color-75" v-if="item.showIcon && !item.disabled"></i>
      <mt-datetime-picker
        v-if="['date', 'datetime'].includes(item.type)"
        :ref="item.name"
        :type="item.type"
        :startDate="item.startDate"
        :endDate="item.endDate"
        @confirm="dateConfirm($event, item.name, item.type)"> 
      </mt-datetime-picker>
      <m-picker
        v-if="item.type == 'choose'"
        valueKey="text"
        :ref="item.name"
        :name="item.name"
        :slots="item.slots"
        @confirm="chooseConfirm($event, item.name, item.type)">
      </m-picker>
    </div>
  </div>
</template>

<script>
import MPicker from '../Picker'
import { DatetimePicker } from 'mint-ui'
export default {
  name: 'm-multiple-picker',
  components: {
    [MPicker.name]: MPicker,
    [DatetimePicker.name]: DatetimePicker
  },
  props: {
    list: {
      type: Array
    }
  },
  methods: {
    formatInput(e, item) {
      if (item.name == 'mobile') { // 3 4 4格式电话号码
        item.value = e.target.value.replace(/\D/g, '')
        item.showValue = util.formatMobile(e.target.value)
      } else if (item.name == 'bankCardNo') { //4 4 4格式化银行卡号
        item.value = e.target.value.replace(/\D/g, '')
        item.showValue = util.formatBankcard(e.target.value)
      }
    },
    chooseConfirm(value, name, type) { //slots选择
      this.list.forEach((item, index) => {
        if (item.name == name) {
          item.value = value[0].mode
          item.showValue = value[0].text
        }
      })
    },
    dateConfirm(e, name, type) { //日期选择
      const showValue = type == 'date' ? util.fullDate(e.getTime()) : util.fullTime(e.getTime())
      for (let index in this.list) {
        if (name == this.list[index].name) {
          this.list[index].value = e.getTime()
          this.list[index].showValue = showValue
          return
        }
      }
    },
    openPicker(name, value, disabled) {
      if (disabled) return
      this.$refs[name][0].open()
    }
  }
}
</script>

<style lang="scss">
  .picker-cell{
    padding: 12px 16px;
    position: relative;
    overflow: hidden;
    line-height: 24px;
    &:not(:last-child)::before{
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      margin-left: 16px;
      border-bottom: 1px solid #e6e6e6;
    }
    input::-webkit-input-placeholder{
      color: #bdbdbd;
      opacity: 1;
    }
    input[disabled]{
      background-color: #fff;
    }
    .cell-title{
      width: 5em;
    }
    .no-value{
      color: #bdbdbd;
    }
    .cell-icon{
      font-weight: bold;
      margin-left: 6px;
    }
    textarea{
      border: solid 1px #e5e5e5;
      text-align: left;
      line-height: 24px;
      padding: 8px;
    }
  }
</style>
