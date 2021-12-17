import {
  createNewDirectoryApi,
  getDirectoryContentApi,
  deleteDirectoryApi,
} from "../../services/directory";

import { addToArr } from "../../utils/general";

export const directory = {
  namespaced: true,
  state: {
    visible: false,
    newDirectoryTitle: null,
    directories: [],
  },
  mutations: {
    SET_NEW_DIRECTORY_TITLE(state, title) {
      state.newDirectoryTitle = title;
    },
    SET_DIRECTORIES_LIST(state, payload) {
      const arr = state.directories;
      arr.splice(0);
      addToArr(arr, payload);
    },
  },
  actions: {
    setNewDirectoryTitle({ commit }, title) {
      commit("SET_NEW_DIRECTORY_TITLE", title);
    },
    async createNewDirectory({ state }) {
      const title = state.newDirectoryTitle;
      await createNewDirectoryApi(title);
    },
    async getDirectoryContent({ commit }) {
      const res = await getDirectoryContentApi();
      if (res.status === 200) {
        commit("SET_DIRECTORIES_LIST", res.data.data.directories);
      }
    },
    async deleteDirectory(context, id) {
      const res = await deleteDirectoryApi(id);
      console.log(res);
    },
  },
  getters: {
    directories: (state) => state.directories,
  },
};
