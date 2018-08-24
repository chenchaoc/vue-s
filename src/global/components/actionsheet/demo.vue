<template>
  <div class="demo-actionsheet">
    <div class="padding-16">
      <m-button @click.native="show = true">显示菜单: {{show}}</m-button>
    </div>
    <div class="padding-16">
      <m-button @click.native="show2 = true">显示菜单2: {{show2}}</m-button>
    </div>
    <m-actionsheet :show.sync="show" :items="items" :cancel="true"></m-actionsheet>
    <m-actionsheet :show.sync="show2" :items="items2" :cancel="cancel2"></m-actionsheet>
  </div>
</template>

<script>
import Button from 'ui/button'
import Actionsheet from 'ui/actionsheet'

export default {
  name: 'demo-actionsheet',
  components: {
    [Button.name]: Button,
    [Actionsheet.name]: Actionsheet
  },
  data() {
    return {
      show: false,
      items: [{
        label: '菜单A',
        method: (item) => console.info(item),
        close: false
      }, {
        label: '菜单B',
        method: (item) => console.info(item),
        close: true
      }],

      show2: false,
      items2: [{
        label: '菜单A',
        method: (item) => console.info(item)
      }, {
        label: '菜单B',
        method: (item) => console.info(item)
      }],
      cancel2: '关闭'
    }
  }
}
</script>

<style lang="scss">
.demo-actionsheet {}
</style>
