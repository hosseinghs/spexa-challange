<template>
  <div id="app">
    <Header />
    <Login />
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Login,
    Header,
  },
};
</script>

<style></style>
