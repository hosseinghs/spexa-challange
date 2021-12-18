<template>
  <v-btn
    elevation="0"
    style="width: 100%"
    rounded-sm
    :class="primary ? '' : '__secondry'"
    v-bind="$attrs"
    v-on="$listeners"
  >
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
    primary: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.__secondry {
  border: 1px solid #000;
  background-color: #fff !important;
}
</style>
