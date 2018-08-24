<template>
  <div class="demo-progress">
    <br>
    <m-progress :percent="80"></m-progress>
  </div>
</template>

<script>
import Progress from 'ui/progress'

export default {
  name: 'demo-progress',
  components: {
    [Progress.name]: Progress
  }
}
</script>

<style lang="scss">
.demo-progress {
  .timeline {
    .center {
      display: flex;
      align-items: center;
      padding: 0 16px;
      span {
        flex: 1;
        height: 2px;
        background-color: #e84a01;
        margin: 0px 12px;
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      padding: 0 16px;
      color: #757575;
    }
  }
}
</style>
