/*
 * @Author:  chenchao 
 * @Date:  2018-08-24 17:40:03 
 * @email:  chenchao3.sh@superjia.com 
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-25 12:44:11
 */

<template>
  <div class="wyb-reapy-index">
    repay-还款
    <div @click="goKnow">还款须知</div>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '../../components/btab/common-tab'
export default {
  name: 'wyb-repay',
  components: {
    [CommonTab.name]: CommonTab
  },
  methods: {
    goKnow() {
      this.$router.push({ name: 'wyb-repay-way' })
    }
  }
}
</script>

<style lang="scss">
  
</style>