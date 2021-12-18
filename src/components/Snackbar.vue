<template>
  <v-snackbar v-model="snackbarVisible" :timeout="timeout">
    {{ text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    text: {
      type: String,
      default: "text",
    },
    timeout: {
      type: Number,
      default: 3000,
    },
  },
  computed: {
    ...mapState("snackbar", ["visible"]),
    snackbarVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.setSnackbarState(val);
      },
    },
  },
  methods: {
    ...mapActions("snackbar", ["setSnackbarState"]),
  },
};
</script>

<style></style>
