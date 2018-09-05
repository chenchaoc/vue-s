<template>
  <div class="wyb-reapy-index">
    repay-还款
    <div @click="goKnow">还款须知</div>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '../../components/Btab'
export default {
  name: 'wyb-repay',
  components: {
    [CommonTab.name]: CommonTab,
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