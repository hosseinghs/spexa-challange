<template>
  <v-snackbar v-model="isVisible" app timeout="-1" top :color="notif.color">
    {{ notif.title }}
    <template #action="{ attrs }">
      <v-btn
        color="white"
        text
        v-bind="attrs"
        @click.stop="$store.dispatch('notification/disable')"
      >
      </v-btn>
    </template>

    <div v-if="timer > 0" class="progress" :class="progressBgColor">
      <div class="progress-fill" :class="progressColor" :style="cssVars" />
    </div>
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("notification", ["isVisible", "notif", "timer"]),
    progressBgColor() {
      const status = this.notif.color;
      if (status === "error") return "red lighten-3";
      else if (status === "success") return "green lighten-3";
      else return "blue lighten-3";
    },
    progressColor() {
      const status = this.notif.color;
      if (status === "error") return "red lighten-1";
      else if (status === "success") return "green lighten-1";
      else return "blue lighten-1";
    },
    cssVars() {
      return {
        "--time": `${this.timer / 1000}s`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin shared {
  position: absolute;
  top: 0;
  right: 0;
  height: 4px;
  border-radius: 5px;
}

.progress {
  @include shared;
  width: 100%;

  .progress-fill {
    @include shared;
    animation: var(--time) linear 0s 1 normal forwards progress;
  }
}

@keyframes progress {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
