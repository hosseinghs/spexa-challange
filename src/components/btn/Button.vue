<template>
  <v-btn v-bind="$attrs" v-on="$listeners">
    {{ title }}
  </v-btn>
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

<style scoped></style>
