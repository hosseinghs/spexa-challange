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
      const data = state.userData;
      console.log(data);
      console.log(await loginRegisterApi(data));
    },
  },
  getters: {
    user: (state) => state.userData,
  },
};
