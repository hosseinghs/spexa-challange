<template>
  <div class="directory-item-wrapper">
    <h3>h3</h3>
    <div class="actions">
      <div @click.stop="setLoginState(false)">
        <Button title="cancel" />
      </div>
      <div>
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Button from "../btn/Button.vue";
export default {
  name: "directory-item-component",
  props: {},
  components: {
    Button,
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
  },
};
</script>

<style scoped>
/* .directory-item-wrapper {
} */

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.actions div {
  flex: 1;
  padding: 8px;
}
</style>
