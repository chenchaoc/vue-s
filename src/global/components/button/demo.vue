<template>
  <div class="demo-btn">
    <br>
    <m-button size="small">按钮小</m-button>
    <br>
    <m-button>按钮</m-button>
    <br>
    <m-button disabled size="large">按钮大，禁用</m-button>
  </div>
</template>

<script>
import Button from 'ui/button'
export default {
  name: 'demo-button',
  components: {
    [Button.name]: Button,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      validator(value) {
        return ['small', 'large'].indexOf(value) != -1
      }
    }
  }
}
</script>

<style lang="scss">
.demo-btn {}
</style>
