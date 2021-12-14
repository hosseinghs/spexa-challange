<template>
  <header>
    <div>
      <Button title="Logout"/>
      <span>name</span>
    </div>
  </header>
</template>

<script>
import Button from "./btn/Button.vue";
export default {
  name: "header-component",
  components: {
    Button,
  },
};
</script>

<style></style>
