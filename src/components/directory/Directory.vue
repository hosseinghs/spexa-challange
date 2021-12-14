<template>
  <div class="directory-wrapper">
    <Breadcrump />
    <div>
      <span class="material-icons driver"> drive_folder_upload </span>
    </div>
  </div>
</template>

<script>
import Breadcrump from "../breadcrump";
export default {
  name: "directory-component",
  components: {
    Breadcrump,
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
