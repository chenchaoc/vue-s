<template>
  <div class="demo-list">
    <m-header title="demo-list"></m-header>
    <div class="demo-list-wrapper">
      <mt-cell
        v-for="(route, index) in routes.slice(1)"
        :key="index"
        :title="route.meta.title"
        is-link
        :value="route.name.replace('wyb-demo-', '')"
        @click.native="$router.push(route.path)"
      ></mt-cell>
    </div>
  </div>
</template>

<script>
import { Cell } from 'mint-ui'
import routes from './router'
import Header from './Header/index'
export default {
  components: {
    [Cell.name]: Cell,
    [Header.name]: Header
  },
  data() {
    return {
      routes
    }
  }
}
</script>

<style lang="scss">
  .demo-list-wrapper{
    margin-top: 8px;
  }
</style>
