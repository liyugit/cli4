import Vue from "vue";
import App from "./App.vue";

window.__vue__ = Vue;
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
