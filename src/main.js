import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vant from 'vant'
import 'vant/lib/index.css'

createApp(App).use(store).use(vant).mount('#app')
