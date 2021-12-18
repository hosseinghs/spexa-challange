<template>
  <div class="login-wrapper">
    <v-col cols="3">
      <v-card style="background-color: transparent" elevation="0">
        <v-form
          class="text-center"
          ref="loginForm"
          @submit.prevent="submitForm()"
        >
          <h3 class="mb-10">Try the product out for free.</h3>
          <Input
            type="email"
            placeholder="email"
            :rules="[mustFillRule, emailFormatRule]"
            @change="setUserData({ k: 'email', v: $event })"
          />
          <Input
            type="password"
            placeholder="password"
            :rules="[mustFillRule]"
            @change="setUserData({ k: 'password', v: $event })"
          />
          <Button type="submit" dark class="py-6" title="Register / Login" />
        </v-form>
      </v-card>
    </v-col>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Input from "../components/form/Input.vue";
import Button from "../components/btn/Button.vue";
import { mustFillRule, emailFormatRule } from "../utils/validation";
export default {
  name: "login-component",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      showError: false,
    };
  },
  computed: {
    ...mapGetters("loginRegister", ["user"]),
  },
  methods: {
    mustFillRule,
    emailFormatRule,
    ...mapActions("loginRegister", ["setUserData", "loginRegisterUser"]),
    async submitForm() {
      if (this.$refs.loginForm.validate()) {
        const res = await this.loginRegisterUser();
        if (res) this.$router.push("/directories");
      }
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
