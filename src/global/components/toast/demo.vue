<template>
  <div class="demo-toast">
    <m-button @click.native="show">显示消息</m-button><br>
    <m-button @click.native="show2">显示消息带图标</m-button><br>
    <m-button @click.native="show3">显示消息3000</m-button><br>
    <m-button @click.native="close">关闭消息</m-button>
  </div>
</template>

<script>
import Button from 'ui/button'
import Toast from 'ui/toast'

export default {
  name: 'demo-toast',
  components: {
    [Button.name]: Button
  },
  methods: {
    show() {
      this.instance = Toast('测试一下' + Math.random())
    },
    show2() {
      this.instance = Toast('测试一下' + Math.random(), {
        icon: 'if-success'
      })
    },
    show3() {
      this.instance = Toast({
        msg: `<span class="color-p">测试一下${Math.random()}</span>`,
        icon: 'if-success color-p1',
        position: 'bottom',
        duration: 3000
      })
    },
    close() {
      if (this.instance) {
        this.instance.close()
      }
    }
  }
}
</script>

<style lang="scss">
.demo-toast {

}
</style>
