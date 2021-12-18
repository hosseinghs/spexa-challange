<template>
  <div class="breadcrump-wrapper">
    <img src="../../assets/img/home.png" alt="home" />
    <v-breadcrumbs :items="breadCrump"></v-breadcrumbs>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "breadcrump-component",
  computed: {
    ...mapGetters("directory", ["breadCrump"]),
  },
};
</script>

<style>
.breadcrump-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
.breadcrump-wrapper img {
  width: 20px;
}

.v-application ul {
  padding: 0;
  color: #000;
}
</style>
