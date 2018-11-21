<template>
  <div class="wyb-mine-index">
    mine
    <div @click="popupVisible = true">选择地址</div>
    <mt-popup v-model="popupVisible" position="bottom" :style="{'width': '100%'}">
      <mt-picker :slots="myAddressSlots" @change="onMyAddressChange" ></mt-picker>
    </mt-popup>
    <p>地址3级联动：{{myAddressProvince}}  {{myAddressCity}} {{myAddresscounty}}</p>    
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '../../components/Btab'
import { Picker, Popup } from 'mint-ui'
import myaddress from '../components/pca.json'
export default {
  components: {
    [CommonTab.name]: CommonTab,
    [Picker.name]: Picker,
    [Popup.name]: Popup
  },
  data() {
    return {
      popupVisible: false,
      myAddressSlots: [
        {
          flex: 1,
          defaultIndex: 1,
          values: Object.keys(myaddress), //省份数组
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: [],
          className: 'slot3',
          textAlign: 'center'
        },
        {
          divider: true,
          content: '-',
          className: 'slot4'
        },
        {
          flex: 1,
          values: [],
          className: 'slot5',
          textAlign: 'center'
        }
      ],
      myAddressProvince: '省',
      myAddressCity: '市',
      myAddresscounty: '区/县'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myAddressSlots[0].defaultIndex = 0
    })
  },
  methods: {
    onMyAddressChange(picker, values) {
      //console.log(picker)
      //console.log(values)
      if (myaddress[values[0]]) {
        picker.setSlotValues(1, Object.keys(myaddress[values[0]])) //  Object.keys()会返回一个数组，当前省的数组
        picker.setSlotValues(2, myaddress[values[0]][values[1]]) //  区/县数据就是一个数组
        //console.log(Object.keys(myaddress[values[0]]))
        this.myAddressProvince = values[0]
        this.myAddressCity = values[1]
        this.myAddresscounty = values[2]
      }
    }
  }
}
</script>

<style lang="scss">
  
</style>