<template>
  <div class="m-btab">
    <ul class="m-btab-nav flex between">
      <li class="m-btab-nav-item flex-1" v-for="(item, i) in itemList" :key="i" :class="{'btab-active': item.active}" @click="onNavClick(item, i)">
        <i class="iconfont f-20" :class="item.icon"></i>
        <div class="word f-12">{{item.label}}</div>
      </li>
    </ul>
    <div class="m-btab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-btab',
  data() {
    return {
      itemList: []
    }
  },
  methods: {
    tabItemCreated(item) {
      this.itemList.push(item)
    },
    onNavClick(item, i) {
      this.$router.replace({
        name: item.btabKey
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-btab-nav-item {
    text-align: center;
    color: #757575;
    padding-top: 5px;
    padding-bottom: 2px;
    line-height: 1.3;
    &.btab-active {
      color: #3b82f3;
    }
  }
  .m-btab-nav-inner {
    display: inline-block;
  }
</style>
