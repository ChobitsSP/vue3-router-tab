import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/app.css';

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'

const app = createApp(App)
  .use(ElementPlus, { locale: zhCn, })
  .use(router);

app.mount('#app');