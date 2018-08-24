<template>
  <!-- throttled间隔30ms, distance默认50 -->
  <m-page class="demo-page" :pull-refresh="pullRefresh" :infinite-scroll="infiniteScroll" :distance="50" @scroll="onScroll" @throttledScroll="throttledScroll">
    <m-cell>
      <m-cell-item v-for="n in page * 10" :key="n">{{n}}</m-cell-item>
    </m-cell>
    <!-- 自定义加载中，加载完成样式  -->
    <span slot="loading">正在加载第{{page}}页</span>
    <span slot="done">已全部加载完毕</span>
  </m-page>
</template>

<script>
import Page from 'ui/page'
import { Cell, CellItem } from 'ui/cell'

export default {
  name: 'demo-page',
  components: {
    [Page.name]: Page,
    [Cell.name]: Cell,
    [CellItem.name]: CellItem,
  },
  data() {
    return {
      page: 2
    }
  },
  methods: {
    pullRefresh() {
      console.info('pullRefresh')
    },
    infiniteScroll(done) {
      console.info('infiniteScroll', this.page)
      setTimeout(() => {
        done(++this.page === 5)
      }, 2000)
    },
    onScroll(event) {
      console.log('onScroll', window.pageYOffset)
    },
    throttledScroll(event) {
      console.log('throttledScroll', window.pageYOffset)
    }
  }
}
</script>

<style lang="scss">
.demo-page {

}
</style>
