<template>
  <div class="bg">
    <div ref="container" class="container">
      <div class="navigation">
        <h2>{{ title }}</h2>
        <div ref="tabs" class="tabs">
          <div class="tab"
               @click="currentSlide = i"
               :ref="'tab_'+i"
               :class="{ active: currentSlide === i }"
               v-for="(slide,i) in data"
               :key="i">
            {{ slide.title }}
          </div>
        </div>
      </div>
      <div ref="slide" class="content">
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
import ModalTelegram from "@/components/modals/ModalTelegram";
import ModalClose from "@/components/modals/ModalClose";


export default {
  name: "HelpSlider",
  components: {ModalClose, ModalTelegram, Overlay, ListItemPlay, TransparentButton},
  props: ['title', 'data'],
  data() {
    return {
      windowWidth: window.innerWidth,
      modal: false,
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
    },
    mobileDetect() {
      return this.windowWidth < 780
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
    moveContent() {
      let slide = this.currentSlide + 1
      let target = this.$refs['tab_' + slide]
      let len = document.querySelectorAll('.tabs .tab').length - 1

      this.mobileDetect ?
          this.$refs.tabs.insertBefore(this.$refs.slide, target)
          : this.$refs.container.appendChild(this.$refs.slide)

      setTimeout(() => {
        let contentHeight = this.$refs.slide.offsetHeight

        let destination = len !== this.currentSlide
            ? this.$refs['tab_' + slide].getBoundingClientRect().top + document.documentElement.scrollTop - contentHeight -180
            : this.$refs['tab_' + len].getBoundingClientRect().top + document.documentElement.scrollTop  - 180

        console.log('len-' + len + " " + "slide-" + slide)

        window.scrollTo({
          top: destination,
          behavior: "smooth"
        })
      }, 50)
    }
  },
  updated() {
    this.moveContent()
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.mobileDetect ?
        this.$refs.tabs.insertBefore(this.$refs.slide, this.$refs.tabs.childNodes[2])
        : this.$refs.container.appendChild(this.$refs.slide)


    // let content = document.getElementById('slide-content')
    // content.remove()
    // let tabs = document.querySelectorAll('#tabs .tab')
    // let test = document.createElement('div')
    // test.style.height = 2 + 'px'
    // test.style.backgroundColor = 'red'
    // this.mobileDetect && document.getElementById('tabs').insertBefore(test, tabs[this.currentSlide + 1])

  },
  watch: {
    windowWidth(newW) {
      this.windowWidth = newW;
    }
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize);
  },
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

.navigation h2 {
  margin-right: 1em;
}

.tabs {
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-between;
  margin-top: 2em;
  font-size: 21px;
}

.btn {
  width: 100%;
  margin-top: 1em;
}


.tab {
  margin: 0.4em 0;
  padding: 5px 3em 0 0;
  cursor: pointer;
  transition: all 200ms;
  background: url("../assets/images/white-arrow.svg") no-repeat right -2em top;
  border-left: 0 solid black;
}

.tab.active {
  color: black;
  background: url("../assets/images/white-arrow.svg") no-repeat right top;
  min-height: 2em;
  padding-left: 1em;
  border-left: 3px solid black;

}

h2:first-child {
  margin-top: 0;
}

.container {
  padding: 4em 3em;
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

.sticky {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

@media (max-width: 1140px) {

  .tab {
    font-size: 17px;
  }

  hr {
    margin: 1.9em 0;
  }

}

@media (max-width: 1280px) {

  .tab {
    font-size: 18px;
  }

  hr {
    margin: 2.3em 0;
  }
}

@media (max-width: 420px) {
  .container {
    padding: 2em 1em;
  }

  .navigation {
    width: 100%;
  }

  .tabs {
    width: 100%;
  }

  .tab {
    background: none;
    padding: 0;
    margin: .5em 0;
    width: 100%;
  }

  .tab.active {
    padding-left: unset;
    border-left: none;
    margin-bottom: unset;
    padding-bottom: 1em;
    position: relative;
    font-weight: bold;
    background-image: none;
  }

  .tab.active:before {
    content: '';
    height: 2em;
    width: 2em;
    background: url("../assets/images/white-arrow.svg") bottom / contain no-repeat !important;
    bottom: -0.7em;
    left: calc(50% - 1em);
    position: absolute;
    transform: rotate(90deg);
  }

  .tabs .content h2 {
    color: black;
  }

  .tabs .content {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    background: white;
    margin: 0 auto 1em;
    border-radius: 20px;
  }

  hr {
    margin: 1em 0;
  }

  .tabs .content:before {
    display: none;
  }
}
</style>