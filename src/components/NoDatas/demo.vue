<template>
  <div class="demo-nodatas">
    <m-header title="demo-nodatas"></m-header>
    <m-no-datas></m-no-datas>
  </div>
</template>

<script>
import NoDatas from './index'
import Header from '../Header/index'
export default {
  components: {
    [NoDatas.name]: NoDatas,
    [Header.name]: Header
  }
}
</script>

<style lang="scss">

</style>
