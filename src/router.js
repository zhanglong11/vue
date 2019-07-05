import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Login from './pages/Login'
import HelloWorld from './pages/HelloWorld'
import Home from './pages/Home';
import Message from './pages/Message'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/login",
        component: Login
    },
    {
        path:"/hello",
        component: HelloWorld
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/message",
        component: Message
    }
]

const router =  new VueRouter({
    routes
})
export default router;