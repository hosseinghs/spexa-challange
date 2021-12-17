import Vue from "vue";
import VueAxios from "vue-axios";
import JWT from "./jwt";
import axios from "axios";
import { API_URL } from "../../config/HTTPS";

const Api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    if (JWT.getToken()) {
      this.addAuthorizationHeader();
    } else {
      this.removeAuthorizationHeader();
    }
    axios.interceptors.response.use(
      function () {},
      function (err) {
        if (err.response && err.response.status === 401) {
          console.log("boz");
        }
      }
    );
  },

  removeAuthorizationHeader() {
    delete axios.defaults.headers.common["Authorization"];
  },
  addAuthorizationHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JWT.getToken()}`;
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
