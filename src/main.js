import Vue from 'vue';
import App from './App.vue';
// import vueRouter from 'vue-router';
import ElementUI from 'element-ui';
import "@/style/index.less";
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

// Vue.use(vueRouter);

// const router = new VueRouter({
//     routes:[
//       {path:'/view1',component:view1},
//       {path:'/view2',component:view2},
//     ]
// });


new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')
