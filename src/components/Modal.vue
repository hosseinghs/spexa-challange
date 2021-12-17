<template>
  <div class="modal-wrapper" @click.self="setLoginState(false)">
    <div class="modal-content">hi</div>
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
  background: rgba(#fff, 0.4);
  z-index: 10;
}
.modal-wrapper > div {
  width: 100%;
  z-index: 20;
}

.modal-content {
  background-color: #f2f2f2;
  text-align: left;
  border-radius: 8px;
  padding: 1rem;
}
</style>
