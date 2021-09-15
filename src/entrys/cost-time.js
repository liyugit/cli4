import Vue from "vue";
import App from "@/pages/cost-time";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
window.__vue__ = Vue;

Vue.use(Vuetify);
Vue.config.productionTip = false;
new Vue({
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
