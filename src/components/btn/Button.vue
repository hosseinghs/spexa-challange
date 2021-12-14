<template>
  <div class="btn-wrapper">
    <button :type="type">{{ title }}</button>
  </div>
</template>

<script>
export default {
  name: "button-component",
  props: {
    title: {
      type: String,
      default: "btn title",
    },
    type: {
      type: String,
      default: "btn type",
    },
  },
};
</script>

<style scoped>
button {
  background-color: #000;
  color: #fff;
  transition: background-color 0.1s ease-in;
}
button:hover {
  background-color: #555;
}
</style>
