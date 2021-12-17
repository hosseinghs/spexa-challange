<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background: transparent"
          elevation="0"
          dark
          v-bind="attrs"
          v-on="on"
        >
        </v-btn>
      </template>
      <v-list>
        <v-list-item class="px-0" v-for="{ title, id } in items" :key="id">
          <v-list-item-title>{{ title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
