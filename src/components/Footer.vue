<template>
  <footer class="footer">
    &copy; Blog {{ year }}
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 50px;
  padding: 15px;
  text-align: center;
  color: #555;
  border-top: 1px solid #ddd;
}
</style>
