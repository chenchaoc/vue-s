<template>
  <span class="m-animated-num">
    <slot :num="animatedNumber"></slot>
  </span>
</template>

<script>
import TWEEN from 'tween'

export default {
  name: 'm-animated-num',
  props: {
    num: { // 数值
      type: [Number, String],
      required: true
    },
    duration: { // 过渡时间
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      animatedNumber: 0
    }
  },
  watch: {
    num(newValue, oldValue) {
      this.tween(oldValue, newValue)
    }
  },
  mounted: function () {
    this.tween(0, this.num)
  },
  methods: {
    tween: function (startValue, endValue) {
      var vm = this
      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      new TWEEN.Tween({ tweeningValue: Number(startValue) })
        .to({ tweeningValue: Number(endValue) }, this.duration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningValue
        })
        .start()
      animate()
    }
  }
}
</script>

<style lang="scss">
.m-animated-num {

}
</style>
