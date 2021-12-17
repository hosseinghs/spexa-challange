<template>
  <!-- <div v-if="" class="modal-wrapper" @click.self="setLoginState(false)">
    <div class="modal-content">
      <slot></slot>
    </div>
  </div> -->
  <v-dialog v-model="visible" v-bind="$attrs" :max-width="maxWidth">
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
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
  },
};
</script>
