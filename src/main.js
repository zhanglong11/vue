import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./strore";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import I18n from "vue-i18n";
import debounce from "./directive/debounce";
import _ from "lodash";

Vue.config.productionTip = false;
Vue.use(I18n);
Vue.use(ElementUI);
Vue.prototype._ = _;
Vue.directive("debounce", debounce);

new Vue({
  el: "#app",
  store,
  I18n,
  router, // 注入到根实例中
  render: h => h(App)
});
