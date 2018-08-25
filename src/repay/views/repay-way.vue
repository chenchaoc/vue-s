<template>
  <div class="wyb-repay-way">
    <m-header title="还款方式"></m-header>
    <m-accordion title="主动还款">
      <m-accordion-item title="平台如何进行主动还款？">
        请确保银行卡内余额充足，然后在平台还款页面点击主动还款，点击获取验证码，将您收到的验证码填写进去，即完成还款。
      </m-accordion-item>
    </m-accordion>
    <m-accordion title="支付宝转账">
      <m-accordion-item title="如何进行支付宝转账？">
        进入支付宝首页，点击“转账”，选择“转到支付宝账户”，输入支付宝账户ali7056@tom.com,点击“下一步”，输入转账金额，并将姓名和注册手机号添加到备注中，点击“确认转账”，输入支付密码即可完成还款。
      </m-accordion-item>
      <m-accordion-item title="如何确认支付宝转账是否成功？">
        还款后请及时在“借款详情”页查看还款状态，当页面显示“已还款”时，则表示还款成功，如有疑问请联系在线客户。（工作日9:30-18:00）
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