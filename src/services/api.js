import Vue from "vue";
import VueAxios from "vue-axios";
import { getToken, setToken } from "./jwt";
import axios from "axios";
import { API_URL } from "../../config/HTTPS";
import Vuex from "vuex";

const Api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.use(Vuex);
    Vue.axios.defaults.baseURL = API_URL;
    if (getToken()) {
      this.addAuthorizationHeader();
    } else {
      this.removeAuthorizationHeader();
    }
    const store = new Vuex.Store();

    store.registerModule("notification", {
      namespaced: true,

      state: () => ({
        isVisible: false,
        notif: {
          color: "",
          title: "",
        },
        timer: 5000,
      }),

      mutations: {
        SET_IS_VISIBLE(state, isVisible) {
          state.isVisible = isVisible;
        },
        SET_NOTIF(state, notifConfig) {
          Object.assign(state.notif, notifConfig);
        },
        SET_TIMER(state, timer) {
          state.timer = timer;
        },
      },

      actions: {
        notify({ commit }, { config, timer }) {
          if (timer === 0) return;
          commit("SET_NOTIF", config);
          commit("SET_TIMER", timer);
          commit("SET_IS_VISIBLE", true);
          if (timer === -1) return;
          setTimeout(() => {
            commit("SET_IS_VISIBLE", false);
          }, timer);
        },
        disable({ commit }) {
          commit("SET_IS_VISIBLE", false);
        },
        showSuccess({ dispatch }, { title, timer }) {
          title = title || "عملیات با موفقیت انجام شد";
          timer = timer === undefined ? 5000 : timer;
          dispatch("notify", {
            config: { color: "success", title },
            timer,
          });
        },
        showError({ dispatch }, { title, timer }) {
          title = title || "خطایی رخ داده است. مجدد تلاش کنید.";
          timer = timer === undefined ? 5000 : timer;
          dispatch("notify", {
            config: { color: "error", title },
            timer,
          });
        },
        showInfo({ dispatch }, { title, timer }) {
          title = title || "متن پیام را وارد کنید";
          timer = timer === undefined ? 5000 : timer;
          dispatch("notify", {
            config: { color: "info", title },
            timer,
          });
        },
      },
    });
    axios.interceptors.response.use(
      function (res) {
        if (res.data.data.refresh_token) {
          setToken(res.data.data.access_token);
          window.localStorage.setItem(
            "refreshToken",
            res.data.data.refresh_token
          );
          const rootId = localStorage.getItem("rootId");
          if (!rootId) {
            window.localStorage.setItem(
              "rootId",
              res.data.data.root_directory_id
            );
          }
          Api.addAuthorizationHeader();
        }
        return res;
      },
      function (err) {
        store.dispatch("notification/showError", {
          config: {
            color: "error",
            title: err.response.data.message,
          },
          timer: -1,
        });
        if (err.response && err.response.status === 401) {
          axios
            .post("user/refresh", {
              refresh_token: localStorage.getItem("refreshToken"),
            })
            .then((res) => {
              setToken(res.data.data.access_token);
              localStorage.setItem("refreshToken", res.data.data.refresh_token);
            })
            .catch((err) => {
              console.log("catch : ", err);
            });
        }
        console.log(err.response.data.message);
        return err;
      }
    );
  },

  removeAuthorizationHeader() {
    delete axios.defaults.headers.common["Authorization"];
  },
  addAuthorizationHeader() {
    Vue.axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;
  },

  query(resource, params) {
    return Vue.axios.get(resource, params);
  },

  get(resource) {
    return Vue.axios.get(`${resource}`);
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource);
  },
};

export default Api;
