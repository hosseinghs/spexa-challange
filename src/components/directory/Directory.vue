<template>
  <div class="directory-wrapper">
    <DirectoryList v-if="directories.length > 0" />
    <EmptyDirectory v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EmptyDirectory from "./EmptyDirectory.vue";
import DirectoryList from "./DirectoryList.vue";
export default {
  name: "directory-component",
  components: { EmptyDirectory, DirectoryList },
  computed: {
    ...mapGetters("directory", ["directories"]),
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
    ...mapActions("directory", ["getDirectoryContent"]),
  },
  created() {
    this.getDirectoryContent();
  },
};
</script>

<style scoped>
.directory-wrapper {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  display: grid;
  place-items: center;
  height: calc(100vh - 75px);
}

.driver {
  font-size: 200px;
}
</style>
