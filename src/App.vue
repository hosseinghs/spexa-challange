<template>
  <v-app>
    <v-app-bar elevation="0" color="#fff" v-if="isLoggedIn" app>
      <div>
        <Button @click="logout()" title="Logout" />
      </div>
      <span>{{ userEmail }}</span>
    </v-app-bar>
    <Notif />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { deleteToken, getToken } from "./services/jwt";
import Button from "./components/btn/Button.vue";
import Notif from "./components/Notif.vue";

export default {
  name: "App",
  components: {
    Button,
    Notif,
  },

  computed: {
    ...mapGetters("loginRegister", ["isLoggedIn"]),
    userEmail() {
      const email = localStorage.getItem("email");
      if (email) return email;
      else return null;
    },
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
::v-deep .v-main__wrap {
  background-color: #f2f2f2;
}
span {
  margin-left: 10px;
}
</style>
