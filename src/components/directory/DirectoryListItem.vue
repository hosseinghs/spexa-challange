<template>
  <div class="directory-list-item-wrapper">
    <div class="i">
      <span class="more" @click="showOptions">...</span>
      <img src="../../assets/img/folder.png" alt="more-icon" />
      <span>{{ directoryName }}</span>
    </div>
    <div>+</div>
  </div>
</template>

<script>
export default {
  name: "directory-list-item-component",
  props: {
    directoryName: {
      type: String,
      default: "directoryName",
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
