<template>
  <navigation/>
  <div class="slide">
    <div class="container">
      <div>
        <h1 v-html="title"></h1>
        <div class="words mobile-hide">
          <div class="word" v-for="(word,i) in info" :key="i">
            <h3>{{ word.title }}</h3>
            <p>{{ word.content }}</p>
          </div>
        </div>
        <div class="buttons">
          <gradient-bg-button @click="modal = true">Получить консультацию</gradient-bg-button>
          <transparent-icon-button :icon="'telegram'" :link="'tg://resolve?domain=@i_Space_team'">Написать в Телеграм</transparent-icon-button>
        </div>
      </div>
      <div class="person">
        <img :src="require(`../assets/images/faces/${person.img}`)">
      </div>
      <div class="bubbles">
        <Bubble v-html="person.name" />
      </div>
    </div>
    <div class="features">
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
import Navigation from "@/components/Navigation";
import TransparentIconButton from "@/components/buttons/TransparentIconButton";
import Bubble from "@/components/bubbles/BubbleHeader";
import Overlay from "@/components/Overlay";
import ModalClose from "@/components/ModalClose";
import ModalTelegram from "@/components/ModalTelegram";
import GradientBgButton from "@/components/buttons/GradientBgButton";


export default {
  name: "HeaderService",
  props:['info','title','person'],
  components: {
    Navigation, GradientBgButton, Bubble, TransparentIconButton,
    Overlay, ModalClose, ModalTelegram
  },
  data() {
    return {
      modal:false,
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  display: grid;
  grid-template-columns: auto 38%;
  position: relative;
  padding: 7em 3em 8em;
}

.person {
  position: relative;

}

.person img {
  height: 80vh;
  min-height: 640px;
  max-height: 690px;
  position: absolute;
  right: -3.5em;
  top: 0;
}


h1 {
  font-size: 39px;
  margin: 0  0 1em ;
}

.buttons {
  margin-top: 2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.bubbles {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  bottom: 4.5em;
  right: 3em;
  width: 100%;
  box-sizing: border-box;
}
.bubble {
  max-width: 282px;
}

.features {
  height: 6em;
  background: linear-gradient(rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 1));
  /*backdrop-filter: blur(10px);*/
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
}

.words {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
}

@supports (backdrop-filter: none) {
  .features {
    background: linear-gradient(rgba(255, 255, 255, 0.10) , rgba(255, 255, 255, 1));
    backdrop-filter: blur(10px);
  }
}

@media (max-width: 1140px) {
  h1 {
    font-size: 30px;
  }
}
@media (max-width: 420px) {
  h1 {
    font-size: 28px;
    text-align: center;
    line-height: 1.3;
  }
  .container{
    padding: 4.9em 2em 1em;
    grid-template-columns: 1fr;

  }
  .buttons {
    flex-wrap: wrap;
  }
  .buttons .btn,
  .buttons a{
    margin: 0 0 0.5em 0;
    width: 100%;
  }
  .buttons a:before {
    border: none;
  }
  .person img{
    min-height: unset;
    right: 0;
    width: 100%;
    height: unset;
    top: unset;
    bottom: 2em;
  }
  .bubbles{
    width: 100%;
    padding: 0;
    justify-content: center;
    bottom: 7em;
    right: unset;
  }
  .slide{
    /*height: 120vh;*/
  }
}
</style>