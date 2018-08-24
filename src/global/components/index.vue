<template>
  <div class="demo-list">
    <m-cell title="组件列表">
      <m-cell-item v-for="(route, i) in routes.slice(1)" :key="i" icon="if-arrow-right" @click.native="$router.push(route.path)">
        <template slot="left">{{route.meta.title}}</template>
        <template slot="right">{{route.name.replace('demo-', '')}}</template>
      </m-cell-item>
    </m-cell>
  </div>
</template>

<script>
import { Cell, CellItem } from 'ui/cell'
import routes from './router'

export default {
  name: 'demo-list',
  components: {
    [Cell.name]: Cell,
    [CellItem.name]: CellItem
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss">
.demo-list {}
</style>
