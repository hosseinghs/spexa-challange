import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// function guardMyroute(to, from, next) {
//   var isAuthenticated = false;
//   if (window.localStorage.getItem("token")) {
//     isAuthenticated = true;
//   } else {
//     isAuthenticated = false;
//   }
//   if (isAuthenticated) {
//     next();
//   } else {
//     next("/login");
//   }
// }

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
