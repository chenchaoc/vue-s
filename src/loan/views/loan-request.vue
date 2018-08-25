/*
 * @Author:  chenchao 
 * @Date:  2018-08-24 17:40:50 
 * @email:  chenchao3.sh@superjia.com 
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-25 13:12:22
 */

<template>
  <div class="wyb-loan-request">
    <m-header title="申请借款"></m-header>
    申请借款
  </div>
</template>

<script>
import Header from '../../components/header'
export default {
  components: {
    [Header.name]: Header
  }
}
</script>

<style lang="scss">
  @import '../../global/style/color';
  .wyb-loan-request{
    padding-top: 48px;
  }
</style>