<template>
  <div class="input-wrapper">
    <input
      v-bind="$attrs"
      @change="$emit('inputChange', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "input-component",
};
</script>

<style></style>
