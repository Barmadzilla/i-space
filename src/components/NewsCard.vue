<template>
  <div class="card">
    <div>
      <img :src="require(`@/assets/images/${img}`)" :alt="title">
      <div class="date">{{ date }}</div>
      <h3>{{ title }}</h3>
      <div class="content" v-html="content"></div>
    </div>
    <transparent-button v-if="btn" @click="modal = true">{{ btn }}</transparent-button>
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
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";
import TransparentButton from "@/components/buttons/TransparentButton";

export default {
  name: "NewsCard",
  components: {
    Overlay, ModalClose, ModalTelegram,
    TransparentButton
  },
  props: ['title', 'img', 'date', 'content', 'btn'],
  data() {
    return {
      modal: false
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
  }
}
</script>

<style scoped>
.card {
  width: 360px;
  margin-right: 2em;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  justify-self: flex-end;
  margin: 1em 0 0;
}

h3 {
  font-size: 24px;
  font-family: 'Circe', sans-serif;
  margin-bottom: 15px;
  font-weight: bold;
}

.date {
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  margin: 1.5em 0;
}
</style>