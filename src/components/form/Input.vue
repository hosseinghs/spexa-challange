<template>
  <div class="input-wrapper">
    <input
      :type="type"
      :placeholder="placeholder"
      @change="$emit('inputChange', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "input-component",
  props: {
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
  },
};
</script>

<style></style>
