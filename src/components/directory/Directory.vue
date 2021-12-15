<template>
  <div class="directory-wrapper">
    <Breadcrump />
    <div>
      <span class="material-icons driver"> drive_folder_upload </span>
      <h3>There is nothing to show</h3>
      <Button title="Create directory" />
    </div>
  </div>
</template>

<script>
import Breadcrump from "../breadcrump";
import Button from "../btn/Button.vue";
export default {
  name: "directory-component",
  components: {
    Breadcrump,
    Button,
  },
};
</script>

<style scoped>
.directory-wrapper {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}

.driver {
  font-size: 200px;
}
</style>
