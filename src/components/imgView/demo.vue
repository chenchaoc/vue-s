<template>
  <div class="demo-img-view">
    <m-header title="demo-img-view"></m-header>
    <div class="demo-img-view-wrapper">
      <img :src="myycy" @click="showView(myycy)">
      <m-img-view v-model="imgViewModel" :url="imgViewUrl" :scale="3"></m-img-view>
    </div>
  </div>
</template>

<script>
import Header from '../Header/index'
import ImgView from './index'
import myycy from '@images/myycy.jpg'
export default {
  components: {
    [Header.name]: Header,
    [ImgView.name]: ImgView
  },
  data() {
    return {
      myycy,
      imgViewModel: false,
      imgViewUrl: ''
    }
  },
  methods: {
    showView(url) {
      this.imgViewModel = true
      this.imgViewUrl = url
    }
  }
}
</script>

<style lang="scss">
  .demo-img-view-wrapper{
    margin-top: 8px;
  }
</style>
