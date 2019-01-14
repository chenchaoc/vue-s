<template>
  <div>
    <input type="text">
    <div @click="back">back</div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      history.back(-1)
    }
  }
}
</script>

<style>

</style>
