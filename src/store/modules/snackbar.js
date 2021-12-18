export const snackbar = {
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
      setSnackbarState({ commit }, bool) {
        commit("SET_VISIBILITY", bool);
      },
    },
  };
  