import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Api from "./services/api";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "./assets/main.css";
Vue.config.productionTip = false;
Vue.use(VueRouter);

Api.init();
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
