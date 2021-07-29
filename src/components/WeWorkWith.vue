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
.industry-grid {
  --spacer: 4em;
  margin: var(--spacer) 0 0;
  padding-bottom: var(--spacer);
  display: grid;
  grid-gap: 2.5em;
  grid-template-columns: repeat(2, 1fr);
}

.industry {
  display: flex;
  padding: 0 2em;
}

.industry img {
  margin-right: 1.5em;
}

.industry h3 {
  margin-top: .1em;
}

@media (max-width: 1140px) {
  .industry img {
    width: 2.8em;
  }
}

@media (max-width: 420px) {
  .industry-grid {
    --spacer: 2em;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.7em;
  }

  .sub p {
    font-size: 16px;
  }

  .industry {
    padding: 0;
  }

  .industry h3 {
    font-size: 1em;
  }
  .industry img {
    width: 2.4em;
  }
}
</style>