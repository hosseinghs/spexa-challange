<template>
  <div class="directory-list-item-wrapper">
    <div class="i">
      <span class="more" @click="showOptions">...</span>
      <img src="../../assets/img/folder.png" alt="more-icon" />
      <span>{{ directoryName }}</span>
    </div>
    <div @click="setLoginState(true)">
      <img src="../../assets/img/add.png" alt="add" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "directory-list-item-component",
  props: {
    directoryName: {
      type: String,
      default: "directoryName",
    },
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
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
