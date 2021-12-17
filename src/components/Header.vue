<template>
  <header>
    <div>
      <div @click="logOut()">
        <Button title="Logout" />
      </div>
      <span>{{ userEmail }}</span>
    </div>
  </header>
</template>

<script>
import Button from "./btn/Button.vue";
import { logOut } from "../services/jwt";
export default {
  name: "header-component",
  components: {
    Button,
  },
  computed: {
    userEmail() {
      const email = localStorage.getItem("email");
      if (email) return email;
      else return null;
    },
  },
  methods: {
    logOut,
  },
};
</script>

<style scoped>
span {
  margin-left: 10px;
}
</style>
