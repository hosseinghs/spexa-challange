<template>
  <v-btn elevation="0" v-bind="$attrs" v-on="$listeners" style="width: 100%">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "button-component",
  props: {
    title: {
      type: String,
      default: "title",
    },
  },
};
</script>
