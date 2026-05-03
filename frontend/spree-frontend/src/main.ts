import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {createI18n} from 'vue-i18n'
import './global.css'
import App from './App.vue'
import router from './router'
import {i18n} from "@/locales/locales.ts";

const app = createApp(App)
app.use(i18n)

app.use(createPinia())
app.use(router)

app.mount('#app')
