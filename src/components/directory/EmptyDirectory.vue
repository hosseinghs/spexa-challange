<template>
  <div class="empty-directory-wrapper">
    <Breadcrump />
    <div>
      <span class="material-icons driver"> drive_folder_upload </span>
      <h3>There is nothing to show</h3>
      <div @click.stop="setLoginState(true)">
        <Button title="Create directory" />
      </div>
    </div>
    <Modal>
      <DirectoryItem create />
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Breadcrump from "../breadcrump";
import Button from "../btn/Button.vue";
import Modal from "../Modal.vue";
import DirectoryItem from "./DirectoryItem.vue";
export default {
  components: {
    Breadcrump,
    Button,
    Modal,
    DirectoryItem,
  },
  computed: {
    ...mapGetters("directory", ["directories"]),
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
    ...mapActions("directory", ["getDirectoryContent"]),
  },
};
</script>

<style></style>
