<template>
  <div class="container">
    <h2>Клиенты i-Space — <span class="text-gradient">лидеры IT-индустрий</span></h2>
    <div class="clients">
      <a v-for="client in clients" :href="client.url" :key="client.name">
        <img :src="require(`../assets/images/clients/${client.logo}`)" alt="client.name"/>
      </a>
    </div>

  </div>
  <div class="wrap">
    <div class="bubbles">
      <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
    </div>
  </div>
</template>

<script>
import Bubble from "@/components/bubbles/Bubble";

export default {
  name: "AboutClients",
  components: {Bubble},
  data() {
    return {
      clients: [
        {name: 'Кошелёк', logo: 'wallet.svg', url: '#'},
        {name: 'Первый Канал', logo: 'first-tv.svg', url: '#'},
        {name: 'Just AI', logo: 'just-ai.svg', url: '#'},
        {name: 'Trading View', logo: 'trading-view.svg', url: '#'},
        {name: 'Glispa', logo: 'glispa.svg', url: '#'},
        {name: 'Embria', logo: 'embria.svg', url: '#'},
        {name: 'i-DIGITAL', logo: 'i-digital.svg', url: '#'},
        {name: 'Coin Keeper', logo: 'coin-keeper.svg', url: '#'},
        {name: 'i-Free', logo: 'i-free.svg', url: '#'},
      ],
      bubbles: [
        'AI', 'FinTech', 'Разработка игр', 'Облачные решения', 'Трейдинг', 'Телеком', 'FoodTech'
      ]
    }
  }
}
</script>

<style scoped>
img {
  margin: 2em;
  display: inline-block;
}

.bubbles {
  margin-top: 2em;
}
</style>