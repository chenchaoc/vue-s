<template>
  <div class="demo-header">
    <m-header :title="$route.name.replace('wyb-', '')">
      <div slot="header-right">header右边</div>
    </m-header>
    <btab-demo-common></btab-demo-common>
  </div>
</template>

<script>
  import Header from './index'
  import BtabDemoCommon from '../Btab/demo-common'
  export default {
    components: {
      [Header.name]: Header,
      BtabDemoCommon
    }
  }
</script>

<style lang="scss">

</style>