/*
* @Author: chenchao
* @Date: 2018-08-21 14:35:59
* @Email: chenchao3@sh.superjia.com
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-22 17:47:41
*/
<template>
  <div id="app" class="app">
    <m-loading :load="load"></m-loading>
    <router-view></router-view>
  </div>
</template>

<script>
import Loading from '@globalcomponents/loading/loading'
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
  .app {
    height: 100%;
  }
</style>