import {
  createNewDirectoryApi,
  getDirectoryContentApi,
} from "../../services/directory";
import { addToArr } from "../../utils/general";
export const directory = {
  namespaced: true,
  state: {
    visible: false,
    directories: [],
  },
  mutations: {
    SET_VISIBILITY(state, bool) {
      state.visible = bool;
    },
    SET_DIRECTORIES_LIST(state, payload) {
      const arr = state.directories;
      arr.splice(0);
      addToArr(arr, payload);
    },
  },
  actions: {
    async createNewDirectory(context, title) {
      console.log(await createNewDirectoryApi(title));
    },
    async getDirectoryContent({ commit }) {
      const res = await getDirectoryContentApi();
      if (res.status === 200) {
        commit("SET_DIRECTORIES_LIST", res.data.data.directories);
      }
    },
  },
  getters: {
    directories: (state) => state.directories,
  },
};
