import Vue from "vue";
import VueAxios from "vue-axios";
import { getToken, setToken } from "./jwt";
import axios from "axios";
import { API_URL } from "../../config/HTTPS";

const Api = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    if (getToken()) {
      this.addAuthorizationHeader();
    } else {
      this.removeAuthorizationHeader();
    }
    axios.interceptors.response.use(
      function (res) {
        if (res.data.data.refresh_token) {
          setToken(res.data.data.access_token);
          window.localStorage.setItem(
            "rootId",
            res.data.data.root_directory_id
          );
          window.localStorage.setItem(
            "refreshToken",
            res.data.data.refresh_token
          );
          Api.addAuthorizationHeader();
        }
        return res;
      },
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
