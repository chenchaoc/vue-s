<template>
  <div>
    <m-header title="这是页面title">
      <div slot="header-right">header右边</div>
    </m-header>
  </div>
</template>

<script>
  import Header from './index'
  export default {
    components: {
      [Header.name]: Header
    }
  }
</script>

<style lang="scss">

</style>