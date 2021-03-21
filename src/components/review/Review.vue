<template>
  <div class="card" :class="bg">
    <p v-html="data[index].review"></p>
    <reviewer
        :name="data[index].reviewer.name"
        :credits="data[index].reviewer.credits"
        :logo="data[index].reviewer.logo"
    />
  </div>
</template>

<script>
import Reviewer from "@/components/review/Reviewer";

export default {
  name: "Review",
  props: ['data', 'bg'],
  components: {Reviewer},
  data() {
    return {
      index: 0
    }
  }
}
</script>

<style scoped>
.card {
  max-width: 500px;
  width: 420px;
  text-align: left;
  position: relative;
flex-shrink: 0;
  padding: 30px;
  box-sizing: border-box;
}
.card.white:before{
  content: '';
  bottom: 0;
  left: -38px;
  width: 38px;
  height: 61px;
  background: url('../../assets/images/card-white-edge.svg') no-repeat;
  position: absolute;
}
.card.white{
  background: white;
  border-radius: 16px 16px 16px 0;
}
.card.gray:before{
  content: '';
  top: 0;
  right: -38px;
  width: 38px;
  height: 61px;
  background: url('../../assets/images/card-gray-edge.svg') no-repeat;
  position: absolute;
}
.card.gray{
  background: var(--bg-gray);
  border-radius: 16px  0 16px 16px;
}

p {
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  font-size: 18px;
  color: var(--text-gray);
  opacity: 0.6;
}
</style>