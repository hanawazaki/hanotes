import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.js"

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')

