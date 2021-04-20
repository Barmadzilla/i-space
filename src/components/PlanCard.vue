<template>
  <div class="card">
    <h2 v-html="planTitle"></h2>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="price">{{ price }}</p>
    <list-item-play v-for="(item, i) in services" :key="i">{{ item }}</list-item-play>
    <solid-button :color="'green'" @click="modal = true">Консультация по тарифу</solid-button>
  </div>
  <teleport to="#overlay">
    <overlay v-if="modal">
      <modal-telegram>
        <modal-close @click="modal = false" @keypup.esc="modal = false"/>
      </modal-telegram>
    </overlay>
  </teleport>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import SolidButton from "@/components/buttons/SolidButton";
import Overlay from "@/components/Overlay";
import ModalTelegram from "@/components/ModalTelegram";
import ModalClose from "@/components/ModalClose";

export default {
  name: "PlanCard",
  props: ['planTitle', 'subtitle', 'price', 'services'],
  components: {ModalClose, ModalTelegram, Overlay, ListItemPlay, SolidButton},
  data(){
    return{
      modal:false
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  padding: 2.5em;
  border-radius: 8px;
}
.price{
  font-weight: bold;
  margin-bottom: 1em;
}
.subtitle{
  margin-bottom: 0.7em;
}
.card a{
  width: 100%;
  margin-top: 0.5em;
}
.card .list-item{
  margin-bottom: 1em;
}
.card h2{
  margin-top: 0;
}

@media (max-width: 1140px) {
  .card{
    padding: 1.8em;
  }
}
</style>