<template>
  <div class="action">
    <div class="container">
      <h2>{{ actionTitle }}</h2>
      <div class="info">
        {{ msg }}
      </div>
      <form action="">
        <div class="field">
          <label for="tel"></label>
          <input v-if="type ==='tel'" type="tel" name="" id="tel" placeholder="+7 (999) 999-99-99">
          <input v-else type="email" name="" id="mail" placeholder="электронная почта">
          <input type="submit" :value="btnText">
        </div>
        <p>или просто напишите нам в Telegram
          <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7011 0.91942L0.525852 6.41398C-0.0445851 6.66986 -0.237523 7.18226 0.387977 7.46036L4.02454 8.62201L12.8173 3.15983C13.2974 2.81692 13.7889 2.90836 13.3659 3.28558L5.81416 10.1585L5.57695 13.0672C5.79666 13.5163 6.19898 13.5184 6.4556 13.2951L8.54492 11.308L12.1232 14.0013C12.9543 14.4959 13.4065 14.1767 13.5853 13.2703L15.9324 2.09933C16.176 0.983545 15.7605 0.49192 14.7011 0.91942Z" fill="white"/>
          </svg>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "CallToActionWhite",
  props: ['btnText', 'type', 'actionTitle', 'msg']
}
</script>

<style scoped>
.action {
  color: black;
  padding: 2em 0;
  text-align: left;
  margin-top: 3em;
}

.action .container {
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 25% 30% auto;
}

h2 {
  margin-top: -0.3em;
  margin-bottom: 0;
  font-size: 31px;
  flex-shrink: 1;
}

.info {
  font-size: 18px;
  line-height: 150%;
}

.field {
  display: flex;
  justify-content: center;
}

form {
  text-align: left;
}

form p {
  font-size: 15px;
  text-align: right;
  margin-top: 0.5em;
}

input {
  background: #F7F7F7;
  border-radius: 8px 0 0 8px;
  padding: 15px 20px;
  appearance: none;
  border: none;
  outline: none;
  margin: 0;
  font-size: 25px;
  width: 100%;
}

input[type='submit'] {
  background: var(--deep-blue);
  border-radius: 0 8px 8px 0;
  font-size: 20px;
  color: white;
  width: min-content;
}
</style>