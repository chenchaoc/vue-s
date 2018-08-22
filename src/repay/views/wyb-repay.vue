<template>
  <div class="wyb-reapy">
    repay
    {{a}}
  </div>
</template>

<script>
export default {
  name: 'wyb-repay',
  data() {
    return {
      a: 1
    }
  },
  created() {
    console.log(process.env.NODE_ENV)
  }
}
</script>

<style lang="scss">
  
</style>