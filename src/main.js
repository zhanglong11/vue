import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './strore'

Vue.config.productionTip = false;


new Vue({
    el: '#app',
    store,
    router,  // 注入到根实例中
    render: h => h(App)
})