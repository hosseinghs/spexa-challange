<template>
  <div class="directory-item-wrapper">
    <h3>h3</h3>
    <div>
      <Input placeholder="title" @inputChange="createNewDirectory($event)" />
    </div>
    <div class="actions">
      <div @click.stop="setModalState(false)">
        <Button title="cancel" />
      </div>
      <div>
        <Button title="Create directory" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Input from "../form/Input.vue";
import Button from "../btn/Button.vue";
export default {
  name: "directory-item-component",
  props: {
    create: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    Input,
    Button,
  },
  methods: {
    ...mapActions("modal", ["setModalState"]),
    ...mapActions("directory", ["createNewDirectory"]),

    log(v) {
      console.log(v);
    },
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
