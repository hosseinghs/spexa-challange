<template>
  <div class="login-wrapper">
    <form class="center" @submit.prevent="submitForm()">
      <h3>Try the product out for free.</h3>
      <Input placeholder="email" />
      <Input type="password" placeholder="password" />
      <Button title="Register / Login" />
    </form>
  </div>
</template>

<script>
import Input from "../components/form/Input.vue";
import Button from "../components/btn/Button.vue";
export default {
  name: "login-component",
  components: {
    Input,
    Button,
  },
  methods: {
    submitForm() {
      console.log("submit");
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
