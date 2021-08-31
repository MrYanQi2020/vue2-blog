import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import "@/style/index.less";
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";//导入路由构造函数
console.log(router);

Vue.use(ElementUI);






new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
