<template>
  <svg
    aria-hidden="true"
    :fill="color"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '#333',
    },
  },
  computed: {
    symbolId() {
      return `#${this.prefix}-${this.name}`
    }
  }
};
</script>
