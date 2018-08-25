<template>
  <div class="m-panel">
    <div class="panel-title" v-if="title || $slots.title">
      <slot name="title">{{title}}</slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-panel',
  props: {
    title: String
  }
}
</script>

<style lang="scss">
.m-panel {
  background-color: #fff;
  border-top: 1px solid #E8E8E8;
  >.panel-title {
    padding: 10px 16px;
    border-bottom: 1px solid #E8E8E8;
    font-size: 16px;
  }
  >.panel-body {
    padding: 14px 16px;
    border-bottom: 1px solid #E8E8E8;
    color: #757575;
  }
}
</style>
