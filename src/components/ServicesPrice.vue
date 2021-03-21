<template>
  <div class="">
    <div class="header">
      <div class="info">
        <h2>Соберите <span class="text-gradient">свой комплекс</span> услуг</h2>
        <p>Выбирайте только нужное из более чем 100 услуг i-Space.</p>
      </div>
      <img src="../assets/images/services-man.svg" alt="">
      <review :bg="'white'" :data="reviews" class="reviews"/>
    </div>
  </div>
</template>

<script>
import Review from "@/components/review/Review";

export default {
  name: "ServicesPrice",
  components: {Review},
  data() {
    return {
      reviews:[
        {
          review: 'i-Space поддерживает там, где мы не готовы тратить своё время<br/>Для нас комплексная поддержка от i-Space — это идеальное соотношение цены и качества. Мы довольны и качеством, и сроком и стоимостью решений i-Space, а это редкость!',
          reviewer: {
            name: 'Денис Белоусов',
            credits: 'Гендиректор ОТТ Медиа',
            logo: '',
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.info p {
  font-size: 25px;
  font-weight: 300;
}
</style>