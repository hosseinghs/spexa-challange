<template>
  <div class="directory-list-item-wrapper">
    <div class="i">
      <span @click="showOptions">...</span>
      <img src="../../assets/img/folder.png" alt="more-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "directory-list-item-component",
};
</script>

<style scoped>
.i {
  position: relative;
}

.i span {
  position: absolute;
  top: -10px;
  right: 5px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
}
</style>
