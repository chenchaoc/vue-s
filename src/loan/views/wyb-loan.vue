<template>
  <div class="wyb-loan">
    <m-header title="首页"></m-header>
    loan-借款
    <common-tab></common-tab>
  </div>
</template>

<script>
import API from '../../api'
import Header from 'ui/header'
import CommonTab from '../../components/btab/common-tab'
export default {
  name: 'wyb-loan',
  components: {
    [Header.name]: Header,
    [CommonTab.name]: CommonTab
  },
  mounted() {
    //this.ajax()
  },
  methods: {
    ajax() {
      API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' }, showLoading: false }).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<style lang="scss">
  .wyb-loan{
    padding-top: 48px;
    min-height: 100%;
  }
</style>
