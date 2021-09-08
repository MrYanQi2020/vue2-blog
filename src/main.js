import Vue from 'vue';
import App from './App.vue'; //导入app组件
import ElementUI from 'element-ui';// 引入element-ui组件库
import "@/style/index.less";//引入样式
import 'element-ui/lib/theme-chalk/index.css';//引入elemen-ui样式
import router from "@/router";//导入路由构造函数
import directiveConfig from "@/directive/myloading.js"
import "@/mock/index.js";

Vue.use(ElementUI);// 使用element-ui插件

Vue.directive('myloading',directiveConfig); //v-myloading 指令

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
