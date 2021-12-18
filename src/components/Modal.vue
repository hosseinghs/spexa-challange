<template>
  <v-dialog v-model="modalVisible" v-bind="$attrs" :max-width="maxWidth">
    <v-card rounded elevation="0">
      <v-container>
        <slot />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "modal-component",
  props: {
    maxWidth: {
      type: String,
      default: "500",
    },
  },
  computed: {
    ...mapState("modal", ["visible"]),
    modalVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.setModalState(val);
      },
    },
  },
  methods: {
    ...mapActions("modal", ["setModalState"]),
  },
};
</script>
