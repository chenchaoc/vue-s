<template>
  <div class="demo-toast">
    <m-button @click.native="show">显示消息1</m-button><br>
    <m-button @click.native="show2">显示消息2</m-button><br>
    <m-button @click.native="show3">显示消息3</m-button>
  </div>
</template>

<script>
import Button from 'ui/button'
import Msgbox from 'ui/msgbox'

export default {
  name: 'demo-toast',
  components: {
    [Button.name]: Button
  },
  methods: {
    show() {
      Msgbox('提示', '测试一下' + Math.random()).then(() => console.info('确认'), () => console.info('取消'))
    },
    show2() {
      Msgbox('测试一下' + Math.random(), {
        cancelText: '取消',
        confirmText: '我知道了'
      }).then(() => console.info('确认'), () => console.info('取消'))
    },
    show3() {
      clearTimeout(this.timer)
      const p = Msgbox({
        title: '信息提示',
        msg: `<span class="color-p">测试一下${Math.random()}</span>`,
        cancelText: '3秒关闭',
        confirmText: '确认'
      })
      p.then(() => console.info('确认'), () => console.info('取消'))
      this.timer = setTimeout(() => p.close(), 3000)
    }
  }
}
</script>

<style lang="scss">
.demo-toast {}
</style>
