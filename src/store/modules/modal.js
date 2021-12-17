export const modal = {
  namespaced: true,

  state: {
    visible: false,
  },
  mutations: {
    SET_VISIBILITY(state, bool) {
      state.visible = bool;
    },
  },
  actions: {
    setLoginState({ commit }, bool) {
      commit("SET_VISIBILITY", bool);
    },
  },
};
