<template>
  <m-btab class="wyb-btab">
    <m-btab-item btab-key="wyb-demo-btab" :active="$route.name == 'wyb-demo-btab'" label="batb" icon="if-moneybag_border"></m-btab-item>
    <m-btab-item btab-key="wyb-demo-header" :active="$route.name == 'wyb-demo-header'" label="header" icon="if-flow_card"></m-btab-item>
    <m-btab-item btab-key="wyb-demo-nodatas" :active="$route.name == 'wyb-demo-nodatas'" label="nodatas" icon="if-flow_password"></m-btab-item>
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
    box-shadow: 0 -3px 6px 0 rgba(0, 0, 0, 0.08);    
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

