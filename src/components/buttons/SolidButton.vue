<template>
  <a :href="link" :class="classObj">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: "SolidButton",
  props: ['link', 'color', 'hover'],
  computed: {
    classObj() {
      return {
        green: this.color === 'green',
        blue: this.color === 'blue',
        dark: this.color === 'dark',
        'hover-white': this.hover === 'white'
      }
    }
  }
}
</script>

<style scoped>
a {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  color: white;
  padding: 16px 30px 14px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 1em;
  border: 2px solid transparent;
  box-sizing: border-box;
  font-size: 20px;
  transition: all 150ms;
}

a.blue {
  background: var(--deep-blue);
}

a.blue:hover {
  border-color: var(--deep-blue);
  color: var(--deep-blue);
}

a.green {
  background: var(--green);
}

a.green:hover {
  border-color: var(--green);
  color: var(--green);
}

a.dark {
  background: var(--bg-dark);
}

a.dark:hover {
  border-color: var(--bg-dark);
  color: var(--bg-dark);
}

a:hover {
  background: transparent;
}

a.hover-white:hover {
  background: white;
  border-color: transparent;
}
@media (max-width: 1140px) {
  a {
    font-size: 18px;
    padding: 14px 30px 13px;
  }
}

@media (max-width: 1024px) {
  a{
    font-size: 16px;
    padding: 12px 30px 11px;
  }
}
@media (max-width: 420px) {
  a{
    font-size: 15px;
    width: 100%;
    margin: 0 0 1em 0;
  }
}
</style>