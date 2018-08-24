<template>
  <div class="wyb-index">
    <m-header title="首页">
      <div slot="header-right">问题</div>
    </m-header>
    index
  </div>
</template>

<script>
import API from '../../api'
import Header from 'ui/header'
export default {
  name: 'wyb-index',
  components: {
    [Header.name]: Header
  },
  methods: {
    s() {
      console.log(1)
    }
  },
  created() {
    API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' }, showLoading: false }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<style lang="scss">
  .wyb-index{
    padding-top: 48px;
    min-height: 100%;
  }
</style>
