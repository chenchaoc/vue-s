<template>
  <div class="wyb-loan">
    <div class="a">loan-借款</div>
    <div @click="goLoan">申请借款</div>
    <div @click="ajax">发一个ajax看看</div>
    <common-tab></common-tab>
  </div>
</template>

<script>
import API from '../../api'
import CommonTab from '../../components/btab/common-tab'
export default {
  name: 'wyb-loan',
  components: {
    [CommonTab.name]: CommonTab
  },
  mounted() {
    //this.ajax()
  },
  methods: {
    ajax() {
      API('homeList', { a: util.jsEncrypt('abc') }, { headers: { OS: 'WECHAT' } }).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e, 1)
      })
    },
    goLoan() {
      this.$router.push({ name: 'wyb-loan-request' })
    }
  }
}
</script>

<style lang="scss">
  .wyb-loan{
    padding-bottom: 48px;
    min-height: 100%;
  }
</style>
