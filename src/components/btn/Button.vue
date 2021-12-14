<template>
  <button :class="login ? 'primary' : 'secondry'" v-bind="$attrs">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "button-component",
  props: {
    login: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "title",
    },
  },
};
</script>

<style scoped>
.primary {
  background-color: #000;
  color: #fff;
  transition: background-color 0.1s ease-in;
}
.secondry {
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 4px;
}
.primary,
.secondry:hover {
  background-color: #555;
}
</style>
