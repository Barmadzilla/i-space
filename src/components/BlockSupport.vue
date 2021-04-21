<template>
  <div class="container">
    <div class="info">
      <div class="content">
        <h2>Поддержка<br><span class="text-gradient">IT-инфраструктуры</span></h2>
        <p>Наладим бесперебойную работу персональной и серверной техники в офисе. Решим все плановые и экстренные вопросы. </p>
      </div>
      <review :bg="'gray'" :data="reviews" class="reviews mobile-hide"/>
      <img src="../assets/images/pro_it.svg" alt="">
    </div>
    <div class="stack"  v-show="false">
      Технологический стек i-Space: Unix, Ubuntu, Win, KVM, Ceph, MongoDB, PostgreSQL, Puppet, Elasticsearch, Logstash, Kibana, ZABBIX, MySQL, Azure, CentOS,
      Redis, Ansible, Docker/Kubernetes, Last Backend
    </div>
    <div class="buttons">
      <router-link :to="{ name: 'It Support'}">
        <solid-button :color="'green'">Подробнее об IT-поддержке</solid-button>
      </router-link>
      <transparent-button class="mobile-hide" @click="modal = true">Получить консультацию</transparent-button>
    </div>

  </div>
  <div class="container mobile-hide">
    <div class="bubbles">
      <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
    </div>
  </div>
  <teleport to="#overlay">
    <Overlay v-if="modal">
      <modal-telegram>
        <modal-close @click="modal = false"/>
      </modal-telegram>
    </Overlay>
  </teleport>
</template>

<script>
import Bubble from "@/components/bubbles/Bubble";
import Review from "@/components/review/Review";
import SolidButton from "@/components/buttons/SolidButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";


export default {
  name: "BlockLegals",
  components: {Bubble, Review, SolidButton, TransparentButton,
    Overlay, ModalClose, ModalTelegram},
  data() {
    return {
      modal: false,
      bubbles: [
        'HelpDesk',
        'Мониторинг ИТ-систем',
        'Удаленная тех. поддержка',
        'Windows-администрирование',
        'UNIX-администрирование',
        'Управление сетевым оборудованием',
        'Развёртывание ИТ-систем',
        'Аккаунтинг',
        'Серверное обслуживание',
        'Облачные решения',

      ],
      reviews: [
        {
          review:
              'i-Space помог перевести весь наш продакшн из дата-центра в облака. Это позволило снизить ежемесячные расходы на поддержку продакшн-структуры уменьшились на 40%. Браво!',
          reviewer: {
            name: 'Антон Баранов',
            credits: 'Гендиректор i-Digital',
            logo: 'i-digital.svg',
          }
        }
      ]
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

.reviews {
}

img {
  flex-shrink: 9;
  width: 100%;
  max-height: 360px;
  margin-left: 1em;
}

.buttons {
  margin:0 0 3em ;
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
@media (max-width: 1280px) {
  .buttons {
    margin: 3em 0 ;
  }
}
@media (max-width: 420px){
  h2 {
    margin-top: 1em;
  }
  .info{
    display: flex;
    flex-direction: column-reverse;
  }
  a{
    width: 100%;
  }
  .buttons{
    margin: 1em 0;
  }
}
</style>