<template>
  <div class="wyb-loan">
    <mt-cell title="申请借款" @click.native="go('wyb-loan-request')" is-link></mt-cell>
    <mt-cell title="发一个ajax看看" @click.native="ajax" is-link></mt-cell>
    <mt-cell title="组件列表" @click.native="go('wyb-demo')" is-link v-if="show"></mt-cell>
    <!-- <input type="file" name="file" accept="image/png,image/gif,image/jpeg" @change="update"> -->
    <img src="../images/myycy.jpg" alt="">
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '@components/Btab'
import { Toast, Cell } from 'mint-ui'

export default {
  components: {
    [CommonTab.name]: CommonTab,
    [Cell.name]: Cell
  },
  data() {
    return {
      show: process.env.GLOBAL_ENV == 'dev',
      abc: ''
    }
  },
  mounted() {
    //this.ajax()
    // wechat.share().then(() => {
    //   console.log(1)
    // }).catch((e) => {
    //   Toast(JSON.stringify(e))
    // })
    // console.log(123)
    // [1, 2, 3].includes(1)
    // console.log(Array.from('abc'))
    // console.log([1, 2, 3].findIndex((v) => v == 0))
    // console.log(wechat)
    // console.log($api)
    // console.log(this.$store)
    // console.log(bridge)
    // console.log(util.getQuery({
    //   a: 1,
    //   b: 2
    // }))
    // console.log(util.paramOfUrl(`?a=1&b=2&c=3`))
  },
  methods: {
    ajax() {
      $api.request('loanHomeList', { a: util.jsEncrypt(1), b: { c: 1 } }).then((res) => {
        console.log(res)
      })
    },
    update(e) {
      let file = e.target.files[0]
      console.log(file)
      // let reader = new FileReader()
      // reader.readAsDataURL(file)
      // console.log(reader)
      // reader.onload = (e) => {
      //   this.abc = reader.result //转成base64
      // }
      // let param = new FormData() //使用formData
      // param.append('file', file, file.name)
      // $api.request('loanHomeList', param, { headers: { OS: 'WECHAT', 'Content-Type': 'multipart/form-data' }, showLoading: false }).then((res) => {
      //   Toast('请求成功')
      //   // console.log(res)
      // }).catch((e) => {
      //   // console.log(e, 1)
      // })
    },
    go(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wyb-loan{
    padding-bottom: 48px;
    min-height: 100%;
    background-color: $cl-f7;
  }
</style>
