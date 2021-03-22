import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './style/index.scss'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import Vant from 'vant'
import 'vant/lib/index.css'

createApp(App, Antd).use(store).use(router).use(Vant).use(Antd).use(ElementPlus).mount('#app')
