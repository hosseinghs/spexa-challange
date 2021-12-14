export const notif = {
  namespaced: true,
  state: {
    showNotif: false,
  },
  mutations: {
    SET_NOTIF_STATE(state, bool) {
      state.showNotif = bool;
    },
  },
  actions: {
    setNotifState({ commit }, { k, v }) {
      commit("SET_NOTIF_STATE", { k, v });
    },
  },
};
