import { User } from "../../models/user";
import { loginRegisterApi } from "../../services/auth";
import { notifModule } from "./notif";

export const loginRegister = {
  namespaced: true,
  module: {
    notifModule,
  },
  state: {
    userData: new User(),
    isLoggedIn: false,
  },
  mutations: {
    SET_USER_DATA(state, { k, v }) {
      state.userData[k] = v;
    },
    SET_LOGIN_STATE(state, bool) {
      state.isLoggedIn = bool;
    },
  },
  actions: {
    setUserData({ commit }, { k, v }) {
      commit("SET_USER_DATA", { k, v });
    },
    setLoginState({ commit }, bool) {
      commit("SET_LOGIN_STATE", bool);
    },
    async loginRegisterUser({ state, commit }) {
      const { email, password } = state.userData;
      const res = await loginRegisterApi({ email, password });
      if (res.status === 200) {
        commit("SET_LOGIN_STATE", true);
        window.localStorage.setItem("email", email);
        return true;
      } else return false;
    },
  },
  getters: {
    user: (state) => state.userData,
    isLoggedIn: (state) => state.isLoggedIn,
  },
};
