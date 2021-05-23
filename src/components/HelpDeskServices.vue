<template>
  <div class="container">
    <div class="info">
      <h2><span class="text-gradient">HelpDesk</span> сервисы</h2>
      <p>Поддержим вашу IT инфраструктуру и сотрудников 24х7</p>
    </div>
    <div class="services">
      <div class="service" v-for="(service,i) in services" :key="i">
        <img :src="require(`@/assets/images/icons/${service.icon}`)">
        <p>{{ service.content }}</p>
      </div>
    </div>
    <img class="hand" src="../assets/images/help-desk-hand.svg">
  </div>
</template>

<script>
export default {
  name: "HelpDeskServices",
  data() {
    return {
      services: [
        {
          content: 'Быстрое устранение любых неполадок в работе компьютеров',
          icon: 'fin-tech.svg'
        },
        {
          content: 'Установка антивирусной защиты, проверка на наличие вредоносных программ, их устранение',
          icon: 'game-devs.svg'
        },
        {
          content: 'Закупка необходимого оборудования со скидками',
          icon: 'e-commerce.svg'
        },
        {
          content: 'Обслуживание банк-клиентов',
          icon: 'fmcg.svg'
        },
        {
          content: 'Тех поддержка при открытии офиса, подключение интернета, wifi, организация сетей электроснабжения и кабельной системы',
          icon: 'mob-apps.svg'
        },
        {
          content: 'Обслуживание сервиса печати и сканирования, офисной телефонии',
          icon: 'spam-it.svg'
        },
        {
          content: 'Подключение к сетевым ресурсам, поддержка работы с продуктами Microsoft (Office, Skype и т.д.), установка VPN-клиентов. ',
          icon: 'saas-paas.svg'
        },
        {
          content: 'Поддержка по телефону, e-mail, ТГ, WA, тикетных системах. ',
          icon: 'mob-apps.svg'
        },
      ]
    }
  }
}
</script>

<style scoped>

.info {
  margin-bottom: 3em;
}

.services {
  display: grid;
  grid-gap: 3em;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 3em;
}

.service {
  display: flex;
}

.service img {
  margin-right: 2em;
}

.service:nth-child(6),
.service:nth-child(8) {
  width: 64%;
}

.container {
  position: relative;
  padding: 3em;
}

.hand {
  position: absolute;
  right: -1em;
  bottom: 0;
}

@media (max-width: 420px) {
  .services {
    grid-template-columns: 1fr;
    grid-gap: 1.5em;
  }

  .service:last-child {
    width: 100%;
  }

  .container {
    padding: 2em 1em 16em !important;
  }
}
</style>