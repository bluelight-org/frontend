<template>
  <div class="container">
    <div class="card align-content-center">
      <div class="card-body">
        <h1 class="card-title">{{ $t("routes.register") }}</h1>
        <input
          class="form-control"
          v-bind:placeholder="$t('common.username')"
          type="text"
          v-model="usernameValue"
        />
        <input
          class="form-control"
          v-bind:placeholder="$t('common.password')"
          type="password"
          v-model="passwordValue"
        />
        <input
          class="form-control"
          v-bind:placeholder="$t('common.retypePassword')"
          type="password"
          v-model="passwordRetypeValue"
        />
        <div class="d-flex flex-column">
          <button
            class="btn btn-primary"
            v-on:click="
              register(usernameValue, passwordValue, passwordRetypeValue)
            "
          >
            {{ $t("routes.register") }}
          </button>
          <a href="/login">{{ $t("routes.login") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RestService } from "@/services/RestService";
import { RegisterData, RegisterMethods } from "typings/routes/Register";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<RegisterData, RegisterMethods, DefaultProps>({
  name: "Register",

  data() {
    return {
      usernameValue: "",
      passwordValue: "",
      passwordRetypeValue: ""
    };
  },

  methods: {
    register(username: string, password: string, retypePassword: string): void {
      new RestService()
        .register(username, password, retypePassword)
        .then(data => {
          if (!data[0]) {
            this.$notify({
              group: "notification",
              title: this.$t("register.registrationFailed") as string,
              text: data[1],
              type: "error",
              duration: 1000
            });
          } else {
            this.$notify({
              group: "notification",
              title: this.$t("register.registrationSuccessful") as string,
              text: data[1],
              type: "success",
              duration: 1000
            });
          }
        });
    }
  }
});
</script>

<style scoped>
.card {
  margin-top: 15%;
  background: var(--cardColor);
}
.card-body {
  background: var(--cardColor);
}
.card-title {
  text-align: center;
}
.form-control {
  height: 55px;
}
input {
  margin-top: 1em;
  font-size: 1.2em;
}
input::placeholder {
  text-align: center;
}
.btn {
  margin-top: 1em;
  padding: 13px;
  margin-left: 30%;
  margin-right: 30%;
  background-color: var(--buttonColor);
  border-color: var(--buttonColor);
}
.form-control {
  background: var(--inputColor);
  border-color: var(--inputBorderColor);
  color: var(--textColor);
}
a {
  display: grid;
  place-items: center;
  margin-top: 10px;
}
</style>
