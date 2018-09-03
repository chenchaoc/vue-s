<template>
  <div class="wyb-loan">
    <div class="a">loan-借款</div>
    <div @click="goLoan">申请借款</div>
    <div @click="ajax">发一个ajax看看</div>
    点击图片预览------->
    <img :src="myycy" alt="莫以宜春远" @click="showView(myycy)">
    <m-img-view v-model="imgViewModel" :url="imgViewUrl"></m-img-view>
    <common-tab></common-tab>
  </div>
</template>

<script>
import API from '../../api'
import CommonTab from '../../components/Btab'
import myycy from '@images/myycy.jpg'
import ImgView from '../../components/ImgView'
import { Toast } from 'mint-ui'
export default {
  name: 'wyb-loan',
  components: {
    [CommonTab.name]: CommonTab,
    [ImgView.name]: ImgView
  },
  data() {
    return {
      myycy,
      imgViewModel: false,
      imgViewUrl: ''
    }
  },
  mounted() {
    //this.ajax()
  },
  methods: {
    ajax() {
      API('homeList', { a: util.jsEncrypt('abc') }, { headers: { OS: 'WECHAT' }, showLoading: true }).then((res) => {
        Toast('请求成功')
        console.log(res)
      }).catch((e) => {
        console.log(e, 1)
      })
    },
    goLoan() {
      this.$router.push({ name: 'wyb-loan-request' })
    },
    showView(url) {
      this.imgViewModel = true
      this.imgViewUrl = url
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
