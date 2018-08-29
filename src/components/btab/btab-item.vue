<template>
  <div class="m-btab-item" :class="{'item-active': selected}">
  </div>
</template>

<script>
export default {
  name: 'm-btab-item',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    btabKey: String
  },
  data() {
    return {
      selected: this.active
    }
  },
  created() {
    const { label, icon, active, btabKey } = this
    this.$parent.tabItemCreated({ label, icon, active, btabKey })
  }
}
</script>

<style lang="scss">

</style>
