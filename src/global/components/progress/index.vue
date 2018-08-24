<template>
  <div class="m-progress">
    <div class="m-progress-inner" :style="{width: percent+'%'}"></div>
  </div>
</template>

<script>
export default {
  name: 'm-progress',
  props: {
    percent: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.m-progress {
  height: 2px;
  background-color: #E6E6E6;
  border-radius: 1px;
}

.m-progress-inner {
  width: 0;
  height: 100%;
  border-radius: 1px;
  background-image: linear-gradient(to right, #ff7e26, #f25707);
  transition: width .3s;
}
</style>
