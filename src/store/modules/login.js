import { User } from "../../models/user";
import { loginRegisterApi } from "../../services/auth";
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
      console.log(res.data.data.access_token);
    },
  },
  getters: {
    user: (state) => state.userData,
  },
};
