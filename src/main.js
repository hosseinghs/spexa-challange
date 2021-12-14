import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Api from "./services/api";
import "./assets/main.css";
Vue.config.productionTip = false;
Api.init();
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
