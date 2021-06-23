<template>
  <Header />
  <div class="container">
    <main class="main-content">
      <RouterView />
    </main>
  </div>
  <Footer />
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.container {
  max-width: 740px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
}
.main-content {
  padding-top: 100px;
}
</style>
