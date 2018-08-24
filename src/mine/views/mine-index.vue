/*
 * @Author:  chenchao 
 * @Date:  2018-08-24 17:40:28 
 * @email:  chenchao3.sh@superjia.com 
 * @Last Modified by:  chenchao 
 * @Last Modified time:  2018-08-24 17:40:28 
 */

<template>
  <div class="wyb-mine-index">
    mine
    <common-tab></common-tab>
  </div>
</template>

<script>
import CommonTab from '../../components/btab/common-tab'
export default {
  name: 'wyb-mine',
  components: {
    [CommonTab.name]: CommonTab
  }
}
</script>

<style lang="scss">
  
</style>