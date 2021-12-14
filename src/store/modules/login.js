import { User } from "../../models/user";
import { loginRegisterApi } from "../../services/auth";
import { setToken } from "../../services/jwt";
import Api from "../../services/api";
import { notifModule } from "./notif";

export const loginRegister = {
  namespaced: true,
  module: {
    notifModule,
  },
  state: {
    userData: new User(),
  },
  mutations: {
    SET_USER_DATA(state, { k, v }) {
      state.userData[k] = v;
    },
  },
  actions: {
    setUserData({ commit }, { k, v }) {
      commit("SET_USER_DATA", { k, v });
    },
    async loginRegisterUser({ state, dispatch }) {
      const { email, password } = state.userData;
      if (email && password) {
        const res = await loginRegisterApi({ email, password });
        window.localStorage.setItem("email", email);
        setToken(res.data.data.access_token);
        Api.addAuthorizationHeader();
        return true;
      } else dispatch("notifModule/setNotifState", { root: true });
    },
  },
  getters: {
    user: (state) => state.userData,
  },
};
