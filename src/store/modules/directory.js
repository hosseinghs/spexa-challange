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
    breadCrump: [
      {
        text: "Home",
        disabled: false,
        href: "/directories",
      },
    ],
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
    CLEAR_DIRECTORY_TITLE(state) {
      state.newDirectoryTitle = "";
    },
    ADD_NEW_BREADCRUMP_ITEM(state, { text, disabled, href }) {
      state.breadCrump.push({ text, disabled, href });
    },
    DELETE_DIRECTORY(state, id) {
      const arr = state.directories;
      const filterdArr = arr.filter((dir) => dir.id !== id);
      arr.splice(0);
      addToArr(arr, filterdArr);
    },
  },
  actions: {
    setNewDirectoryTitle({ commit }, title) {
      commit("SET_NEW_DIRECTORY_TITLE", title);
    },
    clearDirectoryTitle({ commit }) {
      commit("CLEAR_DIRECTORY_TITLE");
    },
    addNewBreadcrumpItem({ commit }, { text, disabled, href }) {
      commit("ADD_NEW_BREADCRUMP_ITEM", { text, disabled, href });
    },
    async createNewDirectory({ state, dispatch }) {
      const title = state.newDirectoryTitle;
      await createNewDirectoryApi(title);
      dispatch("getDirectoryContent");
    },
    async getDirectoryContent({ commit }) {
      const res = await getDirectoryContentApi();
      if (res.status === 200)
        commit("SET_DIRECTORIES_LIST", res.data.data.directories);
    },
    async deleteDirectory({ commit }, id) {
      const res = await deleteDirectoryApi(id);
      if (res.status === 200) commit("DELETE_DIRECTORY", id);
    },
  },
  getters: {
    directories: (state) => state.directories,
    title: (state) => state.newDirectoryTitle,
    breadCrump: (state) => state.breadCrump,
  },
};
