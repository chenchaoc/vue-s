<template>
  <div class="demo-picker">
    <m-picker :data="years" v-model="year1" @on-change='change'></m-picker>
  </div>
</template>

<script>
import Picker from 'ui/picker'

let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}

export default {
  name: 'demo-picker',
  components: {
    [Picker.name]: Picker
  },
  data() {
    return {
      years: [years],
      year1: ['2002']
    }
  },
  methods: {
    change(value) {
      console.log('new Value', value)
    }
  }
}
</script>

<style lang="scss">

</style>
