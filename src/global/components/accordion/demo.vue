<template>
  <div class="demo-accordion">
    <m-accordion title="常见问题">
      <m-accordion-item title="问题1">答案1</m-accordion-item>
      <m-accordion-item>
        <span slot="title">问题2</span>
        答案2
      </m-accordion-item>
      <m-accordion-item>
        <span slot="title" class="tit-m">问题2</span>
        答案3
      </m-accordion-item>
    </m-accordion>
    <br>
    <m-accordion>
      <span slot="title" class="tit-m">常见问题</span>
      <m-accordion-item title="问题1" :is-open="true">答案1</m-accordion-item>
      <m-accordion-item>
        <span slot="title">问题2</span>
        答案2
      </m-accordion-item>
      <m-accordion-item>
        <span slot="title" class="tit-m">问题2</span>
        答案3
      </m-accordion-item>
    </m-accordion>
  </div>
</template>

<script>
import { Accordion, AccordionItem } from 'ui/accordion'

export default {
  name: 'demo-accordion',
  components: {
    [Accordion.name]: Accordion,
    [AccordionItem.name]: AccordionItem,
  }
}
</script>

<style lang="scss">
.demo-accordion {
  .tit-m {
    color: #E84A01;
  }
}
</style>
