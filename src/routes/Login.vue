<template>
  <div class="container">
    <div class="card align-content-center">
      <div class="card-body">
        <h1 class="card-title">{{ $t("routes.login") }}</h1>
        <input
          class="form-control"
          :placeholder="$t('common.username')"
          type="text"
          v-model="usernameValue"
        />
        <input
          class="form-control"
          :placeholder="$t('common.password')"
          type="password"
          v-model="passwordValue"
        />
        <div class="d-flex flex-column">
          <button
            class="btn btn-primary"
            v-on:click="login(usernameValue, passwordValue)"
          >
            {{ $t("routes.login") }}
          </button>
          <a href="/register">{{ $t("routes.register") }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { RestService } from "@/services/RestService";
import { LoginData, LoginMethods } from "typings/routes/Login";
import { DefaultProps } from "vue/types/options";

export default Vue.extend<LoginData, LoginMethods, DefaultProps>({
  name: "Login",

  data() {
    return {
      // input values
      usernameValue: "",
      passwordValue: ""
    };
  },

  methods: {
    // on click login function
    login(username, password): void {
      new RestService().login(username, password).then(data => {
        if (!data) {
          this.$notify({
            group: "notification",
            title: this.$t("login.loginFailed") as string,
            text: this.$t("login.wrongCredentials") as string,
            type: "error",
            duration: 1000
          });
        } else {
          if (this.$route.params.nextUrl)
            this.$router.push(this.$route.params.nextUrl);
          else this.$router.push("/dashboard");
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
a {
  display: grid;
  place-items: center;
  margin-top: 10px;
}
.form-control {
  background: var(--inputColor);
  border-color: var(--inputBorderColor);
  color: var(--textColor);
}
</style>
