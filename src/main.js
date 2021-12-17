import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import Api from "./services/api";
import VueRouter from "vue-router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueRouter);

Api.init();
new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
