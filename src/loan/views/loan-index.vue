<template>
  <div class="wyb-loan">
    <mt-cell title="申请借款" @click.native="go('wyb-loan-request')" is-link></mt-cell>
    <mt-cell title="发一个ajax看看" @click.native="ajax" is-link></mt-cell>
    <mt-cell title="组件列表" @click.native="go('wyb-demo')" is-link></mt-cell>
    <!-- <input type="file" name="file" accept="image/png,image/gif,image/jpeg" @change="update"> -->
    <common-tab></common-tab>
  </div>
</template>

<script>
import API from '../../api'
import CommonTab from '../../components/Btab'
import { Toast, Cell } from 'mint-ui'
export default {
  name: 'wyb-loan',
  components: {
    [CommonTab.name]: CommonTab,
    [Cell.name]: Cell
  },
  mounted() {
    //this.ajax()
    // wechat.share().then(() => {
    //   console.log(1)
    // }).catch((e) => {
    //   Toast(JSON.stringify(e))
    // })
    // console.log(123)
  },
  methods: {
    ajax() {
      API('homeList', { a: util.jsEncrypt(1) }).then((res) => {
        console.log(res)
      })
    },
    update(e) {
      let file = e.target.files[0]
      console.log(file)
      let param = new FormData()
      param.append('file', file, file.name)
      API('homeList', param, { headers: { OS: 'WECHAT', 'Content-Type': 'multipart/form-data' }, showLoading: false }).then((res) => {
        Toast('请求成功')
        console.log(res)
      }).catch((e) => {
        console.log(e, 1)
      })
    },
    go(name) {
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="scss">
  .wyb-loan{
    padding-bottom: 48px;
    min-height: 100%;
    background-color: $cl-f7;
  }
</style>
