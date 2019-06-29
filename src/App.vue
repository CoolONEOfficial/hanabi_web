<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  #content {
    background-image: url('assets/auth_background.jpg');
    background-position: center center;
    background-size: cover;
    box-shadow: inset 0 0 0 1000px rgba(20,54,143,0.9);
  }

  #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
</style>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>
