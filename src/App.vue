<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn" app>
      <div>
        <Button @click="logout()" title="Logout" />
      </div>
      <span>{{ userEmail }}</span>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "./components/btn/Button.vue";
import { deleteToken, getToken } from "./services/jwt";
export default {
  name: "App",
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters("loginRegister", ["isLoggedIn"]),
    userEmail() {
      const email = localStorage.getItem("email");
      if (email) return email;
      else return null;
    },
  },
  components: {
    Button,
  },
  created() {
    const token = getToken();
    this.setLoginState(!!token);
    if (token) this.$router.push({ path: "/directories" });
  },
  methods: {
    deleteToken,
    getToken,
    ...mapActions("loginRegister", ["setLoginState"]),
    logout() {
      this.deleteToken();
      this.setLoginState(false);
      this.$router.push({ path: "/" });
    },
  },
};
</script>
<style scoped>
span {
  margin-left: 10px;
}
</style>
