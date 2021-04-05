<template>
  <div class="bg">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Overlay",
  mounted() {
    setTimeout(() => document.documentElement.style.overflow = 'hidden', 100)
  },
  unmounted() {
    document.documentElement.removeAttribute('style')
  }
}
</script>

<style scoped>

</style>