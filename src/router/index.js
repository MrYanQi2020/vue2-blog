
import Vue from 'vue';
import vueRouter from 'vue-router';
import routes from "./routes"

Vue.use(vueRouter); //使用vueRouter插件



const router = new vueRouter({
    routes,// 路由匹配规则
    mode:"history", // 匹配模式
});

export default router;

