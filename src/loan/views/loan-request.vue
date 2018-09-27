<template>
  <div class="wyb-loan-request">
    <m-header title="申请借款"></m-header>
    <m-no-datas></m-no-datas>
  </div>
</template>

<script>
import Header from '../../components/Header'
import NoDatas from '../../components/NoDatas'
export default {
  components: {
    [Header.name]: Header,
    [NoDatas.name]: NoDatas
  }
}
</script>

<style lang="scss">
  .wyb-loan-request{

  }
</style>