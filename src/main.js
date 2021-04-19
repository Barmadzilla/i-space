import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill'


smoothscroll.polyfill()

createApp(App)
    .use(router)
    .mount('#app')
