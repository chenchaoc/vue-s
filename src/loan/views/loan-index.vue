/*
 * @Author:  chenchao 
 * @Date:  2018-08-24 17:40:44 
 * @email:  chenchao3.sh@superjia.com 
 * @Last Modified by: chenchao
 * @Last Modified time: 2018-08-25 13:51:57
 */

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
      API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' }, showLoading: true }).then((res) => {
        console.log(res)
      }).catch((e) => {
        console.log(e)
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
