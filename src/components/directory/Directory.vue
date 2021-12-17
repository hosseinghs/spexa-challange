<template>
  <div class="directory-wrapper">
    <Breadcrump />
    <div>
      <span class="material-icons driver"> drive_folder_upload </span>
      <h3>There is nothing to show</h3>
      <div @click.stop="setLoginState(true)">
        <Button title="Create directory" />
      </div>
    </div>
    <Modal>
      <DirectoryItem />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Breadcrump from "../breadcrump";
import Button from "../btn/Button.vue";
import Modal from "../Modal.vue";
import DirectoryItem from "./DirectoryItem.vue";
export default {
  name: "directory-component",
  components: {
    Breadcrump,
    Button,
    Modal,
    DirectoryItem,
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
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
