import Vue from "vue";
import App from "./App.vue";
import importHTML from 'import-html-entry';
window.__vue__ = Vue;
Vue.config.productionTip = false;

importHTML('http://localhost:10000/microapps/hrms-system-management/index.html?v=1627349781570')
.then((res) => {
    console.log(res.template);
    res.getExternalScripts().then((exports)=>{
      const mobx = exports;
      mobx;
    });
    // res.execScripts().then((exports) => {
    //     const mobx = exports;
    //     const { observable } = mobx;
    //     observable({
    //         name: 'kuitos',
    //     });
    // });
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
