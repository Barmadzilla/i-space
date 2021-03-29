<template>
  <router-view/>
  <Footer/>
</template>

<script>

// @ is an alias to /src
import Footer from "@/components/Footer";


export default {
  name: 'Home',
  components: {
     Footer
  }
}
</script>




<style>
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
