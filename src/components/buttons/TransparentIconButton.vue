<template>
  <a :href="link" :class="color">
    <svg id="icon" width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" v-html="setIcon"></svg>
    <slot></slot>
  </a>
</template>


<script>
export default {
  name: "TransparentIconButton",
  props: ['link', 'icon', 'color'],
  data() {
    return {
      icons: {
        telegram: `<path  d="M22.0517 2.12925L0.788779 10.3711C-0.0668776 10.7549 -0.356284 11.5235 0.581966 11.9407L6.03681 13.6831L19.2259 5.48986C19.9461 4.9755 20.6833 5.11266 20.0489 5.67849L8.72125 15.9879L8.36542 20.3509C8.695 21.0245 9.29847 21.0277 9.6834 20.6928L12.8174 17.7121L18.1848 21.7521C19.4314 22.494 20.1098 22.0152 20.378 20.6555L23.8985 3.89911C24.2641 2.22544 23.6407 1.488 22.0517 2.12925Z" />`

      }
    }
  },
  computed: {
    setIcon() {
      return this.icon === 'telegram' && this.icons.telegram
    }
  }
}
</script>

<style scoped>
svg#icon {
  fill: var(--light-blue) ;
}

a {
  display: inline-block;
  text-align: center;
  background: var(--gradient);
  padding: 16px 30px 14px calc(30px + 18px * 2);
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
  box-sizing: border-box;
  font-size: 20px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  z-index: 1;
}

a svg {
  position: absolute;
  top: calc(50% - 13px);
  left: 30px;
}

a:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  display: inline-block;
  border-radius: inherit;
  /*border-image: var(--gradient);*/
  border: 2px solid var(--light-blue);
  /*border-image-slice: 1;*/
}

a.green:before {
  border-color: var(--green);
}

a:hover {
  -webkit-background-clip: unset;
  -webkit-text-fill-color: unset;
  color: white;
}

a:hover::before {
  border: none;
}

a:hover svg#icon {
  fill: white;
}
</style>