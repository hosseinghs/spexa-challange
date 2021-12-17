<template>
  <DirectoyListItem :items="directories" />
</template>

<script>
import { mapGetters } from "vuex";
import DirectoyListItem from "./DirectoryListItem.vue";
export default {
  components: {
    DirectoyListItem,
  },
  computed: {
    ...mapGetters("directory", ["directories"]),
  },
};
</script>

<style></style>
