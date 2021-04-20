<template>
  <div :class="reverse">
    <div class="container"><h2 v-html="title"></h2></div>
    <div class="container logos">
      <div class="clients">
        <a v-for="client in clients" :href="client.url" :key="client.name">
          <img :src="require(`../assets/images/clients/${client.logo}`)" alt="client.name"/>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="bubbles">
        <bubble v-for="(bubble,i) in bubbles" :key="i">{{ bubble }}</bubble>
      </div>
    </div>
  </div>
</template>

<script>
import Bubble from "@/components/bubbles/Bubble";

export default {
  name: "AboutClients",
  props: ['reverse','title','subtitle', 'clients', 'bubbles'],
  components: {Bubble},
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.clients{
  text-align: center;
}
h2 {
  text-align: center;
}

img {
  margin: 1em 2em;
  display: inline-block;
}

.bubbles {
  margin-top: 2em;
  justify-content: center;
}
.reverse .bubbles {
  margin-top: 2em;
  margin-bottom:1.5em;
}
.reverse{
  display: flex;
  flex-direction: column;
}
.reverse .wrap{
  order: 1;
}
.reverse .container.logos{
  order: 2;
  margin-bottom: 3em;
}

@media (max-width: 1280px) {
  img {
    max-width: 180px;
    max-height: 50px;
    width: 100%;
    margin: 1em 2em;
  }
}@media (max-width: 1280px) {
  img {
    max-height: 40px;
    width: 100%;
    margin: 0.5em 1em;
  }
}
</style>