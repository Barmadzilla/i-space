<template>
  <div class="action">
    <div class="container">
      <h2 v-html="actionTitle"></h2>
      <div class="info">
        {{ msg }}
      </div>
      <solid-button :color="'blue'" :hover="'white'" @click="modal = true">{{ btnText }}</solid-button>
    </div>
  </div>
  <teleport to="#overlay">
    <Overlay v-if="modal">
      <modal-subscribe v-if="type==='subscribe'"
                       :title="formCredits[0]"
                       :subtitle="formCredits[1]"
                       :type="formCredits[2]">
        <modal-close @click="modal = false"/>
      </modal-subscribe>
      <modal-telegram v-else>
        <modal-close @click="modal = false"/>
      </modal-telegram>
    </Overlay>
  </teleport>
</template>


<script>
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";
import SolidButton from "@/components/buttons/SolidButton";
import ModalSubscribe from "@/components/ModalSubscribe";

export default {
  name: "CallToAction",
  props: ['btnText', 'type', 'actionTitle', 'msg', 'formCredits'],
  components: {ModalSubscribe, ModalTelegram, SolidButton, Overlay, ModalClose},
  data() {
    return {
      modal: false
    }
  }
}
</script>

<style scoped>
.action {
  background: var(--gradient);
  color: white;
  padding: 2em 0;
  text-align: left;
}

.action .container {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 2fr 2fr 1fr;
}

h2 {
  margin-top: -0.3em;
  margin-bottom: 0;
  font-size: 31px;
  flex-shrink: 1;
}

.info {
  color: white;
  font-size: 18px;
  line-height: 150%;
}

.field {
  display: flex;
  justify-content: center;
}

form {
  text-align: left;
}

form p {
  font-size: 15px;
  color: white;
  text-align: right;
  margin-top: 0.5em;
}

input {
  background: #FFFFFF;
  border-radius: 8px 0 0 8px;
  padding: 15px 20px;
  appearance: none;
  border: none;
  outline: none;
  margin: 0;
  font-size: 25px;
  width: 100%;
}

input[type='submit'] {
  background: var(--deep-blue);
  border-radius: 0 8px 8px 0;
  font-size: 20px;
  color: white;
  width: min-content;
}

a {
  margin: 0;
  justify-self: flex-end;
  align-self: stretch;
  display: grid;
  align-items: center;
}
@media (max-width: 1280px) {
  h2 {
    font-size: 28px;
  }
  .info{
    line-height: 1.5;
    font-size: 16px;
  }
}
@media (max-width: 1024px) {
  h2 {
    font-size: 24px;
  }
  .info{
    line-height: 1.4;
    font-size: 15px;
  }
}
</style>