import Vue from "vue";
import VueRouter from "vue-router";
// import { getToken } from "../services/jwt";
Vue.use(VueRouter);

// function guardMyroute(to, from, next) {
//   setTimeout(() => {
//     const token = getToken();
//     if (token) {
//       next();
//     } else {
//       next("/");
//     }
//   }, 250);
// }

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/directories",
    name: "directories",
    // beforeEnter: guardMyroute,
    component: () => import("../components/directory/Directory.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
