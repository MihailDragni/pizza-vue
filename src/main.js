import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/normalize.css'
import './assets/css/style.css'
import modals from '@/components/modal'
import store from './store'

const app = createApp(App)

modals.forEach((component) => {
  app.component(component.name, component)
})

app.use(router)
app.use(store)
app.mount('#app')
