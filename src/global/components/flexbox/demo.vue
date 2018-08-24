<template>
  <div class="demo-flexbox">
    <m-flexbox direction="vertical" class="align-center">
      <m-flexbox-item>
        <m-flexbox>
          <m-flexbox-item>h1</m-flexbox-item>
          <m-flexbox-item>h2</m-flexbox-item>
          <m-flexbox-item>h3</m-flexbox-item>
        </m-flexbox>
      </m-flexbox-item>
      <m-flexbox-item>v2</m-flexbox-item>
      <m-flexbox-item>v3</m-flexbox-item>
    </m-flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem } from 'ui/flexbox'

export default {
  name: 'demo-flexbox',
  components: {
    [Flexbox.name]: Flexbox,
    [FlexboxItem.name]: FlexboxItem
  }
}
</script>

<style lang="scss">
.demo-flexbox {
  height: 100%;
  .m-flexbox {
    &.flexbox-vertical {
      &>.m-flexbox-item:not(:nth-child(2)) {
        flex: none;
      }
    }
  }
  .m-flexbox-item {
    border: 1px solid #fff;
    background-color: #e84a01;
  }
}
</style>
