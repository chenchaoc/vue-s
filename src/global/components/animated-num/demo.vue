<template>
  <div class="demo-animated-num">
    <br>
    默认动画时间500ms，自定义布局样式：<br>
    <m-animated-num :num="999999">
      <template slot-scope="props">
        <span class="color-p">{{props.num | fnum}}</span>
      </template>
    </m-animated-num>
    <br>
    修改动画时间为5000ms<br>
    <m-animated-num :num="999999" :duration="5000">
      <template scope="props">{{props.num}}</template>
    </m-animated-num>
  </div>
</template>

<script>
import AnimatedNum from 'ui/animated-num'

export default {
  name: 'demo-animated-num',
  components: {
    [AnimatedNum.name]: AnimatedNum
  },
  filters: {
    fnum(val, fixed) {
      return util.fnum(val, fixed)
    }
  },
}
</script>

<style lang="scss">
.demo-animated-num {

}
</style>
