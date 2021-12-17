<template>
  <div>
    <DirectoyListItem
      v-for="{ id, title } in items"
      :directoryName="title"
      :key="id"
    />
  </div>
</template>

<script>
import DirectoyListItem from "./DirectoryListItem.vue";
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    DirectoyListItem,
  },
};
</script>

<style></style>
