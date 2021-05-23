<template>
  <div class="container">
    <div class="info">
      <h2>{{ title }}</h2>
      <p v-html="subtitle"></p>
    </div>
    <div class="industry-grid">
      <div class="industry" v-for="(ind,i) in industry" :key="i">
        <img :src="require(`@/assets/images/icons/${ind.icon}`)">
        <div>
          <h3>{{ ind.title }}</h3>
          <p>{{ ind.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import('../assets/css/components/industry.css')
export default {
  name: "WeWorkWith",
  props: ['title', 'subtitle'],
  data() {
    return {
      industry: [
        {
          title: 'Mobile Apps',
          content: 'разработчики любых приложений',
          icon: 'mob-apps.svg',
        },
        {
          title: 'GameDev',
          content: 'mobile, PC, web',
          icon: 'game-devs.svg',
        },
        {
          title: 'Разработчики ПО',
          content: 'инхаус и аутсорсинг',
          icon: 'soft-devs.svg',
        },
        {
          title: 'Финтех',
          content: 'платежные системы, PAY by tap, NFC',
          icon: 'fin-tech.svg',
        },
        {
          title: 'Startups',
          content: 'Вне зависимости от стадии и гео',
          icon: 'startups.svg',
        },
        {
          title: 'E-commerce Marketplace',
          content: 'от интернет магазина, до глобальных маркетплейсов',
          icon: 'e-commerce.svg',
        },
        {
          title: 'Blockchain проекты',
          content: 'Игры, финансы,  DeFI',
          icon: 'blockchain.svg',
        },
        {
          title: 'SAAS, PAAS',
          content: 'cloud solutions, коробочные решения',
          icon: 'saas-paas.svg',
        },
        {
          title: 'FMCG',
          content: 'ритейл, онлайн',
          icon: 'fmcg.svg',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>