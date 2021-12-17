<template>
  <div class="directory-list-item-wrapper">
    <div v-for="{ id, title } in items" :key="id" class="i">
      <div class="more" @click="showOptions">...</div>
      <img src="../../assets/img/folder.png" alt="more-icon" />
      <span>{{ title }}</span>
    </div>
    <div @click="setModalState(true)">
      <img src="../../assets/img/add.png" alt="add" />
    </div>
    <Modal>
      <DirectoryItem />
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "../Modal.vue";
import DirectoryItem from "./DirectoryItem.vue";
export default {
  name: "directory-list-item-component",
  components: {
    Modal,
    DirectoryItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    ...mapActions("modal", ["setModalState"]),
    showOptions() {
      console.log("show options");
    },
  },
};
</script>

<style scoped>
.directory-list-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: start;
}

.directory-list-item-wrapper div:last-child {
  cursor: pointer;
}

.i {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.i .more {
  position: absolute;
  top: 0px;
  right: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
