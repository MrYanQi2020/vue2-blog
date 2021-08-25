import Vue from 'vue'
import App from './App.vue'
import "@/style/index.less"
import vueRouter from 'vue-router'
import VueRouter from 'vue-router'

import view1 from '@/view/view1'
import view2 from '@/view/view2'


Vue.use(vueRouter)
const router = new VueRouter({
    routes:[
      {path:'/view1',component:view1},
      {path:'/view2',component:view2},
    ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
