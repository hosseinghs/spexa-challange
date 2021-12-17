import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex-extensions";

Vue.use(Vuex);

import { loginRegister } from "./modules/login";
import { modal } from "./modules/modal";

export default createStore(Vuex.Store, {
  modules: {
    loginRegister,
    modal,
  },
});
