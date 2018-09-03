<template>
  <div class="no-datas text-center">
    <i class="iconfont if-emptystatusicon"></i>
    <div class="tips f-16">{{info}}</div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'm-no-datas',
    props: {
      info: {
        type: String,
        default: '暂无数据'
      }
    }
  }
</script>

<style lang="scss">
  .no-datas{
    position: absolute;
    left: 50%;
    top: 50%;
    color: #999;
    transform: translate(-50%, -50%);
    .iconfont{
      font-size: 80px;
    }
  }
</style>