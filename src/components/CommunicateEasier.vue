<template>
  <div class="container">
    <div>
      <h2>Общайтесь с клиентами проще</h2>
      <p>Постройте прочные отношения с клиентами во всех каналах связи с помощью простой платформы. Подтверждайте регистрацию клиентов, оповещайте их о спецпредложениях и
        повышайте продажи.</p>
      <transparent-button :color="'blue'" @click="modal = true">Подробнее о рассылках</transparent-button>
    </div>
    <div class="icons">
      <div class="icon" v-for="(item,i) in icons" :key="i">
        <img :src="require(`@/assets/images/icons/${item.img}`)" :alt="item.title">
        <div class="title">{{ item.title }}</div>
      </div>
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
import TransparentButton from "@/components/buttons/TransparentButton";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";

export default {
  name: "CommunicateEasier",
  components: {
    TransparentButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal:false,
      icons: [
        {title: 'SMS-рассылки', img: 'sms.svg'},
        {title: 'Viber-рассылки', img: 'viber.svg'},
        {title: 'WhatsApp для бизнеса', img: 'whatsapp.svg'},
        {title: 'Коды подтверждения', img: 'codes.svg'},
        {title: 'Мультиканальные рассылки', img: 'spam.svg'},
      ]
    }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3em;
  align-items: flex-start;
  padding: 3em;
}

p {
  margin-bottom: 2em;
  font-size: 25px;
}

h2 {
  margin-top: 0;
}

.icons {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  margin-top: 4em;
}

.icon {
  display: flex;
  align-items: center;
  max-width: 250px;
}

.icon img {
  margin-right: 1em;

}
</style>