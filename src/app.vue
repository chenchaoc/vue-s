<template>
  <div id="app" class="app">
    <m-loading :load="isLoad"></m-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/Loading'
export default {
  name: 'app',
  components: {
    [Loading.name]: Loading
  },
  computed: {
    isLoad() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
  .app {
    height: 100%;
  }
</style>