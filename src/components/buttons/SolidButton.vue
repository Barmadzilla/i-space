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
</style>