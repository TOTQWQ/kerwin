// import { Button } from 'vant'; //移动端组件全局注册
// import store from './store'; //vuex全局注册
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //路由全局注册
import { createPinia } from 'pinia'; //状态管理全局注册
import ElementPlus from 'element-plus'; //web端组件全局注册

import 'vant/lib/index.css'; //移动端样式
// import './util/config'; //请求拦截
import 'element-plus/dist/index.css'; //web端样式

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus);
// app.use(Button);
// app.use(store);

app.mount('#app');