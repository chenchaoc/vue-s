<template>
  <m-btab class="wyb-btab" :on-tab-click="onTabClick">
    <m-btab-item btab-key="wyb-loan" :active="$route.name == 'wyb-loan'" label="借款" icon="if-moneybag_border"></m-btab-item>
    <m-btab-item btab-key="wyb-repay" :active="$route.name == 'wyb-repay'" label="还款" icon="if-flow_card"></m-btab-item>
    <m-btab-item btab-key="wyb-mine" :active="$route.name == 'wyb-mine'" label="我的" icon="if-flow_password"></m-btab-item>
  </m-btab>
</template>

<script>
  import Btab from './btab'
  import BtabItem from './btab-item'
  export default {
    name: 'common-tab',
    components: {
      [Btab.name]: Btab,
      [BtabItem.name]: BtabItem
    },
    methods: {
      onTabClick(item, i) {
        this.$router.replace({
          name: item.btabKey
        })
      }
    }
  }
</script>

<style lang="scss">
  .wyb-btab{
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    background-color: #fff;
  }
</style>
