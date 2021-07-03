import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import smoothscroll from 'smoothscroll-polyfill'
import devtools from '@vue/devtools'


smoothscroll.polyfill()

createApp(App)
    .use(router)
    .mount('#app')

if (process.env.NODE_ENV === 'development') {
    devtools.connect(/* host, port */)
}