<template>
  <div class="demo-nodatas">
    <m-header :title="$route.name.replace('wyb-', '')"></m-header>
    <m-no-datas></m-no-datas>
    <btab-demo-common></btab-demo-common>
  </div>
</template>

<script>
import NoDatas from './index'
import Header from '../Header'
import BtabDemoCommon from '../Btab/demo-common'
export default {
  components: {
    [NoDatas.name]: NoDatas,
    [Header.name]: Header,
    BtabDemoCommon
  }
}
</script>

<style lang="scss">

</style>
