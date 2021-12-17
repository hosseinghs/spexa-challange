<template>
  <div
    v-if="visible"
    class="modal-wrapper"
    @click.self="setLoginState(false)"
  >
    <div class="modal-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "modal-component",
  computed: {
    ...mapState("modal", ["visible"]),
  },
  methods: {
    ...mapActions("modal", ["setLoginState"]),
  },
};
</script>

<style scoped>
.modal-wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: #fff;
  z-index: 10;
}

.modal-content {
  background-color: #f2f2f2;
  text-align: left;
  border-radius: 8px;
  padding: 1rem;
  width: 30%;
  margin: 0 auto;
  z-index: 20;
}
</style>
