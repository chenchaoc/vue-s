<template>
  <div class="header-wrapper">
    <div class="header-back" v-if="showBack" @click="goBack">
      <i class="iconfont fw-b f-16" :class="backIcon"></i>
      <span class="back-sp f-16">{{backText}}</span>
    </div>
    <div v-if="title" class="header-center f-16 fw-b">{{titleData}}</div>
    <div class="header-right f-16">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-header',
  props: {
    showBack: {
      type: Boolean,
      default: true
    },
    backIcon: {
      type: String,
      default: 'if-arrow-left'
    },
    backText: {
      type: String,
      default: '返回'
    },
    title: {
      type: String
    }
  },
  computed: {
    titleData() {
      let val = this.title
      return val.length > 14 ? (val.substring(0, 14) + '...') : val
    }
  },
  methods: {
    goBack() {
      //const { $router } = document.getElementById('app').__vue__
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper{
    position: sticky;
    top: 0;
    height: 48px;
    line-height: 48px;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
    .header-back{
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      padding-left: 10px;
      display: flex;
    }
    .header-center{
      text-align: center;
    }
    .header-right{
      position: absolute;
      top: 0;
      right: 0;
      padding-right: 16px;
    }
  }
</style>