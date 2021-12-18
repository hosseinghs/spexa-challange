<template>
  <div class="directory-list-item-wrapper">
    <div v-for="item in items" :key="item.id" class="i">
      <div class="more">
        <Dropdown
          :items="dropdownItems"
          @dropdownAction="dropdownAction({ action: $event, item: item })"
        />
      </div>
      <img src="../../assets/img/folder.png" alt="more-icon" />
      <span>{{ item.title }}</span>
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
        { id: 1, title: "Open", icon: "../../assets/img/open.png" },
        { id: 2, title: "Delete", icon: "@/assets/img/trash.png" },
      ],
    };
  },
  methods: {
    ...mapActions("modal", ["setModalState"]),
    ...mapActions("directory", ["deleteDirectory", "addNewBreadcrumpItem"]),
    dropdownAction({ action, item }) {
      if (action === 2) this.deleteDirectory(item.id);
      else if (action === 1) {
        this.addNewBreadcrumpItem({
          text: item.title,
          disabled: false,
          href: `/${item.title}`,
        });
      }
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
