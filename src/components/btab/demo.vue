<template>
  <div class="demo-btab">
    <m-header :title="$route.name.replace('wyb-', '')"></m-header>
    <btab-demo-common></btab-demo-common>
  </div>
</template>

<script>
  import BtabDemoCommon from './demo-common'
  import Header from '../Header'
  export default {
    name: 'common-tab',
    components: {
      [Header.name]: Header,
      BtabDemoCommon
    }
  }
</script>

<style lang="scss">
</style>

