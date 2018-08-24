<template>
  <div class="demo-tab">
    <m-tab>
      <m-tab-item :label="label">内容1</m-tab-item>
      <m-tab-item label="标题二" active>内容2</m-tab-item>
    </m-tab>
    <br>
    <m-tab class="tab-small" :on-tab-click="onTabClick">
      <m-tab-item :label="label" tab-key="component1">内容1</m-tab-item>
      <m-tab-item label="标题二" active tab-key="component2">内容2</m-tab-item>
    </m-tab>
  </div>
</template>

<script>
import { Tab, TabItem } from 'ui/tab'

export default {
  name: 'demo-tab',
  components: {
    [Tab.name]: Tab,
    [TabItem.name]: TabItem
  },
  data() {
    return {
      label: '标题一'
    }
  },
  methods: {
    onTabClick(item, i) {
      console.log(item.tabKey, i)
    }
  }
}
</script>

<style lang="scss">
.demo-tab {
  .tab-small {
    .m-tab-nav {
      line-height: 36px;
      font-size: 12px;
      color: #757575;
    }
  }
}
</style>
