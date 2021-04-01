<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link :to="'/'"><img :src="require(`../assets/${logotype}`)" alt="iSpace логотип"></router-link>
      </div>
      <div id="nav">
        <ul>
          <li><a href="#">Как мы работаем</a></li>
          <li><a href="#">Услуги</a></li>
          <li><a href="#">Стоимость</a></li>
          <li><a href="#">Клиенты</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Консультация</a></li>
        </ul>
        <!--        <router-link to="/">Home</router-link>-->
        <!--        <router-link to="/about">About</router-link>-->
        <!--        <router-link to="/it-support">IT</router-link>-->
        <LocaleSwitcher/>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "Navigation",
  components: {LocaleSwitcher},
  props: ['logo'],
  computed: {
    logotype() {
      if (this.logo === 'it') {
        return 'logo-ispace-tech.svg'
      } else if (this.logo === 'legal') {
        return 'logo-ispace-legal.svg'
      } else if (this.logo === 'finances') {
        return 'logo-ispace-finances.svg'
      } else {
        return 'logo-ispace.svg'
      }
    }
  }
}
</script>

<style scoped>
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

header ul {
  list-style: none;
}

header li {
  display: inline-block;
}

header #nav {
  display: flex;
}

</style>