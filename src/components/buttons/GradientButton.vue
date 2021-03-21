<template>
  <a href="#" :class="classObj">
    <img v-if="icon" :src="require(`@/assets/images/icons/${icons[icon]}`)" alt="">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "GradientButton",
  props: ['link', 'btStyle', 'icon', 'bg'],
  data() {
    return {
      icons: {
        telegram: 'telegram.svg'
      }
    }

  },
  computed: {
    classObj() {
      return {
        gradient: !this.icon && this.btStyle === 'gradient',
        blank: !this.btStyle,
        icon: this.btStyle,
        blue: this.btStyle === 'blue',
        'bggray': this.bg ==='gray',
        green: this.btStyle ==='green'
      }
    }
  }
}
</script>

<style scoped>
a {
  display: inline-flex;
  align-items: center;
  background: var(--gradient);
  padding: 15px 30px;
  border-radius: 8px;
  color: var(--light-blue);
  font-weight: 700;
  text-decoration: none;
  margin-right: 1em;
  border: 1px solid transparent;
  position: relative;
  z-index: 1;
}

a:before {
  left: 0;
  top: 0;
  z-index: -1;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  margin: 0;
  border-radius: 7px;
}

a:last-child {
  margin-right: 0;
}

a.gradient {
  background: var(--gradient);
  border: 1px solid transparent;
  color: #fff;
}
a.gradient:before,
a.blue:before,
a.green:before{
  display: none;
}
a.blue{
  background: var(--deep-blue);
  color: white;
}
a.green{
  background: var(--green);
  color: white;
}
a.bggray:before{
  background: var(--bg-gray);
}

img {
  margin: -0.4em 1em -0.4em 0;
}
</style>