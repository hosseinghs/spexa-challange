<template>
  <div class="directory-item-wrapper">
    <h3 class="mb-6">Create Directory</h3>
    <v-form ref="addCategoryForm" @submit.prevent="submitForm()">
      <Input
        :rules="[mustFillRule]"
        placeholder="title"
        :value="title"
        autofocus
        @change="setNewDirectoryTitle($event)"
      />
      <v-row class="actions mt-6 mb-">
        <v-col md="5">
          <Button @click.stop="setModalState(false)" title="cancel" />
        </v-col>
        <v-col cols="7">
          <Button primary type="submit" dark title="Create directory" />
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { mustFillRule } from "../../utils/validation";
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
  computed: {
    ...mapState("modal", ["visible"]),
    ...mapGetters("directory", ["title"]),
  },
  components: {
    Input,
    Button,
  },
  methods: {
    mustFillRule,
    ...mapActions("modal", ["setModalState"]),
    ...mapActions("directory", [
      "createNewDirectory",
      "setNewDirectoryTitle",
      "clearDirectoryTitle",
    ]),
    async submitForm() {
      if (this.$refs.addCategoryForm.validate()) {
        const res = this.createNewDirectory();
        if (res) this.setModalState(false);
      }
    },
  },
  watch: {
    visible(val) {
      if (!val) {
        this.clearDirectoryTitle();
        this.$refs.addCategoryForm.resetValidation();
      }
    },
  },
};
</script>

<style scoped>
.directory-item-wrapper {
  padding: 1rem;
}

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
