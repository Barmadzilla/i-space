<template>
  <div class="card">
    <div>
      <img :src="require(`@/assets/images/${img}`)" :alt="title">
      <div class="date">{{ date }}</div>
      <h3>{{ title }}</h3>
      <div class="content" v-html="content"></div>
    </div>
    <transparent-button v-if="type === 'modal'"  @click="modal = true">{{ btnTitle }}</transparent-button>
    <slot></slot>
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
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/modals/ModalClose";
import ModalTelegram from "@/components/modals/ModalTelegram";
import TransparentButton from "@/components/buttons/TransparentButton";

export default {
  name: "NewsCard",
  components: {
    Overlay, ModalClose, ModalTelegram,
    TransparentButton
  },
  props: ['title', 'img', 'date', 'content', 'btnTitle', 'type', 'link'],
  data() {
    return {
      modal: false
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
  width: 100%;
}


img {
  width: 100%;
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

.card .content small {
  font-size: 13px;
  color: red;
}
@media (max-width: 420px) {
  .card{
    width: 100%;
    margin-bottom: 2em;
  }
}
</style>