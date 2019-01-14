<template>
  <div class="wyb-reapy-index">
    repay-还款
    <div @click="goKnow('wyb-repay-way')">还款须知</div>
    <input type="text">
    <div class="height-1000"></div>
    <div class="dibu" @click="goKnow('wyb-repay-test-a')">dibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudiudibudibudibudibudibudibudibudibudibudibudibudibudiudibudibudibudibudibudibudibudibudibudibudibudibudiudibudibudibudibudibudibudibudibudibudibudibudibudiudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibudibu</div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
    <div @click="add">add</div>
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '../../components/Btab'
import Test from '../components/test'
export default {
  name: 'wyb-reapy-index',
  components: {
    [CommonTab.name]: CommonTab,
    Test
  },
  data() {
    return {
      a: '',
      list: []
    }
  },
  created() {
    // wechat.share()
    this.add()
  },
  methods: {
    goKnow(name) {
      this.$router.push({ name })
    },
    add() {
      $api.request('loanHomeList').then((res) => {
        this.list = res.list
      })
    }
  }
}
</script>

<style lang="scss">
  .wyb-reapy-index{
    padding-bottom: 48px;
  }
  .height-1000{
    height: 1000px;
  }
  .dibu{
    word-break: break-all;
    word-wrap: break-word;
  }
</style>