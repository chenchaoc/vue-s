<template>
  <div class="m-tab">
    <ul class="m-tab-nav">
      <li class="m-tab-nav-item" v-for="(item, i) in itemList" :key="i" :class="{'tab-active': item.selected}" @click="onNavClick(item, i)">
        <div class="m-tab-nav-inner" v-html="item.label"></div>
      </li>
    </ul>
    <div class="m-tab-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-tab',
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

<style lang="scss">
.m-tab {}

.m-tab-nav {
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  line-height: 48px;
  background-color: #fff;
  border-bottom: 1px solid #E6E6E6;
}

.m-tab-nav-item {
  flex: 1;
  text-align: center;
  &.tab-active {
    color: #E84A01;
    .m-tab-nav-inner {
      position: relative;
      &:after {
        content: '';
        position: absolute;
        left: 15%;
        right: 0;
        bottom: 0;
        width: 70%;
        border-bottom: 3px solid #E84A01;
      }
    }
  }
}

.m-tab-nav-inner {
  display: inline-block;
}

.m-tab-body {
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
</style>
