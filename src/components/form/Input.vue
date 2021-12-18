<template>
  <v-text-field v-bind="$attrs" v-on="$listeners" outlined />
</template>
<script>
export default {
  name: "input-component",
};
</script>

<style>
.v-input__slot {
  background-color: #fff !important;
}
</style>
