<template>
  <div class="row">
    <div class="col" v-for="(col,i) in mutated" v-html="col" :key="i"></div>
  </div>
</template>

<script>
export default {
  name: "TableRow",
  props: ['data'],
  data() {
    return {
      checkUrl: require("@/assets/images/icons/check_circle.svg")
    }
  },
  computed: {
    mutated() {
      let output = []
      this.data.forEach(e => {
        if (typeof e === 'boolean') {
          output.push(e ? `<img src="${this.checkUrl}">` : '—')
        } else {
          output.push(e)
        }
      })
      return output
    }
  }
}
</script>

<style scoped>

.col:nth-child(n+2) {
  text-align: center;
}

</style>