<template>
  <div class="bg">
    <div class="container">
      <h2>Решаем <span class="text-gradient">конкретные задачи</span> бизнеса</h2>
      <div class="content" v-if="cases">
        <div class="card big" v-if="cases.current">
          <div class="columns" >
            <business-task-card
                :logo="cases.current.case.logo"
                :tittle="cases.current.case.tittle"
                :content="cases.current.case.content"
            />
            <div class="vertical-line"></div>
            <div class="review">
              <div class="header">
                <div class="face" v-if="cases.current.review.face">
                  <img :src="require(`@/assets/images/faces/${cases.current.review.face}`)" alt="">
                </div>
                <div class="name">{{ cases.current.review.name }},<br/>{{cases.current.review.status}}</div>

              </div>
              <div class="review-content">
                <p v-for="(p,i) in cases.current.review.content" v-html="p" :key="i"></p>
              </div>
            </div>
          </div>
        </div>
        <business-task-card
            v-for="(item,i) in cases.tasks"
            :key="i"
            :logo="item.logo"
            :tittle="item.tittle"
            :content="item.content"
        />
      </div>
      <div v-else>NO Cases!!!</div>
    </div>
  </div>
</template>

<script>
import BusinessTaskCard from "@/components/BusinessTaskCard";

export default {
  name: "BusinessTasksBlock",
  props:['cases'],
  components: {BusinessTaskCard},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.bg {
  background: var(--bg-gray);
  padding-bottom: 3em;
}

.container{
  text-align: center;
}

h2 {
  display: inline-block;
  margin: 2em auto 1em;
  position: relative;
  padding: 0 1.7em;
  /*background: url("../assets/images/arrow-left-alt.svg") no-repeat left bottom 5px, url("../assets/images/arrow-right-alt.svg") no-repeat right bottom 5px;*/
}

.content {
  display: grid;
  grid-gap: 1.5em;
  grid-template-columns: 1fr 1fr;
}

.card.big {
  background: white;
  border-radius: 8px;
  text-align: left;
  grid-column: span 2;
}

.card.big p {
  margin-bottom: 1em;
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1.5em 1fr;
}

.vertical-line {
  border-left: 1px dashed var(--deep-blue);
  margin: 3em auto;
  width: 1px;
}

.review {
  padding: 40px;
  background: url("../assets/images/quotes_gray.svg") no-repeat right 40px top 40px;
}

.review .header {
  font-size: 14px;
  margin-bottom: 1.5em;
}

.review p {
  font-family: 'Raleway', sans-serif;
  font-style: italic;
  opacity: 0.7;
}

.header {
  display: flex;
  align-items: center;
  padding-right: 70px;

}
.header .face{
  overflow: hidden;
  place-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 1.5em;
}
.header img {
  width: 100%;
}

</style>