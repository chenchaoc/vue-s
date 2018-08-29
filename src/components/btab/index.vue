<template>
  <m-btab class="wyb-btab">
    <m-btab-item btab-key="wyb-loan-index" :active="$route.name == 'wyb-loan-index'" label="借款" icon="if-moneybag_border"></m-btab-item>
    <m-btab-item btab-key="wyb-repay-index" :active="$route.name == 'wyb-repay-index'" label="还款" icon="if-flow_card"></m-btab-item>
    <m-btab-item btab-key="wyb-mine-index" :active="$route.name == 'wyb-mine-index'" label="我的" icon="if-flow_password"></m-btab-item>
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
    max-width: 720px;
    margin: 0 auto;
  }
  @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){
    .wyb-btab{
      padding-bottom: 16px;
    }
  }
</style>
