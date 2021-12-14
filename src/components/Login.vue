<template>
  <div class="login-wrapper">
    <form class="center" @submit.prevent="submitForm()">
      <h3>Try the product out for free.</h3>
      <Input
        type="email"
        placeholder="email"
        @inputChange="setUserData({ k: 'email', v: $event })"
      />

      <Input
        type="password"
        placeholder="password"
        @inputChange="setUserData({ k: 'password', v: $event })"
      />
      <Button title="Register / Login" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Input from "../components/form/Input.vue";
import Button from "../components/btn/Button.vue";
export default {
  name: "login-component",
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapGetters("loginRegister", ["user"]),
  },
  methods: {
    ...mapActions("loginRegister", ["setUserData", "loginRegisterUser"]),
    submitForm() {
      this.loginRegisterUser();
    },
    log(a) {
      console.log(a);
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.center {
  width: 15%;
  margin: 0 auto;
}
</style>
