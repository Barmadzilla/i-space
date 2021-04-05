<template>
  <div class="container">


    <div class="info">
      <div class="content">
        <h2>DevOps и <br><span class="text-gradient">облачные решения</span></h2>
        <p>Организуем нормальный процесс разработки и запуска продуктов. Перенесём сервисы в облачное пространство.</p>
      </div>
      <review :bg="'gray'" :data="reviews" class="reviews"/>
      <img src="../assets/images/pro_devops.svg" alt="">
    </div>
    <div class="stack">
      Используем технологии: Yandex cloud, Asure MS, Digital Ocean, AWS, Google Platform, Kubernetes, Openshift, Postgresql, Clickhouse, ArangoDB, MySQL,
      MongoDB, MsSQL, Redis, Memcached, RabbitMq, Apache kafka, Azure Storage, Zookeeper, Consul, Prometheus, Grafana, Alertmanager.
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'It Support'}">
        <solid-button :color="'green'">Подробнее о DevOps</solid-button>
      </router-link>
      <transparent-button @click="modal = true">Получить консультацию</transparent-button>
    </div>

  </div>
  <div class="container">
    <div class="bubbles">
      <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
    </div>
  </div>
  <teleport to="#overlay">
    <Overlay v-if="modal">
      <modal-telegram
          :title="'Узнайте условия партнёрской системы i-Space'"
          :subtitle="'Оставьте заявку, чтобы обсудить партнёрские условия и стать партнёром i-Space'">
        <modal-close @click="modal = false"/>
      </modal-telegram>
    </Overlay>
  </teleport>
</template>

<script>
import SolidButton from "@/components/buttons/SolidButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import Bubble from "@/components/bubbles/Bubble";
import Review from "@/components/review/Review";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";

export default {
  name: "BlockLegals",
  components: {Bubble, Review, SolidButton, TransparentButton,
    Overlay, ModalClose, ModalTelegram},
  data() {
    return {
      modal:false,
      bubbles: [
        'Облачная разработка',
        'CI/CD конвейеры',
        'Node.JS',
        'React',
        'nginx',
        'DevOps',
        'Golang',
        'Python',
        'Delivery Stack',
        'PHP',
        'GitHub',
        'BitBucket',
        'GitLab',
        'Docker HUB',
        'Quay',
        'ACL rules',
        'Kubernetes',
        'Openshift',
        'Rest API',
      ],
      reviews: [
        {
          review:
              'Ребята помогли нам переехать на более стабильный сервер. Текущая производительность кластеров обеспечивает 100% устойчивость к отказам при работе с бэкендом БД и фронтэндом',
          reviewer: {
            name: 'Сергей Шульга',
            credits: 'Основатель НаЛанч',
            logo: 'na-lunch.svg',
          }
        }
      ]
    }
  },
  watch: {
    modal() {
      if (this.modal) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.removeAttribute('style')
      }
    }
  },

}
</script>

<style scoped>
.container {
  margin-top: 3em;
}

.info {
  display: flex;
  text-align: left;
  align-items: flex-start;
}

.info p {
  font-size: 25px;
  font-weight: 300;
}

.reviews {
}

img {
  flex-shrink: 9;
  width: 100%;
  max-height: 360px;
  margin-left: 1em;
}

.buttons {
  margin: 3em 0;
}

.bg-gray {
  background: var(--bg-gray);
  padding: 3em 0 0;
}

.content {
  flex-shrink: 8;
  margin-right: 1em;
}

h2 {
  margin-top: 0;
}

.buttons {
  justify-content: flex-start;
  display: flex;
}

.stack {
  text-align: left;
  font-size: 15px;
  margin: 1.2em 0;
}
</style>