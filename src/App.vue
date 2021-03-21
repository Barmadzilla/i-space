<template>
  <Header/>
  <router-view/>
</template>

<script>

// @ is an alias to /src
import Header from '@/components/Header.vue'


export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>


<style>
@import "./assets/css/resets.css";
@import "./assets/css/layout.css";
@import "./assets/css/vars.css";
@import "./assets/css/fonts.css";
#app {
  font-family: Circe, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
