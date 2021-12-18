<template>
  <div class="empty-directory-wrapper">
    <div>
      <img src="../../assets/img/drive.png" alt="drive" />
      <h3 class="my-6">There is nothing to show</h3>
      <div @click.stop="setModalState(true)">
        <Button dark primary title="Create directory" />
      </div>
    </div>
    <Modal>
      <DirectoryItem create />
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Button from "../btn/Button.vue";
import Modal from "../Modal.vue";
import DirectoryItem from "./DirectoryItem.vue";
export default {
  components: {
    Button,
    Modal,
    DirectoryItem,
  },
  computed: {
    ...mapGetters("directory", ["directories"]),
  },
  methods: {
    ...mapActions("modal", ["setModalState"]),
    ...mapActions("directory", ["getDirectoryContent"]),
  },
};
</script>

<style scoped>
.empty-directory-wrapper {
  height: 100%;
  display: grid;
  place-items: center;
}
</style>
