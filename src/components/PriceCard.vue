<template>
  <div class="card">
    <div>
      <h3>{{ title }}</h3>
      <div class="price">от {{ price }}</div>
      <p class="top-note" v-if="topNote">{{ topNote }}</p>
      <div class="list" v-if="list">
        <check-list-item
            v-for="(item,i) in list"
            :key="i"
        ><span v-html="item"></span>
        </check-list-item>
      </div>
      <p class="bottom-note" v-if="bottomNote">{{ bottomNote }}</p>
    </div>
    <router-link v-if="link" :to="link">
      <solid-button :color="'dark'">Посмотреть все услуги и цены</solid-button>
    </router-link>
   <solid-button v-else :color="'dark'" @click="modal = true">Обсудить услуги и цены</solid-button>
  </div>
  <teleport to="#overlay">
    <overlay v-if="modal">
      <modal-telegram>
        <modal-close @click="modal = false"/>
      </modal-telegram>
    </overlay>
  </teleport>
</template>

<script>
import CheckListItem from "@/components/lists/CheckListItem";
import SolidButton from "@/components/buttons/SolidButton";
import Overlay from "@/components/Overlay";
import ModalTelegram from "@/components/ModalTelegram";
import ModalClose from "@/components/ModalClose";

export default {
  name: "PriceCard",
  components: {ModalClose, ModalTelegram, Overlay, CheckListItem, SolidButton},
  props: ['list', 'title', 'price', 'topNote', 'bottomNote', 'link'],
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>
.price {
  color: var(--deep-blue);
  font-weight: bold;
  font-size: 24px;
  margin: .3em 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px;
  background: white;
  border-radius: 8px;
}

.card a {
  width: 100%;
}

.list {
  margin: 1em 0 1.5em 0;
}

.top-note {
  font-size: 25px;
}

.bottom-note {
  font-family: 'Raleway', sans-serif;
  margin: 3em 0 1em;
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
}
</style>