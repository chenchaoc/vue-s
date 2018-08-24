<template>
  <div class="header-wrapper" :class="{ 'header-fixed': fixed}">
    <div class="header-back" v-if="showBack" @click="goBack">
      <i class="iconfont fw-b" :class="backIcon"></i>
      <span class="back-sp f-16">{{backText}}</span>
    </div>
    <div v-if="title" class="header-center f-16">{{titleData}}</div>
    <div class="header-right f-16">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-header',
  props: {
    fixed: {
      type: Boolean,
      default: true
    },
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
      console.log(document.getElementById('app').__vue__)
      const { $router } = document.getElementById('app').__vue__
      $router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper{
    height: 48px;
    line-height: 48px;
    background-color: #ffffff;
    border-bottom: 1px solid #dddddd;
    text-align: center;
    max-width: 720px;
    margin: 0 auto;
    &.header-fixed {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1;
    }
    .header-back{
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      padding: 0 10px;
      display: flex;
    }
    .header-center{
      font-weight: 500;
      font-family: Helvetica, Avenir, Arial, sans-serif;
      font-size: 17px;
      color: #212121;
      text-align: center;
    }
    .header-right{
      position: absolute;
      top: 0;
      right: 0;
      padding: 0 10px;
    }
  }
</style>