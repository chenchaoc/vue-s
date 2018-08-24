<template>
  <div class="m-page">
    <slot></slot>
    <div v-if="infiniteScroll" class="m-page-infinite-tip" :class="{loading: isLoading, done: done}">
      <template v-if="isLoading">
        <slot name="loading">正在加载中</slot>
      </template>
      <template v-else-if="done">
        <slot name="done">没有更多了</slot>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-page',
  props: {
    pullRefresh: Function,
    infiniteScroll: Function,
    distance: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      // isRefreshing: false, // 是否正在刷新
      isLoading: false, // 是否正在加载
      done: false // 是否已加载完毕
    }
  },
  mounted() {
    if (this.pullRefresh) {
      this.setRefreshHeader()
    }
    if (this.infiniteScroll || this._events.scroll || this._events.throttledScroll) {
      window.addEventListener('scroll', this.scrollHandler, false)
    }
  },
  methods: {
    // 注册原生下拉刷新
    setRefreshHeader() {
      bridge.call('setrefreshhead', {
        status: 1,
        jsRefresh: 'PULL_REFRESH'
      })
      bridge.onCallback('PULL_REFRESH', () => {
        this.done = false
        this.pullRefresh()
      })
    },
    // 关闭原生下拉刷新
    closeRefreshHeader() {
      bridge.call('setrefreshhead', {
        status: 0,
        jsRefresh: 'PULL_REFRESH'
      })
      bridge.offCallback('PULL_REFRESH')
    },
    scrollHandler(event) {
      this._events.scroll && this.$emit('scroll', event)
      if (this.timerId) {
        return
      }
      this.timerId = setTimeout(() => {
        this.timerId = null
        this.throttledHandler(event)
      }, 50)
    },
    throttledHandler(event) {
      this._events.throttledScroll && this.$emit('throttledScroll', event)
      if (this.done || this.isLoading || !this.infiniteScroll) {
        return
      }
      const docEl = document.documentElement
      // console.info(docEl.scrollHeight - window.pageYOffset - docEl.offsetHeight)
      // if (docEl.getBoundingClientRect().top + docEl.scrollHeight - docEl.offsetHeight <= this.distance) {
      if (window.pageYOffset > 0 && docEl.scrollHeight - window.pageYOffset - docEl.offsetHeight <= this.distance) {
        this.isLoading = true
        this.infiniteScroll((done = false) => {
          setTimeout(() => {
            this.isLoading = false
          }, 50)
          this.done = done
        })
      }
    }
  },
  destroyed() {
    if (this.pullRefresh) {
      this.closeRefreshHeader()
    }
    if (this.infiniteScroll || this._events.scroll || this._events.throttledScroll) {
      window.removeEventListener('scroll', this.scrollHandler, false)
    }
  }
}
</script>

<style lang="scss">
.m-page {}

.m-page-infinite-tip {
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  &.loading {
    visibility: visible;
  }
  &.done {
    visibility: visible;
  }
}
</style>
