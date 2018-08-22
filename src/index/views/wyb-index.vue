<template>
  <div class="wyb-index">
    index
  </div>
</template>

<script>
import API from '../../api'
export default {
  name: 'wyb-index',
  methods: {
    s() {
      console.log(1)
    }
  },
  created() {
    API('homeList', { a: 1 }, { headers: { OS: 'WECHAT' }, showLoading: false }).then((res) => {
      console.log(res)
    }).catch((e) => {
      console.log(e)
    })
  }
}
</script>

<style lang="scss">
  .wyb-index{
    background-color: #fff;
    height: 100%;
  }
</style>
