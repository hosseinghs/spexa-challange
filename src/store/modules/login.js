import { User } from "../../models/user";
import { loginRegisterApi } from "../../services/auth";
import { setToken } from "../../services/jwt";
import Api from "../../services/api";
export const loginRegister = {
  namespaced: true,
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
    async loginRegisterUser({ state }) {
      const userData = state.userData;
      const res = await loginRegisterApi(userData);
      window.localStorage.setItem("email", userData.email);
      setToken(res.data.data.access_token);
      Api.addAuthorizationHeader();
    },
  },
  getters: {
    user: (state) => state.userData,
  },
};
