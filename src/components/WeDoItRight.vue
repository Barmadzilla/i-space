<template>
  <div class="bg" :class="bg">
    <div class="container">
      <div>
        <div class="info">
          <h2>{{ info.title }}</h2>
          <p>{{ info.content }}</p>
        </div>
        <div v-for="(block,i) in blocks" :key="i">
          <h4>{{ block.title }}</h4>
          <p>{{ block.content }}</p>
        </div>
        <solid-button :color="'blue'" :link="'tg://resolve?domain=@i_Space_team'">Написать в телеграм</solid-button>
      </div>
      <img :src="require(`@/assets/images/${dude}`)" alt="">
    </div>
  </div>
</template>

<script>
import SolidButton from "@/components/buttons/SolidButton";

export default {
  name: "WeDoItRight",
  props: ['info', 'blocks', 'dude', 'bg', 'link'],
  components: {SolidButton}
}
</script>

<style scoped>
.bg.green {
  background: var(--bg-green);
}

.bg.blue {
  background: var(--bg-blue);
}

.container {
  display: flex;
  align-items: center;
  padding: 3em;
}

.info h2 {
  margin-top: 0;
}

.info p {
  font-size: 25px;
  font-weight: 300;
}

p {
  margin-bottom: 2em;
}

img {
  flex-shrink: 0;
  margin-left: 2em;
}
</style>