import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './strore';
import I18n from 'vue-i18n';

Vue.config.productionTip = false;
Vue.use(I18n);


new Vue({
    el: '#app',
    store,
    I18n,
    router,  // 注入到根实例中
    render: h => h(App)
})