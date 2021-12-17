<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn" app>
      <Button @click="logout()" title="Logout" />
      <span>{{ userEmail }}</span>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "./components/btn/Button.vue";
import { deleteToken } from "./services/jwt";
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
  methods: {
    deleteToken,
    logout() {
      this.deleteToken();
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
