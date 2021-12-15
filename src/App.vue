<template>
  <div id="app">
    <Header v-if="isLoggedIn" />
    <Login v-if="!isLoggedIn" />
    <Directory v-if="isLoggedIn" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getToken } from "./services/jwt";
import Login from "./components/Login.vue";
import Header from "./components/Header.vue";
import Directory from "./components/directory/Directory.vue";
export default {
  name: "App",
  components: {
    Login,
    Header,
    Directory,
  },
  created() {
    const hasToken = getToken();
    if (hasToken) this.setLoginState(!!hasToken);
  },
  computed: {
    ...mapGetters("loginRegister", ["isLoggedIn"]),
  },
  methods: {
    getToken,
    ...mapActions("loginRegister", ["setLoginState"]),
  },
};
</script>

<style></style>
