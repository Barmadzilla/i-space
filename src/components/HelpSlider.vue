<template>
  <div class="bg">
    <div class="container">
      <div class="navigation">
        <h2>{{ title }}</h2>
        <div class="tabs">
          <div class="tab"
               @click="currentSlide = i"
               :class="{active: currentSlide===i }"
               v-for="(slide,i) in data"
               :key="i">
            {{ slide.title }}
          </div>
        </div>
      </div>
      <div class="content">
        <div class="sticky">
          <h2>{{ content.title }}</h2>
          <p>{{ content.subtitle }}</p>
          <hr>
          <transition name="anim">
            <div class="slide-content" v-if="getSlide">
              <h2>{{ getSlide.title }}</h2>
              <list-item-play v-for="(item,i) in getSlide.content.list" :key="i">{{ item }}</list-item-play>
            </div>
          </transition>
          <transparent-button class="btn" @click="modal = true">Интересно! Хочу подробностей!</transparent-button>
        </div>
      </div>
    </div>
  </div>
  <teleport to="#overlay">
    <Overlay v-if="modal">
      <modal-telegram>
        <modal-close @click="modal = false"></modal-close>
      </modal-telegram>
    </Overlay>
  </teleport>
</template>

<script>
import ListItemPlay from "@/components/lists/ListItemPlay";
import TransparentButton from "@/components/buttons/TransparentButton";
import Overlay from "@/components/Overlay";
import ModalTelegram from "@/components/ModalTelegram";
import ModalClose from "@/components/ModalClose";

export default {
  name: "HelpSlider",
  components: {ModalClose, ModalTelegram, Overlay, ListItemPlay, TransparentButton},
  props: ['title', 'data'],
  data() {
    return {
      modal:false,
      currentSlide: 0,
      content: {
        title: 'Наша экспертиза',
        subtitle: 'Каждый день решаем ваши задачи не зависимо от их количества, размера и особенностей вашего бизнеса'
      },
      slides: [
        {
          title: 'Непрерывная интеграция, доставка и развертывание',
          content: {
            list: [
              'Подготовка инфраструктуры для конвейеров CI/ CD',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
            ],
          }
        },
        {
          title: 'Непрерывная интеграция, доставка и развертывание 88',
          content: {
            list: [
              'Подготовка инфраструктуры для конвейеров CI/ CD2',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
            ],
          }
        },
        {
          title: 'Непрерывная интеграция, доставка и развертывание 3',
          content: {
            list: [
              'Подготовка инфраструктуры для конвейеров CI/ CD3',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
              'Создание конвейеров для интеграции, доставки и развертывания приложений',
            ],
          }
        },
      ]
    }
  },
  computed: {
    getSlide() {
      return this.data[this.currentSlide]
    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-dark);
  overflow: hidden;
}

.navigation {
  color: white;
  width: 45%;
}

.tabs {
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  margin-top: 2em;
  font-size: 25px;
}

.btn {
  width: 100%;
  margin-top: 1em;

}


.tab {
  margin: 0.7em 0;
  padding-right: 3em;
  padding-left: 0;
  cursor: pointer;
  transition: all 200ms;
  background: url("../assets/images/white-arrow.svg") no-repeat right -2em top;
  border-left: 0 solid black;
}

.tab.active {
  color: black;
  background: url("../assets/images/white-arrow.svg") no-repeat right top;
  min-height: 1.68em;
  padding-left: 1em;
  border-left: 3px solid black;

}

h2:first-child {
  margin-top: 0;
}

.container {
  padding: 4em 0;
  display: flex;
}

.content {
  width: 55%;
  padding: 3em 0 3em 3em;
  position: relative;
  z-index: 1;
}

.content:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  border-radius: 8px;
  width: 150%;
  height: 100%;
  z-index: -1;
}


hr {
  margin: 3em 0;
  border-color: var(--bg-dark);
}

.anim-enter-active {
  transition: all 150ms ease;
}

.anim-leave-active {
  transition: all 350ms ease;
}

.anim-enter-from,
.anim-leave-to {
  opacity: 0;
  transform: translatex(-1em);
}
</style>