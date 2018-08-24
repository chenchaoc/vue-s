<template>
  <div class="wyb-repay-way">
    <m-header title="还款方式"></m-header>
    <m-accordion title="主动还款">
      <m-accordion-item title="平台如何进行主动还款？">
        答：请确保银行卡内余额充足，然后在平台还款页面点击主动还款，点击获取验证码，将您收到的验证码填写进去，即完成还款。
      </m-accordion-item>
    </m-accordion>
    <m-accordion title="支付宝转账">
      <m-accordion-item title="如何进行支付宝转账？">
        答：请确保银行卡内余额充足，然后在平台还款页面点击主动还款，点击获取验证码，将您收到的验证码填写进去，即完成还款。
      </m-accordion-item>
      <m-accordion-item title="如何确认支付宝转账是否成功？">
        答：请确保银行卡内余额充足，然后在平台还款页面点击主动还款，点击获取验证码，将您收到的验证码填写进去，即完成还款。
      </m-accordion-item>        
    </m-accordion>      
  </div>
</template>

<script>
import Header from '../../components/header'
import { Accordion, AccordionItem } from 'ui/accordion'
export default {
  name: 'wyb-repay-way',
  components: {
    [Header.name]: Header,
    [Accordion.name]: Accordion,
    [AccordionItem.name]: AccordionItem
  }
}
</script>

<style lang="scss">
  .wyb-repay-way{
    padding-top: 48px;
  }
</style>