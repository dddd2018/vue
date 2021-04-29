import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from "element-plus"

import "@/assets/css/reset.css"
import "element-plus/lib/theme-chalk/index.css"


createApp(App).use(element).use(store).use(router).mount('#app')
