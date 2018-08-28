<template>
  <div class="m-btab">
    <ul class="m-btab-nav flex between">
      <li class="m-btab-nav-item" v-for="(item, i) in itemList" :key="i" :class="{'btab-active': item.selected}" @click="onNavClick(item, i)">
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
  props: {
    onTabClick: Function
  },
  data() {
    return {
      itemList: []
    }
  },
  methods: {
    tabItemCreated(item) {
      this.itemList.push(item)
    },
    tabItemDestroyed(item) {
      this.itemList.splice(this.itemList.findIndex(it => it === item), 1)
    },
    onNavClick(item, i) {
      this.itemList.forEach(it => {
        if (it !== item) {
          it.selected = false
        }
      })
      item.selected = true
      this.onTabClick && this.onTabClick(item, i)
    }
  }
}
</script>

<style lang="scss" scoped>
  .m-btab-nav {
    box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.08);
  }
  .m-btab-nav-item {
    flex: 1;
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
