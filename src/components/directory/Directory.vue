<template>
  <div class="directory-wrapper">
    <Breadcrump />
    <DirectoryList v-if="directories.length > 0" />
    <EmptyDirectory v-else />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import EmptyDirectory from "./EmptyDirectory.vue";
import DirectoryList from "./DirectoryList.vue";
import Breadcrump from "../breadcrump/index.vue";
export default {
  name: "directory-component",
  components: { EmptyDirectory, DirectoryList, Breadcrump },
  computed: {
    ...mapGetters("directory", ["directories"]),
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
    ...mapActions("directory", ["getDirectoryContent"]),
  },
  created() {
    const rootId = localStorage.getItem("rootId");
    if (rootId) this.getDirectoryContent();
  },
};
</script>

<style scoped>
.directory-wrapper {
  width: 70%;
  margin: 0 auto;
  text-align: center;
  height: calc(100vh - 75px);
}

.driver {
  font-size: 200px;
}
</style>
