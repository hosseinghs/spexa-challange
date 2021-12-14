import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Api from "./services/api";
import "./assets/main.css";
Vue.config.productionTip = false;

new Vue({
  store,
  Api,
  App,
  render: (h) => h(App),
}).$mount("#app");
