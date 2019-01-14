<template>
  <div class="repay-test">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div @click="go('wyb-repay-test-a')">aaaaaaaaaaaaa</div>
    <div @click="go('wyb-repay-test-b')">bbbbbbbbbbbbb</div>
  </div>
</template>

<script>
export default {
  created() {
    console.log()
  },
  methods: {
    go(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style>

</style>
