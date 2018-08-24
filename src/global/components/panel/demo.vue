<template>
  <div class="demo-panel">
    <m-panel title="文字标题">
      内容
    </m-panel>
    <br>
    <m-panel>
      <span slot="title" class="tit-m">自定义标题样式</span>
      内容
    </m-panel>
    <br>
    <m-panel>
      无标题内容
    </m-panel>
  </div>
</template>

<script>
import Panel from 'ui/panel'

export default {
  name: 'demo-panel',
  components: {
    [Panel.name]: Panel
  }
}
</script>

<style lang="scss">
.demo-panel {
  .tit-m {
    color: #E84A01;
  }
}
</style>
