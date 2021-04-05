<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link :to="'/'"><img :src="require(`../assets/${logotype}`)" alt="iSpace логотип"></router-link>
      </div>
      <div id="nav">
        <ul>
          <li><a href="#" @click.prevent="open = !open" class="sub" :class="classObj">Услуги</a>
            <transition name="fade">
              <ul v-if="open" @mouseleave="open = false">
                <li>
                  <router-link :to="'/i-legal'">Юридическое сопровождение</router-link>
                </li>
                <li>
                  <router-link :to="'/finances'">Фиансовый учет</router-link>
                </li>
                <li>
                  <router-link :to="'/it-support'">IT поддержка</router-link>
                </li>
                <li>
                  <router-link :to="'/offices'">Офис менеджмент</router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li><a href="#" @click.prevent="toSection('price')">Тарифы</a></li>
          <li><a href="#" @click.prevent="toSection('clients')">Клиенты</a></li>
          <li v-if="$route.path==='/'"><a href="#" @click.prevent="toSection('about')">О компании</a></li>
          <li v-if="$route.path!=='/'"><a href="#" @click.prevent="toSection('cases')">Кейсы</a></li>
          <li v-if="$route.path!=='/'"><a href="#" @click.prevent="toSection('team')">Команда</a></li>
        </ul>
        <LocaleSwitcher v-show="false"/>
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default {
  name: "Navigation",
  components: {LocaleSwitcher},
  props: ['logo'],
  methods: {
    toSection(section) {
      let params
      if (section) {
        params = section
      } else {
        params = this.$route.params.section
      }
      if (params) {
        let target = document.getElementById(`${params}`)
        let currentY = window.pageYOffset
        // console.log(target)
        target = target.getBoundingClientRect().top
        // console.log(target)
        // console.log(currentY)
        let destination = currentY >= 0 ? target + currentY - 85 : target - 85
        // console.log(destination)

        window.scrollTo({
          top: destination,
          behavior: "smooth"
        })
      } else {
        window.scrollTo({
              top: 0,
              behavior: "smooth"
            }
        )
      }
    }
  },
  mounted() {
    setTimeout(this.toSection, 40)
  },
  data() {
    return {
      open: false
    }
  },
  computed: {
    logotype() {
      if (this.logo === 'it') {
        return 'logo-ispace-tech.svg'
      } else if (this.logo === 'legal') {
        return 'logo-ispace-legal.svg'
      } else if (this.logo === 'finances') {
        return 'logo-ispace-finances.svg'
      } else {
        return 'logo-ispace.svg'
      }
    },
    classObj() {
      return {
        active: !!this.open
      }
    }
  }
}
</script>

<style scoped>
header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header {
  padding: 20px 0;
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

header ul {
  list-style: none;
}

header li {
  display: inline-block;
  position: relative;
}

header #nav {
  display: flex;
}

header li ul {
  padding: 1.2em;
  position: absolute;
  left: 1em;
  top: 2em;
  border-radius: 8px;
  background: var(--bg-gray);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
}

header li ul li {
  margin-left: 0;
  margin-bottom: .5em;
  display: list-item;
}

header li ul li:last-child {
  margin-bottom: 0;
}

header li ul a {
  white-space: nowrap;
  color: #949494;
  margin-left: 0;
}

a.sub {
  padding-right: 1em;
  position: relative;
}

a.sub:after {
  content: '';
  background: url("../assets/images/sub-arr.svg") no-repeat center;
  width: 10px;
  height: 10px;
  position: absolute;
  right: 0;
  top: 37%;
  transition: transform 200ms;
  transform: rotate(-90deg);
}

a.sub.active:after {
  transform: rotate(0);
}

header li ul a:hover {
  color: #000;
}

.fade-enter-active {
  transition: all 150ms ease;
}

.fade-leave-active {
  transition: all 350ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-1em);
}

</style>