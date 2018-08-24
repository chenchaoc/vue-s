/*
* @Author: chenchao
* @Date: 2018-08-21 14:35:59
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-24 17:53:36
*/
<template>
  <div id="app" class="app">
    <m-loading :load="load"></m-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from './components/loading'
export default {
  name: 'app',
  components: {
    [Loading.name]: Loading
  },
  computed: {
    load() {
      return this.$store.state.isLoading
    }
  }
}
</script>

<style lang="scss">
  @import './global/style/color';
  .app {
    height: 100%;
  }
</style>