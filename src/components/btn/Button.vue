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
button {
  width: 100%;
  padding: 8px 32px;
  border-radius: 4px;
  border: 1px solid;
}
.primary {
  background-color: #000;
  color: #fff;
  transition: background-color 0.1s ease-in;
}
.secondry {
  background-color: #fff;
  color: #000;
}
.primary:hover,
.secondry:hover {
  background-color: #555;
}
</style>
