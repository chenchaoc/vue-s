<template>
  <div class="wyb-loan">
    <div class="a">loan-借款</div>
    <div @click="goLoan">申请借款</div>
    <div @click="ajax">发一个ajax看看</div>
    点击图片预览------->
    <img :src="myycy" alt="莫以宜春远" @click="showView(myycy)">
    <img-view v-model="viewvisible" :url="imgUrlStr"></img-view>
    <common-tab></common-tab>
  </div>
</template>

<script>
import API from '../../api'
import CommonTab from '../../components/btab'
import myycy from '@images/myycy.jpg'
import ImgView from '../../components/imgView'
export default {
  name: 'wyb-loan',
  components: {
    [CommonTab.name]: CommonTab,
    [ImgView.name]: ImgView
  },
  data() {
    return {
      myycy,
      viewvisible: false,
      imgUrlStr: ''
    }
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
    },
    showView(url) {
      this.viewvisible = true
      this.imgUrlStr = url
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
