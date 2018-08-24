<template>
  <div class="demo-cell">
    <m-cell title="标题">
      <m-cell-item>文字</m-cell-item>
      <m-cell-item>
        <span slot="left">左</span>
      </m-cell-item>
      <m-cell-item>
        <span slot="right">右</span>
      </m-cell-item>
      <m-cell-item>
        <span slot="left">左</span>
        <span slot="right">右<br>右下</span>
      </m-cell-item>
    </m-cell>
    <br>
    <m-cell>
      <m-cell-item icon="if-arrow-right">
        <template slot="left">项目</template>
        <template slot="right">6</template>
      </m-cell-item>
      <m-cell-item>
        <div slot="left">项目</div>
        <div slot="right">
          <div class="align-right">右边</div>
          <div class="color-bd">右边第二行</div>
        </div>
      </m-cell-item>
    </m-cell>
    <br>
  </div>
</template>

<script>
import { Cell, CellItem } from 'ui/cell'
export default {
  name: 'demo-cell',
  components: {
    [Cell.name]: Cell,
    [CellItem.name]: CellItem
  }
}
</script>

<style lang="scss">
.demo-cell {}
</style>
