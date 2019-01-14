<template>
  <div class="test">
		{{valueStr}}
    <input type="text">
	</div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      value: Number
    },
    watch: {
      value(newVal) {
        console.log(newVal)
        this.abc = newVal
      }
    },
    computed: {
      valueStr() {
        const { value } = this
        return value
      }
    }
  }
</script>

<style lang="scss">

</style>
