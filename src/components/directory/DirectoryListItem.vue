<template>
  <div class="directory-list-item-wrapper">
    <div v-for="{ id, title } in items" :key="id" class="i">
      <div class="more" @click="showOptions">
        <Dropdown :items="dropdownItems" />
      </div>
      <img src="../../assets/img/folder.png" alt="more-icon" />
      <span>{{ title }}</span>
    </div>
    <div style="cursor: pointer" @click="setModalState(true)">
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
import Dropdown from "../Dropdown.vue";
export default {
  name: "directory-list-item-component",
  components: {
    Modal,
    DirectoryItem,
    Dropdown,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dropdownItems: [
        { id: 1, title: "open", icon: "../../assets/img/open.png" },
        { id: 2, title: "delete", icon: "@/assets/img/trash.png" },
      ],
    };
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
  width: 100%;
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
  top: -3px;
  right: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
