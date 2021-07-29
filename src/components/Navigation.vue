<template>
  <header>
    <div class="container" ref="container" :class="{ open: showMenu }">
      <div class="logo" :class="{ right: showMenu }" ref="logo">
        <router-link :to="'/'"
          ><img :src="require(`../assets/${logotype}`)" alt="iSpace логотип"
        /></router-link>
        <div
          class="open menu-btn"
          v-if="mobileDetect"
          @click="showMenu = !showMenu"
        >
          <span v-for="i in 3" :key="i" :class="{ ani: showMenu }"></span>
        </div>
      </div>
      <div id="nav" v-if="showMenu">
        <ul>
          <li>
            <a
              href="#"
              @click.prevent="open = true"
              class="sub"
              :class="classObj"
              >Услуги</a
            >
            <transition name="fade">
              <ul v-if="open" @mouseleave="open = false">
                <li>
                  <router-link :to="'/i-legal'"
                    >Юридическое сопровождение</router-link
                  >
                </li>
                <li>
                  <router-link :to="'/finances'">Финансовый учет</router-link>
                </li>
                <li>
                  <router-link :to="'/it-support'">IT поддержка</router-link>
                </li>
                <li>
                  <router-link :to="'/offices'">Офисный менеджмент</router-link>
                </li>
              </ul>
            </transition>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="
                toSection('price');
                showMenu = !showMenu;
              "
              >Тарифы</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="
                toSection('clients');
                showMenu = !showMenu;
              "
              >Клиенты</a
            >
          </li>
          <li v-if="$route.path === '/'">
            <a
              href="#"
              @click.prevent="
                toSection('about');
                showMenu = !showMenu;
              "
              >О компании</a
            >
          </li>
          <li v-if="$route.path !== '/'">
            <a
              href="#"
              @click.prevent="
                toSection('cases');
                showMenu = !showMenu;
              "
              >Кейсы</a
            >
          </li>
          <li v-if="$route.path !== '/'">
            <a
              href="#"
              @click.prevent="
                toSection('team');
                showMenu = !showMenu;
              "
              >Команда</a
            >
          </li>
        </ul>

        <LocaleSwitcher v-show="false" />
        <Social />
      </div>
    </div>
  </header>
</template>

<script>
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Social from "@/components/Social";

export default {
  name: "Navigation",
  components: { LocaleSwitcher, Social },
  props: ["logo"],
  methods: {
    toSection(section) {
      let params;
      if (section) {
        params = section;
      } else {
        params = this.$route.params.section;
      }
      if (params) {
        let target = document.getElementById(`${params}`);
        let currentY = window.pageYOffset;
        // console.log(target)
        target = target.getBoundingClientRect().top;
        // console.log(target)
        // console.log(currentY)
        let destination = currentY >= 0 ? target + currentY - 85 : target - 85;
        // console.log(destination)

        window.scrollTo({
          top: destination,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    newLogoLeft() {
      let logoWidth = this.$refs.logo.offsetWidth;
      return this.windowWidth - logoWidth * 2 - 18;
    },
    closeMenu() {
      this.showMenu = this.mobileDetect ? false : true;
    },
  },
  mounted() {
    setTimeout(this.toSection, 40);
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
    this.showMenu = !this.mobileDetect;
  },
  data() {
    return {
      open: false,
      showMenu: true,
      logoLeft: 0,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    logotype() {
      if (this.$route.path === "/it-support") {
        return "logo-ispace-tech.svg";
      } else if (this.$route.path === "/i-legal") {
        return "logo-ispace-legal.svg";
      } else if (this.$route.path === "finances") {
        return "logo-ispace-finances.svg";
      } else {
        return "logo-ispace.svg";
      }
    },
    classObj() {
      return {
        active: !!this.open,
      };
    },
    mobileDetect() {
      return this.windowWidth < 780;
    },
  },
  watch: {
    windowWidth(newW) {
      this.windowWidth = newW;
      this.newLogoLeft();
    },
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style scoped>
.logo a {
  margin: 0;
  display: flex;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 200ms;
}

header {
  padding: 20px 0;
  background: rgba(255, 255, 255, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
}

@supports (backdrop-filter: none) {
  header {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(10px);
  }
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
  margin-bottom: 0.5em;
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
  content: "";
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

@media (max-width: 1140px) {
  header {
    padding: 15px 0;
  }
}

@media (max-width: 420px) {
  header {
    padding: 1em 0;
    box-sizing: border-box;
  }

  /* header #nav {
    display: none;
  } */

  header li {
    display: block;
    text-align: right;
    text-transform: uppercase;
  }

  a.sub {
    padding-right: 0;
  }

  a.sub:after {
    display: none;
  }

  /* header ul {
    padding: 2em 0 0;
  } */

  header li ul {
    position: relative;
    background: none;
    box-shadow: unset;
    top: 0;
    right: 0;
    padding: 0 0.6em 0;
    margin: 0 1.5em 0 2em;
    border-right: 1px solid lightgray;
    border-radius: unset;
    box-sizing: border-box;
  }

  #nav {
    width: 100%;
    justify-content: flex-end;
  }

  #nav.hide {
    display: none;
  }

  header li {
    margin: 0.6em 0;
  }

  header li ul li {
    text-transform: none;
    font-size: 0.9em;
  }

  .container.open {
    flex-direction: column;
    position: relative;
    align-items: flex-end;
  }

  .logo {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .menu-btn {
    display: inline-block;
    width: 50px;
    height: 30px;
    z-index: 400;
    padding: 2px;
    position: absolute;
    right: 0;
    /*top: 20px;*/
    cursor: pointer;
    overflow: hidden;
  }

  .menu-btn span {
    background: var(--text-gray);
    position: absolute;
    height: 2px;
    width: 30px;
    display: block;
    transition: all 200ms;
    transform-origin: left;
    transition-delay: 160ms;
    top: 3px;
    pointer-events: none;
  }

  .menu-btn span:nth-child(2) {
    top: 14px;
    transition-delay: 0ms;
  }

  .menu-btn span:nth-child(3) {
    top: 25px;
  }

  .menu-btn span:nth-child(2).ani {
    transform: translateX(60px);
  }

  .menu-btn span.ani {
    transform: rotate(45deg);
  }

  .menu-btn span:nth-child(3).ani {
    transform: rotate(-45deg);
  }
}
</style>