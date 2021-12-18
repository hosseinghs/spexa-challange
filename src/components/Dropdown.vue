<template>
  <div class="text-center">
    <v-menu style="max-width: 50px" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span
          v-bind="attrs"
          v-on="on"
          style="background: transparent; color: #000"
          elevation="0"
        >
          ...
        </span>
      </template>
      <v-list>
        <v-list-item
          class="px-0"
          v-for="{ title, id, icon } in items"
          :key="id"
          @click="$emit('dropdownAction', id)"
        >
          <template>
            <img :src="icon" />
            <v-list-item-title class="dropdown-items">
              {{ title }}</v-list-item-title
            >
          </template>
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

<style scoped>
.dropdown-items {
  font-size: 12px;
}
</style>
